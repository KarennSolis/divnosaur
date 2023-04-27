const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

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

app.post('/register', async (req, res) => {
    const { user, email, password, age, phone, town, country, hobbies, experience } = req.body
    console.log(req.body)
})

//Login
app.get('/login', async (req, res) => {
    res.status(200).send('Helo World')
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
})

//Publicaciones

//Amigos




app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});
