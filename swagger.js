const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce Academlo Documentation",
            version: "1.0.0",
            description: "API que puede ser utilizada para el despliegue de un Ecommerce",
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/routes/auth.routes.js",
        "./src/routes/products.routes.js",
        "./src/routes/productsInCart.routes.js",
        "./src/routes/orders.routes.js",
        "./src/models/orders.models.js",
        "./src/models/products.models.js",
        "./src/models/users.models.js",
        "./src/models/productsInCart.models.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options);

//config documentation
//app express, port
const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //set response in JSON format
    app.get("api/v1/docs.json", (req, res) => {
        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Documentacion disponible en http://localhost:${port}/api/v1/docs`);
}

module.exports = swaggerDocs;