const { Orders, ProductsInCart, ProductsInOrder, Users, Products } = require("../models");


class OrdersServices {
    static async create(cartId, userId) {
        try {
            let totalPrice = 0.0;
            //una vez que existe la orden preguntamos por los productos en carro
            const productsInCart = await ProductsInCart.findAll({
                where:
                {
                    cartId,
                    status: true
                }
            });

            if (productsInCart.length !== 0) {
                productsInCart.forEach((product) => {
                    totalPrice += product.dataValues.quantity * product.dataValues.price;
                });
                //generamos la orden con el precio de todos los elementos del carrito
                const newOrder = {
                    userId,
                    totalPrice
                }
                //generamos la creacion de la orden
                const createOrder = await Orders.create(newOrder);
                //obtenemos el id de la orden Generada
                const orderId = createOrder.dataValues.id;
                //Generamos el body de producto in order por cada producto del carro
                const productsInCartArray = productsInCart.map((product) => {
                    return {
                        //pensar que sucede cuando no hay nada o dejarlo al front
                        orderId,
                        productId: product.dataValues.productId,
                        quantity: product.dataValues.quantity,
                        price: product.dataValues.price
                    };
                });
                //Luego adicionamos los productos a productos in Order

                productsInCartArray.forEach(async (product) => {
                    const generateProductsInOrder = await ProductsInOrder.create(product);
                    // console.log(generateProductsInOrder);
                })
                return createOrder;
            } else {
                return { message: "No products in cart" }
            }
        } catch (error) {
            throw (error);
        }
    }

    static async get(userId){
        try {
            const userOrders = await Orders.findAll({
                where: {
                    userId,
                    // status: "pendant"
                },
                include: [{
                    model: Users,
                    as: "user",
                    attributes: ["username", "email"]
                }, {
                    model: Products,
                    attributes: ["id", "name", "price", "availableQty"]
                }]
            })
            return userOrders;
        } catch (error) {
            throw(error);
        }
    }

    static async complete(toUpdate, orderId, cartId){
        // const id = orderId;
        // console.log(orderId);
        try {
            const orders = await Orders.update(toUpdate, { 
                where: { id: orderId } 
            });
            if(orders){
                const productsInOrders = await ProductsInOrder.update(toUpdate, {
                    where: { orderId }
                });

                const emptyOrdersInCart = await ProductsInCart
                .update(
                    {status: "false"}, 
                    {
                        where: { cartId }
                    });

                const getInCartQty = await ProductsInCart.findAll({
                    where: { status: "false", cartId }
                });

                const qtyInCartArray = getInCartQty.map((product) =>{
                    return {
                        productId: product.dataValues.productId,
                        quantity: product.dataValues.quantity
                    }
                });

                const getProducts = await Products.findAll({
                    where: {status: true}
                })

                const qtyInProductsArray = getProducts.map((product) => {
                    return {
                        productId: product.dataValues.id,
                        quantity: product.dataValues.availableQty                      
                    }
                })

                const updatedProductsQty = [];

                for(let i=0; i<qtyInProductsArray.length; i++){
                    for(let j=0; j<qtyInCartArray.length; j++){
                       if(qtyInProductsArray[i].productId === qtyInCartArray[j].productId){
                         updatedProductsQty.push(
                            {
                                productId: qtyInCartArray[j].productId,
                                quantity: qtyInProductsArray[i].quantity - qtyInCartArray[j].quantity  
                            })
                       } 
                    }
                }

                updatedProductsQty.forEach(async(product) => {
                    const toUpdateQty = {availableQty: product.quantity}
                    const toUpdateProductsQty = await Products.update(toUpdateQty, {
                        where: {id: product.productId},
                        individualHooks: true
                    }) 
                })

            }
            return {message: "order completed"};
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = OrdersServices;