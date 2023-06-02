const sequelize = require('../conexion-base-datos');



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
