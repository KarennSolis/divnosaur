const cors = require('cors');
const sequelize = require('../conexion-base-datos');
var mysql2 = require('mysql2');
const express = require('express')




const getUser = async (request, response) => {
	const user_id = request.params.user_id;
	try {

        sequelize.query("SELECT * FROM users WHERE user_id = :user_id", { replacements: { user_id: user_id }, type: sequelize.QueryTypes.SELECT })
        .then(users => {
            console.log(users);
            if (users.isEmpty) return response.status(404).json({ msg: "El usuario no existe" });
            return response.status(200).json(users[0])
        })
	
	} catch (err) {
		return response.status(500).json({ msg: `Error obteniendo el usuario: ${err.message}` });
	}
};



module.exports.getUser = getUser;

