const express = require('express');
const requestTransfer = require('express-request-transfer');
const cors = require('cors');
const sequelize = require('./conexion-base-datos');
const postRegister = require('./routes/registroBack');
const postLogin = require ('./routes/loginBack')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
// const readPublication = require('./routes/publicatBack');
// const postPublication = require('./routes/publicatBack');


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

app.post('/register', postRegister);


//Login
app.get('/login', async (req, res) => {
    res.status(200).send('Helo World')
})
app.post('/login', postLogin);


//Publicaciones
// app.get('/publication', readPublication);
// app.get('/publication', 
// async (req, res) => {
//     const {text} = req.body
//     console.log(req.body)
//     then((resp)=> resp.json())
//     .then((data) => {
//         console.log(data.result);
//         data.result.map((item) => {
//             const content = document.createElement("div");
//             content.innerHTML =
//             `<h4>${item.text}</h4>`
//             ;
//       })}                 
//     )});

// app.post('/createPublication', postPublication);

//Amigos




app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});
