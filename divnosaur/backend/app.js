require('dotenv').config()
const express = require('express');
const requestTransfer = require('express-request-transfer');
const moment = require('moment');
const cors = require('cors');
const sequelize = require('./conexion-base-datos');
const postRegister = require('./routes/registroBack');
const postLogin = require('./routes/loginBack');
const { getPublications, getAllPublications , postPublications }= require('./routes/publicatBack')
const {updateFriendshipStatus} = require('./routes/friendsPrueba')
const postFriends = require ('./routes/friendsBack')
const { getUser } = require("./routes/usersBack");
const { allUser, namesUsers} = require("./routes/allUsersback");
// const { allUser} = require("./routes/usersBack");
// const followers = require('./routes/followBack');
const { followers } = require('./routes/followBack');
const { getUserDataById } = require('./routes/perfilBack')
const { updateUserDataById } = require('./routes/perfilBack')
const app = express();
// const port = process.env.PORT || 3000;
const port = 3001;
app.use(requestTransfer);
app.use(express.json());
app.use(cors());




//Rutas
app.get('/', async (req, res) => {
    res.status(200).send('Estoy en el back')
})
//Registro
app.get('/register', async (req, res) => {
    res.status(200).send('Helo World')
})

app.post('/register', postRegister);

//Perfil//
app.route("/profile/:user_id")
    .get(getUserDataById)
    .patch(updateUserDataById)

//Login
app.get('/login', async (req, res) => {
    console.log(res)
    res.status(200).send(res)
})
/* app.get('/login', async (req, res) => {
    console.log(result)
    res.status(200).send(result)
}) */
app.post('/login', postLogin);


//PUBLICACIONES :  cargar y crear en la página de inicio

/* app.get('/publications', getPublications);  */

app.get('/allPublications', getAllPublications);

app.get('/publications', async function(req, res) {
    const user_id = req.query.user_id;
    console.log(req.query.user_id)
    if (user_id) {
        sequelize.query('SELECT * FROM posts WHERE user_id = :user_user', { replacements: { user_user: user_id }, type: sequelize.QueryTypes.SELECT })
            .then(posts => {
                console.log(posts.length);
                console.log(posts)
                res.status(200).send({ posts })
                /* if (Object.keys(posts).length === 0) {
                    console.log('No existen publicaciones para este usuario')
                    res.status(200).send({ result: false, message: "No existen publicaciones para este usuario" })
                } else {
                    console.log('Si existen publicaciones para este usuario')
                    res.status(200).send({ result: posts, message: 'Si existen publicaciones para este usuario' })
                } */
            })
    }
});

app.post('/createPublications', postPublications);

//nombre de usuario
app.get('/:name', namesUsers);


//Seguidores y Solicitudes de Seguimiento
//KAREN//
app.route("/changeStatus/:user_id")
    .patch(updateFriendshipStatus);
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
    res.status(200).send('Render follow')
})
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
