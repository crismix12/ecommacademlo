const userRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const productsRoutes = require('./products.routes');
const productsInCartRoutes = require('./productsInCart.routes');
const orderRoutes = require('./orders.routes');
module.exports = {
    userRoutes,
    authRoutes,
    productsRoutes,
    productsInCartRoutes,
    orderRoutes
}