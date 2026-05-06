import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nomedeguerra: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    patente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tempodeServico: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false 
     }
},{
    tableName: "users",
    timestamps: true
});