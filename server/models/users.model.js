import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config.js";

export const usersTable= sequelize.define('usuarios',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},
{
    createdAt: false,
    updatedAt: false
})