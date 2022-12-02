const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: user
 *         email:
 *           type: string
 *           example: user@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *         createdAt: 
 *           type: string
 *           example: 2022-12-02T08:00:45.607Z
 *         updatedAt:
 *           type: string
 *           example: 2022-12-02T08:00:45.607Z  
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: user
 *         email:
 *           type: string
 *           example: user@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: user@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 * 
 *     loginresponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: user
 *         email:
 *           type: string
 *           example: user@gmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJjcmlzbWkyIiwiZW1haWwiOiJjcmlzbWkyQGdtYWlsLmNvbSIsImlhdCI6MTY3MDAwNjAyMCwiZXhwIjoxNjcwMDA2MzIwfQ.him7iG6bB0oKAeSFIhgT0bVMjWmxIhQGbLnOLicuAQP8-Jrs4BysRc_WSbzemymcWktzOckoGpzKrDF-JYJkHA 
 * 
 * 
 *           
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    hooks: {
        beforeCreate: (newUser, options) => {
            const {password} = newUser;
            const hash = bcrypt.hashSync(password, 8);
            newUser.password = hash;
        }
    }
})

module.exports = Users;