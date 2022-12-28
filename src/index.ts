import express from "express";
import { url } from "inspector";

const app: express.Application = express();
const PORT: number = 8080;

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function () {
    console.log(`Server on port ${PORT}`);
});
