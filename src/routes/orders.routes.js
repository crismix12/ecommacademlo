const { Router } = require('express');
const { createOrder, getOrders, completeOrder } = require('../controllers/orders.controllers');

// const authenticate = require('../middlewares/auth.middleware');
const router = Router();


/**
 * @openapi
 * /api/v1/orders/{cartId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create an order
 *     tags: [orders]
 *     requestBody:
 *       description: To create a new Order you need userId
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/orderbody"
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart id 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/orderresponse" 
 * /api/v1/orders/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get an order from an user
 *     tags: [orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id 
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/getorderresponse"
 * /api/v1/orders/complete:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Complete an order
 *     tags: [orders]
 *     requestBody:
 *       description: To complete an order you need orderId and cartId
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/completeorder"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     {$ref: "#/components/schemas/completeresponse" } 
 */



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