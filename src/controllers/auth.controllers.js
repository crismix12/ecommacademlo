//necesitar el servicio
const {AuthServices} = require('../services');

const userLogin = async(req, res, next) => {
    try {
        //email y password
        const credentials = req.body;
        // console.log(credentials);
        const result = await AuthServices.authenticate(credentials);
        // res.json(result);
        //false ==> no era contrasenia invalida
        //null ==> no se encuentra al usuario

        //Responde:
        //{isValid, result}
        //por eso result.result
        if(result) {
            const { id, username, email } = result.result;
            const user = { id, username, email };
            const token = AuthServices.genToken(user); 
            // res.json({token, user});
            user.token = token;
            res.json({...user});
        }else{
            res.status(400).json({message: 'Informacion invalida'});
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Email o contrasenia invalida'
        })       
    }
}

module.exports = {
    userLogin,

};