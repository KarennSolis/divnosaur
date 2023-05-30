const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos');
const mysql2 = require('mysql2');

const getUserDataById = async (req, res) => {
    try {
      const user_id = req.params.user_id

      sequelize.query('SELECT * FROM users WHERE user_id = :id', { replacements: { id: user_id }, type: sequelize.QueryTypes.SELECT })
      .then(async users => {
          res.status(200).send(users[0] );
      });
    
    } catch (error) {
      console.error(error);
      throw new Error('Error al obtener los datos del usuario');
    }
  };

  
const updateUserDataById = async (req, res) => {
    try {
      
      const updateQuery = `
      UPDATE users
      SET name = ${newStatus}
      WHERE (user_friend1_id = '${user_id}' AND user_friend2_id = '${friend}')
        OR (user_friend1_id = '${friend}' AND user_friend2_id = '${user_id}');
    `;

    sequelize.query(updateQuery, { replacements: { id: user_id }, type: sequelize.QueryTypes.SELECT })
      .then(async users => {
          res.status(200).send(users[0] );
      });

      return true; // Actualización exitosa
    } catch (error) {
      console.error(error);
      throw new Error('Error al actualizar los datos del usuario');
    }
  };

  module.exports.getUserDataById = getUserDataById;
  module.exports.updateUserDataById = updateUserDataById;
