import express, { Application } from "express";
import sequelize from "./database";
import router from "./routes";
import UserService from "./services/UserServices";
import User from "./models/User";
import ItemService from "./services/ItemServices";

const PORT: number = parseInt(process.env.PORT || "5000");

const app: Application = express();

app.use(express.json());

app.use("/api", router);

const start = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    UserService.initialize(sequelize);
    ItemService.initialize(sequelize);

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
