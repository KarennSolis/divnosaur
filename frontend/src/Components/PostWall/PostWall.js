import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment/moment';
import "./PostWall.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";


export function PostWall() {

    const [posts, setPosts] = useState([]);
    /* const [namesWritters, setNamesWritters] = useState([]); */
    const [createdPublications, setCreatedPublications] = useState([]);

    const [likes, setLikes] = useState({});

    const user_id = localStorage.getItem('idLogged');


    const [formData, setFormData] = useState({
        textArea: '',
        formattedDateTime: '',
        editionDate: '',
        likes: 0,
        comments: '',
        user_id: user_id,
    });




    /* --------------------consultar en la tabla users el nombre del usuario que hizo cada publicación usando publication.user_id---------------------- */

    useEffect(() => {

        const getAllPosts = async () => {
            try {
                const url = new URL(`http://localhost:3001/allPublications/${user_id}`);
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('Token')}`,
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log(data);
                setPosts(data.posts);
                console.log(posts)
            } catch (error) {
                console.error('Error al consultar la publicación: ', error)
            }
        };

        getAllPosts().catch(console.error);

    }, [createdPublications]);


    /* ----------Crear publicaciones------------------------------------------- */


    const createPublication = async (formData, user_id) => {
        try {
            const response = await fetch('http://localhost:3001/createPublications', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Token')}`,
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

            setCreatedPublications([...createdPublications, { ...data }]);//para que renderice las publicaciones recién creadas

            setFormData({
                textArea: '',
                formattedDateTime: '',
                editionDate: '',
                likes: 0,
                comments: '',
                user_id: user_id,
            });


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

        createPublication(updatedFormData, user_id);

        setFormData({
            textArea: '',
            formattedDateTime: '',
            editionDate: '',
            likes: 0,
            comments: '',
            user_id: user_id,
        });

    };


    return (

        <div>
            <Navbar2 />

            {/* <!-- ------Ver Detalles de Proyectos------------------------------------  --> */}

            <div id="projectBox1" className="projBox divBox">
                <button className="closeBox" id="closeBox1"><img className="xClose"
                    src="data:image/png;base64,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"
                    alt="close" /></button>
                <p><u>Objetivo</u>: Desarollo de software para empresa de logística<br /><u>Puesto</u>: Desarrollador
                    Devops<br /><u>Inicio</u>: 13-06-2023<br /><u>Contacto</u><a href="">: alinkaasociados@gmail.com</a>
                </p>
                <div id="map" className="map"></div>
            </div>

            <div id="projectBox2" className="projBox divBox">
                <button className="closeBox" id="closeBox2"><img className="xClose"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEX///8AAADMzMzR0dHS0tLm5uYNDQ3n5+cQEBDj4+MeHh4JCQnJyckzMzMiIiLd3d3t7e1paWm+vr6oqKh3d3dKSkoZGRlPT0/N05mWAAAGOElEQVR4nN1d6WLyIBAk7adR413bvv+bfqaUagxJOPYYmL9lmx12BsgBGuPB/nbsdper70+guF523fG2D2x9/mwsDifWrOhwOvxm/HkOab7qmj+8c+dGgvdHwt1qufn2iWAZFN+fE+62S82HBJvmTSLHLLwNE16i+EoQn+Lba8LzFFcjguhCfR8nPOfF7bg5eBVHFfzBZBW3a297YIp+gs16guLK3xxYqB6J/sIr1HaigrgUpwk263bc3O9BB0ShTkj0FyOhTnkQl+I8wZEXW880McQ/HR6T+LeUcDcQqm8efAWWF2c8+EfxabhZkqgFklAXJGrxEGpIBbEoBhF8VHFumhgCxYuLHnSwk8Y5mCBKFQMr+EOxvyX+XG6HRTGC4P2u35h9THuEETVgFH3G3tziAtQpRhJsbmYXGaEs1CiJ9tiZ2AhditEEm8Z8xcfoTRrB08QDX+YSH6RWxYQKNhdzTYhSophCsLkac1huNYbGiBo7iv7gcA88pQQqeDHBg3eckvtGXKhJEnVaK4FiFsHUcEmhpkn0qQiZPcQOApVhC5WkAGn/RIYiUW64Xsz2oAOqUAnHCEyKpIMg4ohK3O14XiTzoAOaUBlUhTVpsGSDJFRyieZQ5Bhu2CyD4kXGrsaoImtHI3iRyYMO+kJl15E2RQGj6HpRpIM1vcjsQQc9oYrpR2sBJ3hdHaEKSTSHYt5wI2wOeS+Kd6r0BRWGN1kvinrQQbJXlZYZchTV1lFSQlWRaA7F2L5VXexLXFz5tpv/8tq3a+xeVPSgQ1ofh1aR97+zJhHWyxiPvhjTUPdgHsVlLwJ40IGnr0EkmpPMPEWsV0EMQgWSaA7FaUnBDDJcKUF5kCMpwAqmU/R5Ec6DDlRLLIilGiXF176H9GBeckOhwkqUiiI4wXyhQkuUIkXQaYKCohUqvERzKPZVLKKCJiPRAjzokJbqR1KU0k6rNIoFEUwVajwU963KUFTdmCshVOX94/wU1TfIcwtVe++44a6iegV7cFKEIMgpVACJWnBRhCHIJVQQiVpwUIQiyCFUIIlaUFOEI0gtVDCJWlBShCRIKVRAiVpQVRG0gj1oKAITpBEqrEQt8imCE8wXKrRELfIoFkAwT6jwErVIr2IRFeyRSrEYgsakPbr/0E47HNXXsHofVj+WVj8fVr+mqX5dWv29RfX3h9Xf41f/nKb6Z23VPy+t/pl32rdqc0D5mYJfVP/uqfr3h/QStYARavXv8av/FqP672m4POig7sXqv2ur/tvE6r8vrf4b4eq/867+W/3UnS8IJ2sGIX3nSyFbSnLSLGJbUF6SBVQxd/cZvBfzawAuVAqRQVOsfi83Ve/DUqRLDFSolOfJgJ1NY0G7SRlw0qA+ywLubAz6wQHMixzpQI2oPAcFAHmRq7dhhFr9mXucZ1lACJW3nwGGG+4U1IXKn4ByFSXOk1H1oszSSnEBJyUgNS9Wfya75JlOKl6U7ddifvwh/ZLid/3yx44JC1VjdBO1hc7YJtitWvOTWMfqHf0n5EXNp2Ai167+t/O0T6dkF6o2QXaKAA8VEH9olfrZF2MW+hLNoRggVPWHQpkUF82C4EEHls7GqWAPhu5G8WAexRkvwr2wpM4IyYN5FCdUhSZRC0KhYhIkpIgoUQsioWJNE0OQdD6qRHMoDoSKN00MkZ0frgfzKL4RhYsgqwjYHsyj+OPFU1Ko/EadNKWd7pGHlECNPSxJVTwYcy2FYCLFq7kUQzCN4sXs4oP09gMmeHFnuugYzT2d8VXszLEkggkUj+YWGaF9CECsUG9mXxbBaIp7Y75j2gMcABAn1O97wHlTFsEoiptzH9AGU9SXqEWwUDetDWjXYe0xKtgjsIrr1gVsg6qIQzCQ4mb7CFgFUEQiGERxs3oOaBeXNigedFj0YtcOA5aqiFXBHgtVHFawx3a2ingEFyh223HA3KSBJlGLGaFuWl9AWxjBOYpegtOTBqJELSaEuvFI1MLvRVyCExR9HnTwrW5QJWrhEep6QqIWqxFF5Ar2GFVxPZomhngVKjrBEcU5iVoMq4gtUYuBUJcq2OPZiyUQHFCc96DD2d31H07cuRHh5J7bf58DI/a3Y7e7XFmzosX1suuOt73vT/8BIbJeds5zzfkAAAAASUVORK5CYII="
                    alt="close" /></button>
                <p><u>Objetivo</u>: Desarrollo de página web empresa hotelera<br /><u>Puesto</u>: Fullstack
                    Developer<br /><u>Inicio</u>: 22-07-2023<br /><u>Contacto</u><a href="">: quintanocompany@gmail.com</a>
                </p>
                <div id="map" className="map"></div>
            </div>

            <div id="projectBox3" className="projBox divBox">
                <button className="closeBox" id="closeBox3"><img className="xClose"
                    src="data:image/png;base64,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"
                    alt="close" /></button>
                <p><u>Objetivo</u>: Implementación de app de aqruitectura<br /><u>Puesto</u>: Desarrollador Frontend
                    Junior<br /><u>Inicio</u>: 02-09-2023<br /><u>Contacto</u><a href="">: csugarconsultores@gmail.com</a>
                </p>
                <div id="map" className="map"></div>
            </div>


            <div id="sidebar" className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="columnaA">
                            <div id="miusuario">

                                <h3 className="text-center">Puedes unirte a esto:</h3>
                                <div className="proyect_text">
                                    <img className=" fotoUsuario profile rounded-circle mx-auto d-block"
                                        src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2019/02/globalizacion-600x400.jpg"
                                        alt="proyecto ingenieria" />
                                    <div>
                                        <p className="projTitle">Proyecto ingeniería</p>
                                        <button id="proIngen" className="detailBut">ver detalles</button>
                                        <Link to="ingproject"><button id="masIng" className="detailBut">más detalles</button></Link>
                                        {/* <!-- //boton agregado --> */}
                                    </div>
                                </div>
                                <div className="proyect_text">
                                    <img className=" fotoUsuario profile rounded-circle mx-auto d-block"
                                        src="https://www.fonvirtual.com/blog/wp-content/uploads/globalizacion-internet.jpg"
                                        alt="proyecto turismo" />
                                    <div>
                                        <p className="projTitle">Proyecto turismo</p>
                                        <button id="proTuris" className="detailBut">ver detalles</button>
                                        <Link to="turisproject"><button id="masTur" className="detailBut">más detalles</button></Link>
                                    </div>
                                </div>
                                <div className="proyect_text">
                                    <img className=" fotoUsuario profile rounded-circle mx-auto d-block"
                                        src="https://www.economiasimple.net/wp-content/uploads/2019/01/indicadores-de-la-globalizacion-economica.jpg"
                                        alt="proyecto inmobiliaria" />
                                    <div>
                                        <p className="projTitle">Proyecto inmobiliaria</p>
                                        <button id="proBuild" className="detailBut">ver detalles</button>
                                        <Link to="inmoproject"><button id="masInmo" className="detailBut">más detalles</button></Link>
                                    </div>
                                </div>

                            </div>
                            <div className="solicitud">


                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="columnaB">
                            <div className="muro1">
                                <div className="continer">
                                    <div className="row">
                                        <div className="col-2">
                                            <img className="friends rounded-circle mx-auto d-block comentaUsuario"
                                                src={localStorage.getItem('userImage')}
                                                alt="" />
                                        </div>
                                        <div className="col-10">

                                            <form onSubmit={handleFormSubmit} id="publiForm">
                                                <textarea className="form-control" type="text" rows="3" name="loggedPost" value={formData.textArea} id="myPublications" placeholder="Hola, ¿qué tal ha ido tu día?" onChange={(e) => setFormData({ ...formData, textArea: e.target.value })}></textarea>
                                                <div id="buttonAndPubli">
                                                    <p id="parrafoPubli"></p>
                                                    <button id="publication" type="submit"
                                                        className="btn btn-primary float-right">Publicar</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                                <div className="space"></div>
                            </div>


                            <div id="publiContainer"></div>

                            <div className="muro2" id="muroPubli">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2">

                                        </div>

                                        <div className="col-10" id="commentFather">

                                            {/* --------publicaciones de todos los usuarios, indicando el usuario que la hizo----------------------------------------------- */}

                                            <div>
                                                {posts.map((post) => (
                                                    <div key={post.post_id} className='divPublication'>
                                                        <div className='imgNameUser'>
                                                        <img className="friends rounded-circle mx-auto d-block comentaUsuario" src={post.user_image} alt="" />
                                                        <p><small className='postWritter'>{post.user_name}</small> escribió:</p>
                                                        </div>
                                                        <div className='textPublication' >
                                                            <p>{post.post_content}</p>

                                                            <div className="float-right" id="div">
                                                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                                    <div id="reactions" className="btn-group mr-2" role="group"
                                                                        aria-label="First group">

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='postDateDiv'><p className='postTimeStamp'><small>publicado el: {moment(post.post_creation_date).format('DD-MM-YYYY [a las] HH:mm:ss')} </small></p></div>

                                                        </div>
                                                        <div>{post.comments}</div>
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
                    <div className="col-3">
                        <div className="columnaA">
                            <div id="miusuario">
                                <ul>
                                    <li className="listaPerfil">
                                        <img id="divnosaurImg" className=" fotoUsuario profile rounded-circle mx-auto d-block"
                                            /* src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png" */
                                            src={localStorage.getItem('userImage')}
                                            alt="usuario" />
                                        {/* <!-- <h3 className="text-center">Rodri Rex</h3> --> */}
                                        <h3 className="text-center" id="idNameMuro">{localStorage.getItem('userName')}</h3>
                                        <p className="text-center" id='titleDeveloper'>developer in progress</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="solicitud">

                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    {/* <div className='carrContnrTitle'><h4 className='carrouselTitle'>Añade a tu red:</h4></div> */}
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/S5LQCBTWCJFDPBUKQAOR76IDW4.webp"
                                                alt="fotoSolicitud" />
                                            <p className="text-center d-block w-10">Consti Docus</p>
                                            <div className="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                <button className="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                <button className="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img className="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                src="https://www.semana.com/resizer/qWFDUVTE6z9xLi4bBwv1pcDvG-U=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JWYU7BYMDNGKBMYPCOLVFUX4M4.png"
                                                alt="fotoSolicitud" />
                                            <p className="text-center d-block w-10">Drew Saurio </p>
                                            <div className="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                <button className="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                <button className="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                            </div>
                                        </div>

                                        <div className="carousel-item">
                                            <img className="profile rounded-circle mx-auto d-block d-block w-10 fotoSolicitud"
                                                src="https://eje360.co/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-9.28.29-AM.jpeg"
                                                alt="fotoSolicitud" />
                                            <p className="text-center d-block w-10">Rex Purple</p>
                                            <div className="d-flex justify-content-center aceptar-rechazar d-block w-10">
                                                <button className="btn btn-info d-block w-5" id="ace-button">Aceptar</button>
                                                <button className="btn btn-info d-block w-5" id="rech-button">Rechazar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                        data-slide="prev">
                                        <span className="carousel-control-prev-icon dark" aria-hidden="true"></span>
                                        <span className="sr-only">Anterior</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                        data-slide="next">
                                        <span className="carousel-control-next-icon dark" aria-hidden="true"></span>
                                        <span className="sr-only">Siguiente</span>
                                    </a>
                                    {/* <Link to="/friendssuggests"><div className='to-full-suggests'><a href="#">Ver personas en tu entorno <img src='clic.png' width={32} /> </a></div></Link> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3"></div>
                    <div id="footer" className="col-6">
                        <div className="conectados">
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/S5LQCBTWCJFDPBUKQAOR76IDW4.webp"
                                className="dinosConct" alt="dino" />
                            <img src="https://www.semana.com/resizer/qWFDUVTE6z9xLi4bBwv1pcDvG-U=/fit-in/768x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/JWYU7BYMDNGKBMYPCOLVFUX4M4.png"
                                className="dinosConct" alt="dino" />
                            <img src="https://www.soy502.com/sites/default/files/styles/full_node/public/2023/Feb/05/dinosaurios_profesiones_viral.png"
                                className="dinosConct" alt="dino" />
                            <img src="https://eje360.co/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-9.28.29-AM.jpeg"
                                className="dinosConct" alt="dino" />
                            <img src="http://elvigilanteweb.com/wp-content/uploads/2023/02/Dinoprofesiones.jpg"
                                className="dinosConct " alt="dino" />
                            <img src="https://cdn-icons-png.flaticon.com/512/40/40358.png" className="signoMas" alt="mas" />
                        </div>
                    </div>
                    <div className="col-3"></div>

                </div>

            </div>
            {/* <!--JS de bootstrap 5.0--> */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                crossOrigin="anonymous"></script>

            {/* <!-- ----API DE GOOGLE MAPS------------------------------------------------ --> */}
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"></script>

            <script src="index.js"></script>
            <script src="inicio.js"></script>

        </div>

    );
}

