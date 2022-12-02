const { Users, Conversations, Cart } = require('../models');

class UsersServices {
    static async add(newUser){
        try {
            const result = await Users.create(newUser);
            const userId = {
                "userId": result.dataValues.id,
                "totalPrice": 0.0,
            };
            const cart = await Cart.create(userId);
            return result;
        } catch (error) {
            throw(error);
        }
    }

    static async getInfo(id) {
        try {
            const result = await Users.findOne({
                where:{id},
                attributes: ["id", "username", "email"],
                include:{
                    model: Cart,
                    as: "cart",
                    attributes: ["id"]
                }
            });

            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UsersServices;