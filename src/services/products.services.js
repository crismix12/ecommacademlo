const { Products, Users } = require('../models');

class ProductsServices {
    static async add(newProduct){
        try {
            const result = await Products.create(newProduct);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async get(){
        try {
            const result = await Products.findAll({
                where: {
                    status: true 
                }, 
                attributes: ["id", "name", "price", "availableQty", "image", "userId", "user_id"], 
                include: {
                    model: Users,
                    as: "seller",
                    attributes: ["username"]
                }
            })
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = ProductsServices;