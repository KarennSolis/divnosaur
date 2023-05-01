const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos')


const postLogin = async function(req, res) {
    const { email, password } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    if (email) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        // sequelize.query('SELECT * FROM users WHERE username = ? AND password = ?', [user, password], function(error, results, fields) {
        sequelize.query('SELECT * FROM users WHERE email = :email_email', { replacements: { email_email: email }, type: sequelize.QueryTypes.SELECT })
            .then(users => {
                console.log(users);
                if (Object.keys(users).length === 0) {
                    // return res.status(404).send(`No existe el usuario`);
                    //query de insert//
                    // let array_insert = ["Alias","2","3","@gmail.com","5*","año_mes_dia","7","8","link","estudios"];      
                    console.log('No existe el usuario')
                    res.status(200).send({ result: true, message: "Este usuario no existe, registrese" })
                } else {
                    console.log('si existe el usuario')
                    res.status(200).send({ result: false, message: 'Usuario loggeado con exito' })
                }
            })


    }

}

module.exports =  postLogin