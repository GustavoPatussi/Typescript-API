import express from "express";
import { router } from "./routes/routes";
const app = express();

app.use(express.json());
app.use("/", router);

const port = 3000;
app.listen(port, () => {
   console.log("Servidor rodando na porta 3000");
});
