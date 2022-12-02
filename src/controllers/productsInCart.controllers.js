const { ProductsinCartServices } = require("../services");


const createProductInCart = async(req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductsinCartServices.add(newProduct);
        res.status(201).json(result);         
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'faltan datos'            
        })
    }
}

const getProductsInCart = async(req, res, next) => {
    try {
        const {cartId} = req.params;
        const result = await ProductsinCartServices.get(cartId);
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: ''            
        })
    }
}

module.exports = {
    createProductInCart,
    getProductsInCart
}