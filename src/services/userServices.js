import jwt from "jsonwebtoken";
import connection from "../database.js";
import bcrypt from "bcrypt";
import { checkEmail } from "../repositories/checkEmail.js";
import { createUser } from "../repositories/createUser.js";

async function authenticateSignIn(email, password){
    const user = await checkEmail(email, password);
    if(user === null){
      return null
    }
  
    const token = jwt.sign({
      id: user.rows[0].id
    }, process.env.JWT_SECRET);
    return token
}

async function authenticateSignUp(name, email, password){
  const existingUserWithGivenEmail = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  if (existingUserWithGivenEmail.rows[0]) {
    return null
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  await createUser(name, email, hashedPassword)
}

export { authenticateSignUp }

export { authenticateSignIn }