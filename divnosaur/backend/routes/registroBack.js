const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos');
var mysql2 = require('mysql2');


const postRegister = async function (req, res) {
    const { user, email, password, age, phone, town, country, hobbies, experience } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    if (user) {
        sequelize.query('SELECT * FROM users WHERE name = :user_user', { replacements: { user_user: user }, type: sequelize.QueryTypes.SELECT })
            .then(users => {
                console.log(users);
                if (Object.keys(users).length === 0) {      
                    sequelize.query('INSERT INTO users (name,email,age,password,telephone_number,city,country,hobbies,experience) VALUES (?,?,?,?,?,?,?,?,?)',
                        { replacements: [req.body.user, req.body.email, req.body.age, req.body.password, req.body.phone, req.body.town, req.body.country, req.body.hobbies, req.body.experience], type: sequelize.QueryTypes.INSERT })
                    console.log('No existe el usuario')
                    res.status(200).send({ result: true, message: "Usuario creado con exito, inicie sesión" })
                } else {
                    console.log('si existe el usuario')
                    res.status(200).send({ result: false, message: 'Este usuario ya esta registrado, inicie sesión' })
                }
            })

            console.log('prueba')

    }

}

module.exports =  postRegister 
