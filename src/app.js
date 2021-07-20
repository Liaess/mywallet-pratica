import express from "express";
import cors from "cors";
import { signUp, signIn } from "./controllers/userController.js";
import { changeEvent, listFinancial, sumFinancials } from "./controllers/finalcial-events.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", signUp);

app.post("/sign-in", signIn);

app.post("/financial-events", changeEvent);

app.get("/financial-events", listFinancial);

app.get("/financial-events/sum", sumFinancials);

export default app;
