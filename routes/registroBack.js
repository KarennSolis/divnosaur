const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos');
var mysql2 = require('mysql2');


const postRegister = async function (req, res) {
    const { user, email, password, age, phone, town, country, hobbies, experience } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    if (user) {
        // Execute SQL query that'll select the account from the database based on the specified username and password
        // sequelize.query('SELECT * FROM users WHERE username = ? AND password = ?', [user, password], function(error, results, fields) {
        sequelize.query('SELECT * FROM users WHERE name = :user_user', { replacements: { user_user: user }, type: sequelize.QueryTypes.SELECT })
            .then(users => {
                console.log(users);
                if (Object.keys(users).length === 0) {
                    // return res.status(404).send(`No existe el usuario`);
                    //query de insert//
                    // let array_insert = ["Alias","2","3","@gmail.com","5*","año_mes_dia","7","8","link","estudios"];      
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



        // If there is an issue with the query, output the error
        // if (error) throw error;

        // const user = users.find(item => item.email == req.body.email);
        //     .then(users => { if (users={}) {
        // 		// return res.status(404).send(`No existe el usuario`);
        // 		console.log('No existe el usuario')
        // 	}else{ 
        // 		console.log('si existe el usuario')
        // 	}
        // }) 
        // res.send("nombre: " + user.user + "</br>" + "Email: " + user.email)

        // // If the account exists
        // if (results.length > 0) {
        //     res.send('Ya hay un usuario registrado con estos datos')
        // 	res.redirect('/login');

        //     res.json({
        //         status: 'ok',
        //     });

        // } else {
        // 	//crear usuario
        //     console.log('Hay que crear el usuario')
        // }	 	
        // res.end();
    }

}

module.exports =  postRegister 
