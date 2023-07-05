import express, { Application, Request, Response } from "express";
import router from "./routers";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`);
}
