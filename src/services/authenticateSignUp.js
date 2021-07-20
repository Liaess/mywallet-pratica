import connection from "../database.js";
import { createUser } from "../repositories/createUser.js";
import bcrypt from "bcrypt";

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