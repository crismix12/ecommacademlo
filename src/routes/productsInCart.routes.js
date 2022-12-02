const { Router } = require('express');
const { createProductInCart, getProductsInCart } = require('../controllers/productsInCart.controllers');

const authenticate = require('../middlewares/auth.middleware');
const router = Router();

/**
 * @openapi
 * /api/v1/cart/{cartId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products in cart from an user requires security
 *     tags: [cart]
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
 *                     $ref: "#/components/schemas/products" 
 * /api/v1/cart/add:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a product in an user's cart, requires security
 *     tags: [cart]
 *     requestBody:
 *       description: To add a new product to a cart you need, cartId, productId, quantity, price
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/cartproducts"
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
 *                     $ref: "#/components/schemas/cartproductsresp"
 */

//create a product in cart for an user protected
router.post('/cart/add', authenticate, createProductInCart);

//obtain all products in cart for an user
router.get('/cart/:cartId', authenticate, getProductsInCart);
// router.get('/cart/:cartId', getProductsInCart);

module.exports = router;