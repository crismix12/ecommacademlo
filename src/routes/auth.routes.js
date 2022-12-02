const {Router} = require('express');
const { userLogin } = require('../Controllers/auth.controllers');
const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Insert your email and password to obtain a token and test endpoints
 *     tags: [Users]
 *     requestBody:
 *       description: To get your TOKEN you need, email, password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       200:
 *         description: token generated
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
 *                     $ref: "#/components/schemas/loginresponse"
 * 
 */

router.post('/auth/login', userLogin);

module.exports = router;