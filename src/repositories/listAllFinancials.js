import connection from "../database.js";

async function listAllFinancials(user){
    const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [user.id]);
    return events
}

export { listAllFinancials }