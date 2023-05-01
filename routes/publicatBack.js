const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos');

const readPublication = async function (req, res) {
    const { text } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    if (user) {

        sequelize.query('SELECT * FROM users INNER JOIN posts ON user_id = user_id ', { replacements: { user_id: user.id }, type: sequelize.QueryTypes.SELECT })
            .then(posts => {
                console.log(posts);
                if (Object.keys(posts).length === 0) {
                    console.log('No hay publicaciones de este usuario')
                    res.status(200).send({ result: true, message: "No hay publicaciones de este usuario" })
                } else {
                    res.status(200).send({ result: false, message: 'Estas son las publicaciones de usuario' })
                }
                
            })
            .then((resp)=> resp.json())
            .then((data) => {
                console.log(data.result);
                data.result.map((item) => {
                    const content = document.createElement("div");
                    content.innerHTML = 
                    <h4>&{item.text}</h4>
                    ;
                })

            })
        }
    }


const postPublication = async function (req, res) {
    const { text } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    if (user) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        // sequelize.query('SELECT * FROM users WHERE username = ? AND password = ?', [user, password], function(error, results, fields) {
            sequelize.query('INSERT INTO users (name,email,age,password,telephone_number,city,country,hobbies,experience) VALUES (?,?,?,?,?,?,?,?,?)',
            { replacements: [req.body.user, req.body.email, req.body.age, req.body.password, req.body.phone, req.body.town, req.body.country, req.body.hobbies, req.body.experience], type: sequelize.QueryTypes.INSERT })
        console.log('No existe el usuario')
        res.status(200).send({ result: true, message: "Usuario creado con exito, inicie sesión" })sequelize.query('SELECT * FROM posts WHERE user_Id = :user_id', { replacements: { user_id: user.id }, type: sequelize.QueryTypes.SELECT })
            .then(posts => {
                console.log(posts);
                if (Object.keys(posts).length === 0) {
                    console.log('No hay publicaciones de este usuario')
                    res.status(200).send({ result: true, message: "No hay publicaciones de este usuario" })
                } else {
                    res.status(200).send({ result: false, message: 'Estas son las publicaciones de usuario' })
                }
                
            })
            .then((resp)=> resp.json())
            .then((data) => {
                console.log(data.result);
                data.result.map((item) => {
                    const content = document.createElement("div");
                    content.innerHTML = 
                    <h4>&{item.text}</h4>
                    ;
                })

            })

    }

}

module.exports =  readPublication;
module.exports =  postPublication;

