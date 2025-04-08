import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || "",
      process.env.DB_USER || "",
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST || "127.0.0.1",
        port: Number(process.env.DB_PORT) || 5432,
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export { sequelize };
