const express = require('express');
const requestTransfer = require('express-request-transfer');
const cors = require('cors');
const sequelize = require('./conexion-base-datos');
const postRegister = require('./routes/registroBack');
const postLogin = require ('./routes/loginBack')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
app.use(requestTransfer);
app.use(express.json());
app.use(cors());



//Rutas
app.get('/', async (req, res) => {
    res.status(200).send('Helo World')
})
//Registro
app.get('/register', async (req, res) => {
    res.status(200).send('Helo World')
})

/* app.post('/register', async (req, res) => {
    const { user, email, password, age, phone, town, country, hobbies, experience } = req.body
    console.log(req.body)
    // if (user && email && password && age && phone && town && country && hobbies && experience)  {
    /* 		if (user)  {
                // Execute SQL query that'll select the account from the database based on the specified username and password
                // sequelize.query('SELECT * FROM users WHERE username = ? AND password = ?', [user, password], function(error, results, fields) {
                sequelize.query('SELECT * FROM users WHERE name = :user_user', {   replacements: { user_user: user },   type: sequelize.QueryTypes.SELECT })
                .then(users => {
                    console.log(users);
                  if (Object.keys(users).length === 0) {
                    // return res.status(404).send(`No existe el usuario`);
    //query de insert//
                // let array_insert = ["Alias","2","3","@gmail.com","5*","año_mes_dia","7","8","link","estudios"];      
                sequelize.query('INSERT INTO `users`(`name`,`email`,`age`,`password`,`telephone_number`,`city`,`country`,`hobbies`,`experience`,`birthdate`,`studies`,`linkedin`,`role`,`registration_date`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
                     {replacements: req.body, type: sequelize.QueryTypes.INSERT })
                    console.log('No existe el usuario')
                res.status(200).send({result: true, message: "Usuario creado con exito, inicie sesión"})
                }else{ 
                    console.log('si existe el usuario')
                    res.status(200).send({result: false, message:'Este usuario ya esta registrado, inicie sesión'})
                }
            })
        
                
        
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
                } */
    // sequelize.query('SELECT * FROM users WHERE username = :user_user', {   replacements: { user_user: user },   type: sequelize.QueryTypes.SELECT })
    // .then(users => {
    // 	console.log(users);
    //   })
/* })  */


app.post('/register', postRegister);



//Login
app.get('/login', async (req, res) => {
    res.status(200).send('Helo World')
})

/* app.post('/login', async (req, res) => {
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

}) */

app.post('/login', postLogin);




//Publicaciones
// app.post('/publication', async (req, res) => {

// })
//Amigos




app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});
