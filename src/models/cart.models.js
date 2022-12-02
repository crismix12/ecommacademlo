const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Cart = db.define('cart', {
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
    }
});

module.exports = Cart;

