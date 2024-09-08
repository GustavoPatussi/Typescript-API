import  {Sequelize}  from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/dataBase.sqlite',
});
sequelize.authenticate().then(() => console.log('Connecção com o banco de dados realizada.'))
    .catch((error) => console.error('Unable to connect to the database:', error));