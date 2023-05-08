const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos')


const postLogin = async function(req, res) {
    const { email, password } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    if (email) {
        sequelize.query('SELECT * FROM users WHERE email = :email_email', { replacements: { email_email: email }, type: sequelize.QueryTypes.SELECT })
            .then(users => {
                console.log(users);
                if (Object.keys(users).length === 0) {     
                    console.log('No existe el usuario')
                    res.status(200).send({ result: true, message: "Este usuario no existe, registrese" })
                } else {
                    console.log('si existe el usuario')
                    res.status(200).json({ result: false, message: 'Usuario loggeado con exito', user_id: users[0].user_id})//CAMBIO KAREN//
                }
            })


    }

}

module.exports =  postLogin
