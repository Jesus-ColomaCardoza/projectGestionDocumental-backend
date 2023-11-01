import { Sequelize } from "sequelize";

const connection = new Sequelize(
    'dbgestiondocumental',
    'postgres',
    'jesuspostgre',
    {
        host:'localhost',
        dialect:'postgres',
        logging:console.log // Displays all log function call parameters
    }
);

export default connection;
