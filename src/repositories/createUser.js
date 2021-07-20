import connection from "../database.js";
async function createUser(name, email, hashedPassword){
    const result = await connection.query(
      `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *`,
      [name, email, hashedPassword]
    );
    return result.rows[0];
}
export { createUser }