const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos')


const postLogin = async function(req, res) {
    const { email, password } = req.body
    console.log(req.body)
    if (email) {
        const result = sequelize.query('SELECT * FROM users WHERE email = :email_email', { replacements: { email_email: email }, type: sequelize.QueryTypes.SELECT })
            .then(users => {
                console.log(users);
                // Cambio 'result' a 'users' aquí:
                if (!users || users.length === 0) {     
                    console.log('No existe el usuario')
                    res.status(200).send({ result: false, message: "Este usuario no existe, registrese" })
                } else {
                    console.log('si existe el usuario')
                    res.status(200).send({ result: users[0], message: 'Usuario loggeado con exito' })
                }
            })
    }
}




module.exports =  postLogin
