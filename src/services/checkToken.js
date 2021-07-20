
import jwt from "jsonwebtoken";
async function checkToken(user, token){
    try {
      user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return null
    }
    return user
}

export { checkToken }