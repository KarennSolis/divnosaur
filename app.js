const express = require('express');
const requestTransfer = require('express-request-transfer');
const cors = require('cors');
const sequelize = require('./conexion-base-datos');
const postRegister = require('./routes/registroBack');
const postLogin = require ('./routes/loginBack')
const postFriends = require ('./routes/friendsBack')
const { getUser } = require("./routes/usersBack");
const { allUser} = require("./routes/allUsersback");
// const { allUser} = require("./routes/usersBack");
// const followers = require('./routes/followBack');
const {followers} = require('./routes/followBack');
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
/* app.get('/login', async (req, res) => {
    console.log(result)
    res.status(200).send(result)
}) */
app.post('/login', postLogin);



//Amigos

app.get('/friends', async (req, res) => {
    res.status(200).send('Render friends')
})
app.post('/friends', postFriends);

//Followers//
// app.get('/followed/:user_id', async (req, res) => {
//     res.status(200).send('Render followers')})
// app.post('/followed/:user_id', followers);

app.route("/followed/:user_id", async (req, res) => {
    res.status(200).send('Render follow')})
    .get(followers)

//Recoger datos usuarios//
// app.use("/", userRouter);

// router.route("/:user_id")
// 	.get(getUser) 
app.route("/users")
	.get(allUser) 
    
app.route("/:user_id")
	.get(getUser) 

// app.route("/renderUsers")
// 	.get(allUser) 


app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});
