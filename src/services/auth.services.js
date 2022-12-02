const {Users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

class AuthServices {
    static async authenticate(credentials) {
        try {
            const {email, password} = credentials;
            const result = await Users.findOne({
                where: {email}
            });
            //puede responder null la consulta
            if(result) {
                // const {password} = result
                // const isValid = bcrypt.compareSync('string', hash);
                //comparacion de contra enviada y encriptada
                const isValid = bcrypt.compareSync(password, result.password);
                return isValid ? {isValid, result} : isValid;
            }else{
                return result;
            }
            // console.log(result);
        } catch (error) {
            throw(error);
        }
    }

    static genToken(data){
        try {
            const token = jwt.sign(data, process.env.SECRET, {
                expiresIn: '5m',
                algorithm: 'HS512',
            });
            return token;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = AuthServices;

// email ===> tengo que obtener al usuario de la base de datos
//