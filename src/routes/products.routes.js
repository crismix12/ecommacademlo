const { Router } = require('express');
const { createProduct, getProducts } = require('../controllers/products.controllers');
const authenticate = require('../middlewares/auth.middleware');
// const authenticate = require('../middlewares/auth.middleware');
const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products which quantity is greater than 0
 *     tags: [products]
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
 *                     $ref: "#/components/schemas/allproducts" 
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a product to be selled in the ecommerce
 *     tags: [products]
 *     requestBody:
 *       description: To create a new product to a cart you need
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/productbody"
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
 *                     $ref: "#/components/schemas/productbodyresp"
 */

//create a product for an user protected
router.post('/products', authenticate, createProduct);

//obtain all products (protected)
router.get('/products', authenticate, getProducts);

module.exports = router;