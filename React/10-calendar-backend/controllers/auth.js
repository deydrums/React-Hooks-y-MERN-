const {response} = require('express');
const User = require('../models/User');
var bcrypt = require('bcryptjs');
const {generateJWT} = require('../helpers/jwt');

const createUser = async(req,res = response)=>{
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email: email});
        if(user){
            return res.status(400).json({
                ok: false,
                message: 'El correo ya fue registrado anteriormente'
            });
        };
        user = new User(req.body);
        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password,salt);

        await user.save();
        //Generar nuestro JWT
        const token = await generateJWT(user.id, user.name);

    
        res.status(201).json({
            ok: true,
            message: 'Registro de usuario exitoso',
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error, intenta de nuevo'
        })
    }
}

const loginUser = async(req,res = response)=>{
    const {email, password} = req.body

    try {
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({
                ok: false,
                message: 'Usuario no encontrado'
            });
        };

        //Confirmar los passwords
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                ok: false,
                message: 'Password incorrecto'
            });
        };

        //Generar nuestro JWT
        const token = await generateJWT(user.id, user.name);

        res.status(200).json({
            ok: true,
            message: 'Login correcto',
            uid: user.id,
            name: user.name,
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Ha ocurrido un error, intenta de nuevo'
        });
    }
}

const renewToken = async(req,res = response)=>{
    const uid = req.uid;
    const name = req.name;

    //Generar nuestro JWT
    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        message: 'Nuevo token generado',
        uid,
        name,
        token
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
};