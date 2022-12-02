const { Router } = require('express');
const { createOrder, getOrders, completeOrder } = require('../controllers/orders.controllers');

// const authenticate = require('../middlewares/auth.middleware');
const router = Router();

//create a product for an user protected
// router.post('/products', createProduct);
router.post('/orders/:cartId', createOrder);

//obtain all products (protected)
// router.get('/orders/:cartId', createOrder);

//VER TODAS LAS ORDENES DEL USUARIO
//get all orders from an user
router.get('/orders/:userId', getOrders);

//realizar un update a orders cambiando el estado y vaciar el carrito actualizando el estado de los productos

router.put('/orders/complete', completeOrder);

module.exports = router;