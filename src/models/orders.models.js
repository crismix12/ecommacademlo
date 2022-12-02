const db = require('../utils/database');
const { DataTypes } = require('sequelize');

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