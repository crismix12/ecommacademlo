// const { Users, Conversations, Messages, Participants} = require('./index');

const {Users, Cart, Products, Orders, ProductsInCart} = require('./index');

const initModels = () => {
    
    //relacion 1 - 1 entre usuarios y carrito
    Users.hasOne(Cart, {as: "cart", foreignKey: "user_id"});
    Cart.belongsTo(Users, {as: "buyer", foreignKey: "user_id"});

    //relacion 1 - N entre usuarios y productos
    Users.hasMany(Products, {as: "products", foreignKey: "user_id"});
    Products.belongsTo(Users, {as: "seller", foreignKey: "user_id"});

    //relacion 1 - N entre usuarios y ordenes
    Users.hasMany(Orders, {as: "orders", foreignKey: "user_id"});
    Orders.belongsTo(Users, {as: "user", foreignKey: "user_id"});

    // //muchos a muchos ===> cart y products
    Cart.belongsToMany(Products, {through: 'productsincart'});
    Products.belongsToMany(Cart, {through: 'productsincart'});
        //1 a muchos ===> products y productsincart
        ProductsInCart.belongsTo(Products, {as: 'productInCart', foreignKey: 'product_id'});
        Products.hasMany(ProductsInCart, {as: 'productsInCart', foreignKey: 'product_id'});

    
    //Muchos a muchos ===> order y products
    Orders.belongsToMany(Products, {through: 'productsinorder'});
    Products.belongsToMany(Orders, {through: 'productsinorder'});

}

module.exports = initModels;

