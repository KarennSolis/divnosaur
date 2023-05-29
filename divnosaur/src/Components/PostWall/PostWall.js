import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./PostWall.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";


export function PostWall(props) {

    const [userData, setUserData] = useState([]);
    const [publications, setPublications] = useState([]);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const user_id = localStorage.getItem('idLogged');


    useEffect(() => {

        fetch(`http://localhost:3001/${user_id}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(userData => setUserData(userData))
            
            console.log(userData
                )
    }, []);

    /* ------------------Fetch de publicaciones del usuario logueado--------------------------------------------------------------------------- */

    /* useEffect(() => {
        const fetchPublications = async () => {
          try {
            const url = new URL('http://localhost:3001/publications');
            url.searchParams.set('user_id', user_id);
            const response = await fetch(url, {
              method: "GET"
            });
            const data = await response.json();
            console.log(data);
            console.log(data.posts);
            setPublications(data.posts);
          } catch (error) {
            console.error('Error al cargar la publicación: ', error)
          }
        };
        fetchPublications().catch(console.error);
      }, [user_id]); */



    /* ----------Crear publicaciones------------------------------------------- */

    const [formData, setFormData] = useState({
        textArea: '',
        formattedDateTime: '',
        editionDate: '',
        likes: 0,
        comments: '',
        user_id: user_id,
    });


    const [createdPublications, setCreatedPublications] = useState([]);


    const createPublication = async (formData, user_id) => {
        try {
            const response = await fetch('http://localhost:3001/createPublications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    textArea: formData.textArea,
                    formattedDateTime: formData.formattedDateTime,
                    editionDate: formData.formattedDateTime,
                    likes: formData.likes,
                    comments: formData.comments,
                    user_id: user_id
                }),
            });
            const data = await response.json();
            console.log(data);
            setCreatedPublications([...createdPublications, data]);//para que renderice las publicaciones recién creadas
            forceUpdate();
        } catch (error) {
            console.error('Error al crear la publicación: ', error);
        }
    };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const year = ('0' + (date.getFullYear())).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + (date.getHours())).slice(-2);
        const minutes = ('0' + (date.getMinutes())).slice(-2);
        const seconds = ('0' + (date.getSeconds())).slice(-2);
        const formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

        const updatedFormData = {
            ...formData,
            textArea: formData.textArea,
            formattedDateTime: formattedDateTime,
            editionDate: formattedDateTime,
            likes: formData.likes,
            comments: formData.comments,
            user_id: user_id,
        };
        /* setFormData(updatedFormData); */
        createPublication(updatedFormData, user_id);

    };



    /* -------------Fetch de todas las publicaciones , indicando a qué usuario pertenece---------------------------------------------------------------- */

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const url = new URL("http://localhost:3001/allPublications");
                const response = await fetch(url, {
                    method: "GET",
                });
                const data = await response.json();
                console.log(data);
                console.log(data.posts);
                setPublications(data.posts);
            } catch (error) {
                console.error("Error al cargar la publicación: ", error);
            }
        };
        fetchPublications().catch(console.error);
    }, []);


    /* -------Funcionalidad a los botones de Likes y Comentarios de las publicaciones-------------------------------------------- */

    /* ------Botón LIKES--------------------------------------------------------------------- */

    /* const ComponentePublicaciones = ({ publications }) => {
        const [likes, setLikes] = useState(0);
        const [fingerUp, setFingerUp] = useState(0);
        const [likesByPublication, setLikesByPublication] = useState(
            publications.reduce((acc, pub) => acc + pub.likes, 0)
        );
        const likeButtonRef = useRef(null);

        useEffect(() => {
            const likeButton = likeButtonRef.current;

            return () => {
                if (likes % 2 === 1) {
                    likeButton.textContent = fingerUp;
                    likeButton.classList.remove("clickedLike");
                } else {
                    likeButton.textContent = fingerUp;
                    likeButton.classList.add("clickedLike");
                }
            };
        }, [likes]);

        const addLikes = (postId) => {
            // Aquí debes actualizar la información de "likes" en la base de datos.
            // Por ejemplo, si tienes una función fetchUpdateLikes que actualiza los "likes" en la base de datos, puedes llamarla:
            fetchUpdateLikes(postId, likes + 1);

            setLikesByPublication((prevLikes) => {
                const newLikes = prevLikes.map((likeCount) =>
                    likeCount.includes(postId) ? likeCount + 1 : likeCount
                );
                return newLikes;
            });
        };


    } */



        return (

            <div>
                <Navbar2 />

                {/* <!-- ------Ver Detalles de Proyectos------------------------------------  --> */}

                <div id="projectBox1" class="projBox divBox">
                    <button class="closeBox" id="closeBox1"><img class="xClose"
                        src="data:image/png;base64,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"
                        alt="close" /></button>
                    <p><u>Objetivo</u>: Desarollo de software para empresa de logística<br /><u>Puesto</u>: Desarrollador
                        Devops<br /><u>Inicio</u>: 13-06-2023<br /><u>Contacto</u><a href="">: alinkaasociados@gmail.com</a>
                    </p>
                    <div id="map" class="map"></div>
                </div>

                <div id="projectBox2" class="projBox divBox">
                    <button class="closeBox" id="closeBox2"><img class="xClose"
                        src="data:image/png;base64,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"
                        alt="close" /></button>
                    <p><u>Objetivo</u>: Desarrollo de página web empresa hotelera<br /><u>Puesto</u>: Fullstack
                        Developer<br /><u>Inicio</u>: 22-07-2023<br /><u>Contacto</u><a href="">: quintanocompany@gmail.com</a>
                    </p>
                    <div id="map" class="map"></div>
                </div>

                <div id="projectBox3" class="projBox divBox">
                    <button class="closeBox" id="closeBox3"><img class="xClose"
                        src="data:image/png;base64,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"
                        alt="close" /></button>
                    <p><u>Objetivo</u>: Implementación de app de aqruitectura<br /><u>Puesto</u>: Desarrollador Frontend
                        Junior<br /><u>Inicio</u>: 02-09-2023<br /><u>Contacto</u><a href="">: csugarconsultores@gmail.com</a>
                    </p>
                    <div id="map" class="map"></div>
                </div>


                <div id="sidebar" class="container-fluid">
                    <div class="row">
                        <div class="col-3">
                            <div class="columnaA">
                                <div id="miusuario">

                                    <h3 class="text-center">Puedes unirte a esto:</h3>
                                    <div class="proyect_text">
                                        <img class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                            src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2019/02/globalizacion-600x400.jpg"
                                            alt="proyecto ingenieria" />
                                        <div>
                                            <p class="projTitle">Proyecto ingeniería</p>
                                            <button id="proIngen" class="detailBut">ver detalles</button>
                                            <Link to="ingproject"><button id="masIng" class="detailBut">más detalles</button></Link>
                                            {/* <!-- //boton agregado --> */}
                                        </div>
                                    </div>
                                    <div class="proyect_text">
                                        <img class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                            src="https://www.fonvirtual.com/blog/wp-content/uploads/globalizacion-internet.jpg"
                                            alt="proyecto turismo" />
                                        <div>
                                            <p class="projTitle">Proyecto turismo</p>
                                            <button id="proTuris" class="detailBut">ver detalles</button>
                                            <Link to="turisproject"><button id="masTur" class="detailBut">más detalles</button></Link>
                                        </div>
                                    </div>
                                    <div class="proyect_text">
                                        <img class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                            src="https://www.economiasimple.net/wp-content/uploads/2019/01/indicadores-de-la-globalizacion-economica.jpg"
                                            alt="proyecto inmobiliaria" />
                                        <div>
                                            <p class="projTitle">Proyecto inmobiliaria</p>
                                            <button id="proBuild" class="detailBut">ver detalles</button>
                                            <Link to="inmoproject"><button id="masInmo" class="detailBut">más detalles</button></Link>
                                        </div>
                                    </div>

                                </div>
                                <div class="solicitud">


                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="columnaB">
                                <div class="muro1">
                                    <div class="continer">
                                        <div class="row">
                                            <div class="col-2">
                                                <img class="friends rounded-circle mx-auto d-block comentaUsuario"
                                                    src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                                    alt="" />
                                            </div>
                                            <div class="col-10">
                                                {/* <form action="/createPublications" method="post" id="publiForm"> */}
                                                {/* <form onSubmit={(e) => handleSubmit(e, formValues, setLoggedPost)} id="publiForm">
                                                <textarea class="form-control" type="text" rows="3" name="loggedPost" value={formValues.loggedPost} id="myPublications" placeholder="Hola, ¿qué tal ha ido tu día?" onChange={(e) => handleChange(e, setLoggedPost)}></textarea>
                                                <div id="buttonAndPubli">
                                                    <p id="parrafoPubli"></p>
                                                    <button id="publication" type="submit"
                                                        class="btn btn-primary float-right">Publicar</button>
                                                </div>
                                            </form> */}

                                                <form onSubmit={handleFormSubmit} id="publiForm">
                                                    <textarea class="form-control" type="text" rows="3" name="loggedPost" value={formData.textArea} id="myPublications" placeholder="Hola, ¿qué tal ha ido tu día?" onChange={(e) => setFormData({ ...formData, textArea: e.target.value })}></textarea>
                                                    <div id="buttonAndPubli">
                                                        <p id="parrafoPubli"></p>
                                                        <button id="publication" type="submit"
                                                            class="btn btn-primary float-right">Publicar</button>
                                                    </div>
                                                </form>


                                                {/* {formValues.loggedPost ? (<div className='divPublication2'>{formValues.loggedPost}cachuete</div>
                                            ) : (
                                                <div className='App'>no esta funcionando</div>
                                            )} */}
                                                {/* {formSubmitted ? (<div className='divPublication2'>{formValues.loggedPost} </div>
                                            ) : (
                                                <div className='App'>no esta funcionando</div>
                                            )} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space"></div>
                                </div>


                                <div id="publiContainer"></div>

                                <div class="muro2" id="muroPubli">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-2">
                                                {/* <!-- <img class="friends rounded-circle mx-auto d-block"
                                        src="https://pbs.twimg.com/media/FoP9W1BXkAAUC4o?format=jpg&name=small"
                                        class="comentaAmigo" alt=""> --> */}
                                            </div>

                                            <div class="col-10" id="commentFather">


                                                {/*  {loggedPost ? (
                                                <div key={publication.post_id} className='divPublication'>
                                                    <p>ID de usuario: {user_id}</p>
                                                    <div className='textPublication' >
                                                        <p>{loggedPost}</p>
                                                        {<p>{publication.post_creation_date}</p>}
                                                        <div class="float-right" id="div">
                                                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                                <div id="reactions" class="btn-group mr-2" role="group"
                                                                    aria-label="First group">
                                                                    <div id="likeAnch" class="butonDiv">
                                                                        <div id="totalLikes" class="totalLikes">{{publication.likes}}0</div><button type="button"
                                                                            id="likeButton" class="btn btn-primary likeButton"><img
                                                                                class="img-fluid"
                                                                                src="https://cdn-icons-png.flaticon.com/512/9970/9970200.png"
                                                                                alt="" /></button>
                                                                    </div>
                                                                    <div><button type="button" id="commentButton"
                                                                        class="btn btn-primary commentButton butonDiv"><img
                                                                            class="img-fluid"
                                                                            src="https://cdn-icons-png.flaticon.com/512/7198/7198933.png"
                                                                            alt="" /></button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>{{publication.comments}}</div>
                                                </div>
                                            ) : (
                                                <div className='postWall'></div>
                                            )} */}




                                                {/* ---------------publicaciones traidas de la base de datos---------------------------------------------------------------------------------------------------- */}

                                                {/* --------------------------publicaciones del usuario logueado-------------------------------------------------- */}

                                                {/* <div>
                                                {publications && publications.map((publication) => (
                                                    <div key={publication.post_id} className='divPublication'>
                                                        <p>{publication.post_content}</p>
                                                    </div>
                                                ))}
                                            </div> */}

                                                {/* -----------publicaciones recien creadas-------------------------------------------- */}


                                                <div>
                                                    {createdPublications.map((publication) => (
                                                        <div key={publication.id}>
                                                            <div key={publication.post_id} className='divPublication'>
                                                                <p>ID de usuario: {publication.user_id}</p>
                                                                <div className='textPublication' >
                                                                    <p>{publication.post_content}</p>
                                                                    <p>{publication.post_creation_date}</p>
                                                                    {/* <div class="float-right" id="div">
                                                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                                        <div id="reactions" class="btn-group mr-2" role="group"
                                                                            aria-label="First group">
                                                                            <div id="likeAnch" class="butonDiv">
                                                                                <div id="totalLikes" class="totalLikes">{publication.likes}</div><button type="button"
                                                                                    id="likeButton" ref={likeButtonRef} class="btn btn-primary likeButton"><img
                                                                                        class="img-fluid"
                                                                                        src="https://cdn-icons-png.flaticon.com/512/9970/9970200.png"
                                                                                        alt="" /></button>
                                                                            </div>
                                                                            <div><button type="button" id="commentButton"
                                                                                class="btn btn-primary commentButton butonDiv"><img
                                                                                    class="img-fluid"
                                                                                    src="https://cdn-icons-png.flaticon.com/512/7198/7198933.png"
                                                                                    alt="" />{publication.likes}</button></div>
                                                                        </div>
                                                                    </div>
                                                                </div> */}
                                                                </div>
                                                                <div>{publication.comments}</div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </div>



                                                {/* --------publicaciones de todos los usuarios, indicando el usuario que la hizo----------------------------------------------- */}

                                                <div >
                                                    {publications.map((publication) => (
                                                        <div key={publication.post_id} className='divPublication'>
                                                            <p>ID de usuario: {publication.user_id}</p>
                                                            <div className='textPublication' >
                                                                <p>{publication.post_content}</p>
                                                                <p>{publication.post_creation_date}</p>
                                                                <div class="float-right" id="div">
                                                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                                        <div id="reactions" class="btn-group mr-2" role="group"
                                                                            aria-label="First group">
                                                                            <div id="likeAnch" class="butonDiv">
                                                                                <div id="totalLikes" class="totalLikes">{publication.likes}{/* {likesByPublication[publication.post_id]} */}</div><button type="button"
                                                                                    id="likeButton" /* ref={likeButtonRef} */ class="btn btn-primary likeButton" /* onClick={addLikes} */ /* onClick={() => addLikes(publication.post_id)} */><img
                                                                                        class="img-fluid"
                                                                                        src="https://cdn-icons-png.flaticon.com/512/9970/9970200.png"
                                                                                        alt="" />{/* {publication.likes} */}</button>
                                                                            </div>
                                                                            <div><button type="button" id="commentButton"
                                                                                class="btn btn-primary commentButton butonDiv"><img
                                                                                    class="img-fluid"
                                                                                    src="https://cdn-icons-png.flaticon.com/512/7198/7198933.png"
                                                                                    alt="" /></button></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>{publication.comments}</div>
                                                        </div>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>


                        {/* <!-- /carrosel actual/ --> */}
                        <div class="col-3">
                            <div class="columnaA">
                                <div id="miusuario">
                                    <ul>
                                        <li class="listaPerfil">
                                            <img id="divnosaurImg" class=" fotoUsuario profile rounded-circle mx-auto d-block"
                                                src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                                alt="usuario" />
                                            {/* <!-- <h3 class="text-center">Rodri Rex</h3> --> */}
                                            <h3 class="text-center" id="idNameMuro"></h3>
                                            <p class="text-center">developer in progress</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="solicitud">

                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                    src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/S5LQCBTWCJFDPBUKQAOR76IDW4.webp"
                                                    alt="fotoSolicitud" />
                                                <p class="text-center d-block w-10">Consti Docus</p>
                                                <div class="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                    <button class="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                    <button class="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <img class="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                    src="https://www.semana.com/resizer/qWFDUVTE6z9xLi4bBwv1pcDvG-U=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JWYU7BYMDNGKBMYPCOLVFUX4M4.png"
                                                    alt="fotoSolicitud" />
                                                <p class="text-center d-block w-10">Drew Saurio </p>
                                                <div class="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                    <button class="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                    <button class="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <img class="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                    src="https://eje360.co/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-9.28.29-AM.jpeg"
                                                    alt="fotoSolicitud" />
                                                <p class="text-center d-block w-10">Rex Purple</p>
                                                <div class="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                    <button class="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                    <button class="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                                </div>
                                            </div>
                                        </div>

                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                                            data-slide="prev">
                                            <span class="carousel-control-prev-icon dark" aria-hidden="true"></span>
                                            <span class="sr-only">Anterior</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                            data-slide="next">
                                            <span class="carousel-control-next-icon dark" aria-hidden="true"></span>
                                            <span class="sr-only">Siguiente</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-3"></div>
                        <div id="footer" class="col-6">
                            <div class="conectados">
                                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/S5LQCBTWCJFDPBUKQAOR76IDW4.webp"
                                    class="dinosConct" alt="dino" />
                                <img src="https://www.semana.com/resizer/qWFDUVTE6z9xLi4bBwv1pcDvG-U=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JWYU7BYMDNGKBMYPCOLVFUX4M4.png"
                                    class="dinosConct" alt="dino" />
                                <img src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                    class="dinosConct" alt="dino" />
                                <img src="https://eje360.co/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-9.28.29-AM.jpeg"
                                    class="dinosConct" alt="dino" />
                                <img src="http://elvigilanteweb.com/wp-content/uploads/2023/02/Dinoprofesiones.jpg"
                                    class="dinosConct " alt="dino" />
                                <img src="https://cdn-icons-png.flaticon.com/512/40/40358.png" class="signoMas" alt="mas" />
                            </div>
                        </div>
                        <div class="col-3"></div>

                    </div>

                </div>
                {/* <!--JS de bootstrap 5.0--> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                    crossorigin="anonymous"></script>

                {/* <!-- ----API DE GOOGLE MAPS------------------------------------------------ --> */}
                <script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"></script>

                <script src="index.js"></script>
                <script src="inicio.js"></script>

            </div>

        );
    }

