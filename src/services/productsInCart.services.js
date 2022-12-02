const { ProductsInCart, Cart, Users, Products } = require("../models");


class ProductsinCartServices {
    static async add(newProduct){
        try {
            const result = await ProductsInCart.create(newProduct);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    // static async get(id){
    //     try {
    //         const result = await Cart.findOne({
    //             where: {id},
    //             include: [
    //                 {
    //                     model: Users,
    //                     as: "buyer"
    //                 },
    //                 {
    //                     model: Products,
    //                     include: {
    //                         model: Users,
    //                         as: "seller"
    //                     }

    //                 }
    //             ] 
    //         })
    //         return result;
    //     } catch (error) {
    //         throw(error);
    //     }
    // }

    static async get(cartId){
        try {
            const result = await ProductsInCart.findAll({
                where:
                {
                    cartId,
                    status: true
                },
                attributes: ["id", "cartId", "productId", "quantity", "price"],
                include:{
                    model: Products,
                    as: "productInCart",
                    attributes: ["name", "price", "availableQty"]
                }
            })
            // console.log(result);
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = ProductsinCartServices;
