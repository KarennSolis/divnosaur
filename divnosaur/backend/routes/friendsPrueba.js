const express = require('express');
const cors = require('cors');
const sequelize = require('../conexion-base-datos')


const updateFriendshipStatus = async function (req, res) {
  const user_id = req.params.user_id;
  const newStatus = req.body.status_friendship;
  const friend = req.body.friend;

  try {
    const updateQuery = `
      UPDATE friendship
      SET status_friendship = CASE WHEN status_friendship = 0 THEN 1 ELSE 0 END
      WHERE (user_friend1_id = '${user_id}' AND user_friend2_id = '${friend}')
        OR (user_friend1_id = '${friend}' AND user_friend2_id = '${user_id}');
    `;

    await sequelize.query(updateQuery);
    res.send('El estado de amistad se actualizó correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};


module.exports.updateFriendshipStatus = updateFriendshipStatus;
