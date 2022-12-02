const { Router } = require('express');
const { createUser, getUserInfo } = require('../controllers/users.controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need, username, email, password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       200:
 *         description: created
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
 *                     $ref: "#/components/schemas/users"
 * /api/v1/users/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get Users info and Cart ID, requires security
 *     tags: [Users]
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
 *         description: obtained
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
 *                     $ref: "#/components/schemas/users"  
 */

router.get('/users/:id', authenticate, getUserInfo);
// router.get('/users/:id', getUserInfo);

router.post('/users', createUser);

module.exports = router;