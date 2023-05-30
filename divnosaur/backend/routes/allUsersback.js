const cors = require('cors');
const sequelize = require('../conexion-base-datos');
var mysql2 = require('mysql2');
const express = require('express');
// const userRouter =  express.Router

const allUser = async (req, res) => {
    // userRouter.get("/allUsers",async (req, res) => {
    try {
        const personas = await sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT })
        res.send(personas);
        console.log(personas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
    // });
};


const namesUsers = async (req, res) => {
    try {
        const namesWriters = await sequelize.query('SELECT users.name , posts.* FROM users JOIN posts ON users.user_id = posts.user_id ORDER BY post_creation_date DESC', { type: sequelize.QueryTypes.SELECT });
        res.send(namesWriters);
        console.log(namesWriters);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
}

/* module.exports.allUser = allUser; */
// module.exports = userRouter;

module.exports = {
    allUser,
    namesUsers
};
