const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');

const {userRoutes, authRoutes, productsRoutes, productsInCartRoutes, orderRoutes} = require('./routes');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log("Autenticacion exitosa"))
    .catch((error) => console.log(error));

db.sync({ force: false })
    .then(() => console.log("bd sincronizada"))
    .catch((error) => console.log(error))

app.get('/', (req, res) => {
    // console.log("Bienvenido al server");
    res.json("Crismi's Ecommerce Academlo UP!");
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productsRoutes);
app.use('/api/v1', productsInCartRoutes);
app.use('/api/v1', orderRoutes);

app.use(handleError);

module.exports = app;
