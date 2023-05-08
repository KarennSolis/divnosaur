const express = require('express');
const requestTransfer = require('express-request-transfer');
const cors = require('cors');
const sequelize = require('./conexion-base-datos');
const postRegister = require('./routes/registroBack');
const postLogin = require ('./routes/loginBack')
const postFriends = require ('./routes/friendsBack')
const { getUser } = require("./routes/usersBack");
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

app.post('/register', postRegister);


//Login
app.get('/login', async (req, res) => {
    res.status(200).send('Helo World')
})
app.post('/login', postLogin);



//Amigos

app.get('/friends', async (req, res) => {
    res.status(200).send('Render friends')
})
app.post('/friends', postFriends);

//Recoger datos usuarios//
// app.use("/", userRouter);

// router.route("/:user_id")
// 	.get(getUser) 

app.route("/:user_id")
	.get(getUser) 

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});
