const sequelize = require('../conexion-base-datos');


/* --------seleccionar publicaciones para un usuario concreto------------------- */

/* const getPublications = async function(req, res) {
    const user_id = req.query.user_id; */
//console.log(req.query.user_id)
/*     if (user_id) {
        sequelize.query('SELECT * FROM posts WHERE user_id = :user_user', { replacements: { user_user: user_id }, type: sequelize.QueryTypes.SELECT })
            .then(posts => {
                console.log(posts.length);
                console.log(posts)
                res.status(200).send({ posts }) */
/* if (Object.keys(posts).length === 0) {
    console.log('No existen publicaciones para este usuario')
    res.status(200).send({ result: false, message: "No existen publicaciones para este usuario" })
} else {
    console.log('Si existen publicaciones para este usuario')
    res.status(200).send({ result: posts, message: 'Si existen publicaciones para este usuario' })
} */
/*             })

    }
}; */


/* --------------seleccionar todas las publicaciones de la tabla------------------------ */

const getAllPublications = async function (req, res) {
    sequelize.query('SELECT * FROM posts ORDER BY post_creation_date DESC', { type: sequelize.QueryTypes.SELECT })

        .then(posts => {
            console.log(posts.length);
            console.log(posts)
            res.status(200).send({ posts })
        })
};


/* -------------crear publicaciones------------------------------------------- */

const postPublications = async function (req, res) {
    const { textArea, formattedDateTime, editionDate, likes, comments, user_id } = req.body
    console.log(req.body);
    if (!textArea) {
        console.log('Escribe una publicación')
        res.status(200).send({ result: false, message: "Escribe una publicación" })
    }
    else {
        sequelize.query('INSERT INTO posts (post_content, post_creation_date, post_edition_date, likes, comments, user_id) VALUES (?,?,?,?,?,?)',
            { replacements: [req.body.textArea, req.body.formattedDateTime, req.body.editionDate, req.body.likes, req.body.comments, req.body.user_id], type: sequelize.QueryTypes.INSERT })
        console.log('Publicación creada')
        //res.status(200).send({ result: true, message: "Publicación creada" })

        const publication = {
            textArea, formattedDateTime, editionDate, likes, comments, user_id // dato aleatorio parseInt(Math.random()*10)
        }
        res.status(200).send(publication)
    }

}


module.exports = {
    getAllPublications,
    postPublications
};
