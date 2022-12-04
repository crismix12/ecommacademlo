const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     orderbody:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1 
 *     orderresponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: pendant
 *         id:
 *           type: integer
 *           example: 12
 *         userId:
 *           type: integer
 *           example: 1
 *         totalPrice:
 *           type: number
 *           example: 2304.32
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Orders = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "total_price"
    },
    status:{
        type: DataTypes.ENUM("pendant", "complete"),
        defaultValue: "pendant"
    }
});

module.exports = Orders;