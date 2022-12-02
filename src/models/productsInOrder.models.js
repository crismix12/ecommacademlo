const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductsInOrder = db.define('productsinorder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id"
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
    status:{
        type: DataTypes.ENUM("pendant", "complete"),
        defaultValue: "pendant"
    }
});

module.exports = ProductsInOrder;