import Sequelize from "sequelize";
import { sequelize } from "../database/sequelize-sqlite";

export const Tasks = sequelize.define("Tasks", {
   title: {
      type: Sequelize.STRING,
   },
   status: {
      type: Sequelize.STRING,
   },
});

// Tasks.sync({ force: true });
