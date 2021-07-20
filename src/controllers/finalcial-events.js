import { checkToken } from "../services/checkToken";
import { checkType } from "../services/checkType";
import { createFinancial } from "../repositories/createFinancial";

async function changeEvent (req, res){
    try {
      const authorization = req.headers.authorization || "";
      const token = authorization.split('Bearer ')[1];
      const { value, type } = req.body;
  
      if (!token) {
        return res.sendStatus(401);
      }
  
      let user;
      const checkingUser = await checkToken(user, token)
      if(checkingUser === null) return res.sendStatus(401);
      user = checkingUser
  
      if (!value || !type) {
        return res.sendStatus(400);
      }
  
      if (value < 0) {
        return res.sendStatus(400);
      }
  
  
  
      const checkedType = await checkType(type)
      if(checkedType === null) return res.sendStatus(400);
  
      await createFinancial(user, value, type)
  
  
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
}

export { changeEvent }