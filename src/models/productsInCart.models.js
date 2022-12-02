const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         cartId:
 *           type: integer
 *           example: 3
 *         productId:
 *           type: integer
 *           example: 5
 *         quantity:
 *           type: integer
 *           example: 4
 *         price: 
 *           type: number
 *           example: 1230.43
 *         productInCart:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: iphone
 *             price:
 *               type: number
 *               example: 1230.43
 *             avalableQty:
 *               type: integer
 *               example: 30  
 *     cartproducts:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *           example: 3
 *         productId:
 *           type: integer
 *           example: 5
 *         quantity:
 *           type: integer
 *           example: 4
 *         price: 
 *           type: number
 *           example: 1230.43    
 *     cartproductsresp:
 *       type: object
 *       properties:
 *         status:
 *           type: boolean
 *           example: true
 *         id:
 *           type: integer
 *           example: 1
 *         cartId:
 *           type: integer
 *           example: 3
 *         productId:
 *           type: integer
 *           example: 5
 *         quantity:
 *           type: integer
 *           example: 4
 *         price: 
 *           type: number
 *           example: 1230.43 
 *         createdAt: 
 *           type: string
 *           example: 2022-12-02T08:00:45.607Z
 *         updatedAt:
 *           type: string
 *           example: 2022-12-02T08:00:45.607Z   
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const ProductsInCart = db.define('productsincart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id"
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id"
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    }
});

module.exports = ProductsInCart;

