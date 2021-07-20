import connection from "../database.js";

async function createFinancial(user, value, type){
    await connection.query(
      `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
      [user.id, value, type]
    );
}

export { createFinancial }