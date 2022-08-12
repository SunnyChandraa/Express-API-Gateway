import {Sequelize} from "sequelize";

const db = new Sequelize('crud_api', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;