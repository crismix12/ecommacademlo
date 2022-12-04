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
 *     getorderresponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 9
 *         userId:
 *           type: integer
 *           example: 10
 *         totalPrice:
 *           type: number
 *           example: 2540.33
 *         status:
 *           type: string
 *           example: pendant      
 *     completeorder:
 *       type: object
 *       properties:
 *         orderId:
 *           type: integer
 *           example: 9
 *         cartId:
 *           type: integer
 *           example: 3
 *     completeresponse:
 *       type: object
 *       properties:
 *         type: string
 *         example: order completed        
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