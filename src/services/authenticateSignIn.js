import { checkEmail } from "../repositories/checkEmail.js";
import jwt from "jsonwebtoken";

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

export { authenticateSignIn }