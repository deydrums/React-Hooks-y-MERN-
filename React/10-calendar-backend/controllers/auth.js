const {response} = require('express');
const User = require('../models/User');

const createUser = async(req,res = response)=>{
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email: email});
        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya fue registrado anteriormente'
            });
        };
        user = new User(req.body);
        await user.save();
    
        res.status(201).json({
            ok: true,
            msg: 'Registro de usuario exitoso',
            uid: user.id,
            name: user.name
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            msg: 'Ha ocurrido un error, intenta de nuevo'
        })
    }
}

const loginUser = (req,res = response)=>{
    const {email, password} = req.body

    res.status(200).json({
        ok: true,
        msg: 'login',
        email, 
        password
    })
}

const renewToken = (req,res = response)=>{
    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    createUser,
    loginUser,
    renewToken
};