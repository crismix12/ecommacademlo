const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     allproducts:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 3
 *         name:
 *           type: string
 *           example: earphones
 *         price:
 *           type: number
 *           example: 410.52
 *         availableQty:
 *           type: integer
 *           example: 10
 *         image: 
 *           type: string
 *           example: http://www.imgur.go
 *         userId:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 1
 *         seller:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               example: pablo
 *     productbody:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: smartwatch
 *         price:
 *           type: number
 *           example: 620.42
 *         availableQty:
 *           type: integer
 *           example: 12
 *         userId: 
 *           type: integer
 *           example: 10    
 *     productbodyresp:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 12
 *         name:
 *           type: string
 *           example: smartwatch
 *         price: 
 *           type: number
 *           example: 620.42 
 *         availableQty:
 *           type: integer
 *           example: 12
 *         userId:
 *           type: integer
 *           example: 10
 *         createdAt: 
 *           type: string
 *           example: 2022-12-02T08:00:45.607Z
 *         updatedAt:
 *           type: string
 *           example: 2022-12-02T08:00:45.607Z
 *         status:
 *           type: boolean
 *           example: true
 *         image:
 *           type: string
 *           example: http://www.imgur.go   
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "available_quantity"
    },
    status: {
        type: DataTypes.BOOLEAN,
        // defaultValue: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    }
    }, {
        hooks: {
            beforeCreate: (newProduct, options) => {
                const { availableQty } = newProduct;
                if(availableQty > 0){
                    newProduct.status = true;
                }else{
                    newProduct.status = false;
                }
            },

            beforeUpdate: (newData, options) => {
                const { availableQty } = newData;
                console.log(newData);
                if(availableQty > 0){
                    newData.status = true;
                }else{
                    newData.status = false;
                }
            }
        }
    });

module.exports = Products;

