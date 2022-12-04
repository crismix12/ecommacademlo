const db = require('../utils/database');
const {Users, Cart, Products, ProductsInCart, Orders, ProductsInOrder} = require('../models');
const initModels = require('../models/initModels');

initModels();
const users = [
    {
        username: 'crismi', 
        email: 'crismi@gmail.com', 
        password: '1234'
    },
    {
        username: 'maria', 
        email: 'maria@gmail.com', 
        password: '1234'
    },
    {
        username: 'pablo', 
        email: 'pablo@gmail.com', 
        password: '1234'
    },
    {
        username: 'carlos', 
        email: 'carlos@gmail.com', 
        password: '1234'
    }    
];

const carts = [
    {
        userId: 1,
        totalPrice: 0.0
    },
    {
        userId: 2,
        totalPrice: 0.0
    },
    {
        userId: 3,
        totalPrice: 0.0
    },
    {
        userId: 4,
        totalPrice: 0.0
    }
]

const products = [
    {
        name: "tv",
        price: 1554.42,
        availableQty: 5,
        userId: 1
    },
    {
        name: "mouses",
        price: 319.99,
        availableQty: 10,
        userId: 1
    },
    {
        name: "keyboards",
        price: 599.99,
        availableQty: 2,
        userId: 1
    },
    {
        name: "earbuds",
        price: 229.99,
        availableQty: 0,
        userId: 1
    },
    {
        name: "earbuds",
        price: 330.0,
        availableQty: 10,
        userId: 2
    },
    {
        name: "keyboards",
        price: 510.0,
        availableQty: 4,
        userId: 2
    },
    {
        name: "headset",
        price: 710.0,
        availableQty: 8,
        userId: 2
    },
    {
        name: "mouses",
        price: 110.0,
        availableQty: 0,
        userId: 2
    },
    {
        name: "iphone",
        price: 1100.0,
        availableQty: 9,
        userId: 3
    },
    {
        name: "earbuds",
        price: 310.0,
        availableQty: 8,
        userId: 3
    },
    {
        name: "tv",
        price: 1550.0,
        availableQty: 6,
        userId: 3
    },
    {
        name: "keyboards",
        price: 510.0,
        availableQty: 0,
        userId: 3
    },
]
//antes de generar la orden tiene que tener productos en el carrito
//maria compra dos una tv y un mouse al usuario 1
const productsInCart = [
    {
        cartId: 2,
        productId: 1,
        quantity: 1,
        price: 1554.42
    },
    {
        cartId: 2,
        productId: 2,
        quantity: 1,
        price: 319.99
    }
]

//Maria genera una Orden
const orders = [
    {
        userId: 2,
        totalPrice: 1874.41
    }
]

//una vez creada la orden se generan los productos del carrito en un producto en orden
const productsInOrder = [
    {
        orderId: 1,
        productId: 1,
        quantity: 1,
        price: 1554.42 
    },
    {
        orderId: 1,
        productId: 2,
        quantity: 1,
        price: 319.99        
    }
]


db.sync({ force: true }).then(() => {
    console.log("Sinronizado");
    users.forEach(async (user) => await Users.create(user));
    setTimeout(() => {
        carts.forEach(
        async (conversation) => await Cart.create(conversation)
      );
    }, 100);
    setTimeout(() => {
        products.forEach(
        async (participant) => await Products.create(participant)
      );
    }, 200);
    setTimeout(() => {
        productsInCart.forEach(async (message) => await ProductsInCart.create(message));
    }, 300);
    setTimeout(() => {
        orders.forEach(async (message) => await Orders.create(message));
    }, 400);
    setTimeout(() => {
        productsInOrder.forEach(async (message) => await ProductsInOrder.create(message));
    }, 500);
  });