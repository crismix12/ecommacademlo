const UsersServices = require("../services/users.services");


const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UsersServices.add(newUser);
        res.status(200).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'faltan datos'
        });
    }
}

const getUserInfo = async (req, res, next) => {
    try {
        const {id} = req.params;
        const users = await UsersServices.getInfo(id);
        res.json(users);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        });
    }
}

module.exports = {
    createUser,
    getUserInfo
}