const { OrdersServices } = require("../services");


const createOrder = async(req, res, next) => {
    try {
        const newOrder = req.body;
        const {cartId} = req.params;
        const result = await OrdersServices.create(cartId, newOrder);
        res.status(201).json(result);         
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'faltan datos'            
        })
    }
}

//check status
const getOrders = async(req, res, next) => {
    try {
        const {userId} = req.params;
        const result = await OrdersServices.get(userId);
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: ''
        })
    }
}

const completeOrder = async(req, res, next) => {
    try {
        const {id, cartId} = req.body;
        const toUpdate = {
            status: "complete",
        }
        const result = await OrdersServices.complete(toUpdate, id, cartId);
        return res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: ''           
        })
    }
}

module.exports = {
    createOrder,
    getOrders,
    completeOrder
}