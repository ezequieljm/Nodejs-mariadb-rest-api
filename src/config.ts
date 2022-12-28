import { config } from "dotenv";

config();

export const PORT: any = process.env.PORT || 8080;

export const DB_HOST: string = process.env.PORT || "localhost"
