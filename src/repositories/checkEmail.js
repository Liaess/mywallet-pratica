import connection from "../database";
import bcrypt from "bcrypt";

async function checkEmail(email, password){
    const user = await connection.query(
      `SELECT * FROM "users" WHERE "email"=$1`,
      [email]
    );
  
    if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) {
      return null
    }
    return user
}

export { checkEmail }