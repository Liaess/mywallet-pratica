import jwt from "jsonwebtoken";

async function checkType(type){
    if (!['INCOME', 'OUTCOME'].includes(type)) {
      return null
    }
}

async function checkToken(user, token){
    try {
      user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return null
    }
    return user
}

export { checkToken, checkType}