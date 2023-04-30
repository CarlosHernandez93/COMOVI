// import {createPool} from "mysql2/promise"

// export const pool = createPool({
//     host:'localhost',
//     port: 3306,
//     user: 'root',
//     database: 'comovidb' 
// })

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("comovidb","root", null,{
    host: 'localhost',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})