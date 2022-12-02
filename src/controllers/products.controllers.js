const { ProductsServices } = require("../services");


const createProduct = async(req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductsServices.add(newProduct);
        res.status(201).json(result);         
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'faltan datos'            
        })
    }
}

const getProducts = async(req, res, next) => {
    try {
        const result = await ProductsServices.get();
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
    createProduct,
    getProducts
}