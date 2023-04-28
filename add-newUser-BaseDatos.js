const express = require('express');
const app = express();
const sequelize = require('./conexion-base-datos');

// async function newUser(){
// 	let array_insert = ["6","ser_cool","Sergio","Fernández","Sanz","sercool@gmail.com","sercool95","","Spain","Gijón","633122077","27","1995-11-04","Ing. Quimica Industrial","2 años en mantenimiento industrial de fabricas","Leer, jugar videojuegos, deportes extremos","Ser Fdz","Jefe de obra","2023-04-28"];
// 	console.log(array_insert);
// 	sequelize.query('INSERT INTO `users`(`user_id`,`username`,`name`,`surname_first`,`surname_second`,`email`,`password`,`adress`,`country`,`city`,`telephone_number`,`age`,`birthdate`,`studies`,`experience`,`hobbies`,`linkedin`,`role`,`registration_date`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
// 		{replacements: array_insert, type: sequelize.QueryTypes.INSERT }
// 	).then(function(proyecto){
// 		console.log(proyecto);
// 	})
// }

// newUser();

async function newUser(){
	let array_insert = ["6","ser_cool","Sergio","Fernández","Sanz","sercool@gmail.com","sercool95","","Spain","Gijón","633122077","27","1995-11-04","Ing. Quimica Industrial","2 años en mantenimiento industrial de fabricas","Leer, jugar videojuegos, deportes extremos","Ser Fdz","Jefe de obra","2023-04-28"];
	console.log(array_insert);
	sequelize.query('INSERT INTO `users`(`user_id`,`username`,`name`,`surname_first`,`surname_second`,`email`,`password`,`adress`,`country`,`city`,`telephone_number`,`age`,`birthdate`,`studies`,`experience`,`hobbies`,`linkedin`,`role`,`registration_date`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
		{replacements: array_insert, type: sequelize.QueryTypes.INSERT }
	).then(function(proyecto){
		console.log(proyecto);
	})
}