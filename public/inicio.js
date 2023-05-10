
/* --------Carga de los posteos del usuario logueado con la carga de la página----------------------- */

const formPubli = document.querySelector('#publiForm');
const user_id = localStorage.getItem('idLogged');
const feed = document.querySelector('#commentFather');
const buttonPostContainer = document.querySelector('#divButtonsPost')
const totalLikes = document.querySelector('#totalLikes')

const asyncPubliGet = async () => {
  const user_id = localStorage.getItem('idLogged');
  try {
    const url = new URL('http://localhost:3000/publications');
    url.searchParams.set('user_id', user_id);

    const response = await fetch(url, {
      method: "GET"
    });
    const data = await response.json();
    console.log(data)

    const formPubli = document.querySelector('#formPubli');
    data.posts.forEach((item) => {

      const fragment = document.createDocumentFragment();
      const divLikesComment = document.createElement('div');
      const postContainer = document.createElement("div")
      postContainer.classList.add("postItem")
      /* feed.append(postContainer) */
      feed.insertBefore(postContainer, buttonPostContainer)

      postContainer.innerHTML = `<p class='postCardText'>${item.post_content}</p>`
      totalLikes.innerHTML = `<p class='postCardText'>${item.likes}</p>`

      divLikesComment.innerHTML = `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><div id="reactions" class="btn-group mr-2" role="group" aria-label="First group"><div id="likeAnch" class="butonDiv"><div id="totalLikes" class="totalLikes">${item.likes}</div><button type="button" id="likeButton" class="btn btn-primary likeButton"><img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/9970/9970200.png" alt=""></button></div><div><button type="button" id="commentButton" class="btn btn-primary commentButton butonDiv"><img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/7198/7198933.png" alt=""></button></div></div></div>`;

      fragment.appendChild(divLikesComment);
      postContainer.appendChild(fragment);


    });
  } catch (error) {
    console.error('Error al crear la publicación: ', error)
  }
}

window.addEventListener('load', function () {
  asyncPubliGet();
});

/* ----------------Creación de nuevos posteos----------------------------------------------------------- */

formPubli.addEventListener('submit', (event) => {
  event.preventDefault();
  let textArea = document.querySelector('#myPublications').value;
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  const formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  const editionDate = formattedDateTime;
  const likes = parseInt(Math.random() * 10);

  const comments = "sin commentarios";


  const asyncPubliCall = async () => {
    try {
      const response = await fetch('http://localhost:3000/createPublications', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ textArea, formattedDateTime, editionDate, likes, comments, user_id })
      })
      const data = await response.json()

      if (textArea) {
        const newPost = document.createElement('div')
        const postText = document.createElement('span')
        const publiDate = document.createElement('p');
        const fragment = document.createDocumentFragment();
        const divLikesComment = document.createElement('div');

        postText.innerHTML = textArea;
        newPost.appendChild(postText)
        newPost.appendChild(publiDate);

        newPost.setAttribute("class", "newPost");
        publiDate.setAttribute("value", publiDate);

        divLikesComment.innerHTML = `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"><div id="reactions" class="btn-group mr-2" role="group" aria-label="First group"><div id="likeAnch" class="butonDiv"><div id="totalLikes" class="totalLikes">${likes}</div><button type="button" id="likeButton" class="btn btn-primary likeButton"><img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/9970/9970200.png" alt=""></button></div><div><button type="button" id="commentButton" class="btn btn-primary commentButton butonDiv"><img class="img-fluid" src="https://cdn-icons-png.flaticon.com/512/7198/7198933.png" alt=""></button></div></div></div>`;

        fragment.appendChild(divLikesComment);
        newPost.appendChild(fragment);
        feed.appendChild(newPost)[0];

        addLikes('likeButton', 'totalLikes');

        formPubli.reset();
      }

    }
    catch (error) {
      console.error('Error al crear la publicación: ', error)
    }
  }


  /* ----------------------Validación del formulario------------------------------------ */

  let warnings = "";
  let entrar = false;
  const parrafoPost = document.getElementById('parrafoPubli');
  parrafoPost.innerHTML = '';

  if (textArea.length > 200) {
    warnings += `Su post no se puede publicar. Ha excedido los caracteres máximos (200)  <br>`
    entrar = true
  };
  if (!textArea) {
    warnings += `Su post no se puede publicar. No tiene contenido <br>`
    entrar = true
  };
  if (entrar) {
    parrafoPost.innerHTML = warnings
  } else {
    asyncPubliCall();
  };

});


/* -------API de GOOGLE-MAPS  - Abrir, Ver y Cerrar Detalles de proyectos--------------- */
proIngen.addEventListener('click', () => {
  document.getElementById('projectBox1').style.display = "block";
  initMap({ lat: -34.5956145, lng: -58.4431949 })
});
proTuris.addEventListener('click', () => {
  document.getElementById('projectBox2').style.display = "block";
  initMap({ lat: 60.87871, lng: 6.83877 })
});
proBuild.addEventListener('click', () => {
  document.getElementById('projectBox3').style.display = "block";
  initMap({ lat: 43.53573, lng: -5.66152 })
});


function initMap(coord) {
  var coord;
  let projMap = document.getElementsByClassName('map')
  for (i = 0; i < projMap.length; i++) {
    let map = new google.maps.Map(projMap[i], {
      zoom: 10,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
}


function closeDetails(id, projBoxId) {
  let closeBut = document.getElementById(id);
  closeBut.addEventListener('click', () => {
    let projBox = document.getElementById(projBoxId);
    projBox.style.display = "none";
  }
  )
}
closeDetails("closeBox1", "projectBox1");
closeDetails("closeBox2", "projectBox2");
closeDetails("closeBox3", "projectBox3");


/* -------Funcionalidad a los botones de Likes y Comentarios de las publicaciones-------------------------------------------- */

/* ------Botón LIKES--------------------------------------------------------------------- */
function addLikes(id, divId) {
  let likeButton = document.getElementById(id);
  let totalLikes = document.getElementById(divId);
  let fingerUp = Math.floor((Math.random() * (41 - 1)) + 1);
  totalLikes.innerHTML = fingerUp;
  likeButton.addEventListener('click', () => {
    if (likeButton.className.includes('clickedLike')) {
      fingerUp--;
      totalLikes.innerHTML = fingerUp;
      likeButton.style.backgroundColor = 'rgb(0, 123, 255)';
      likeButton.classList.remove('clickedLike');
    }
    else {
      fingerUp++;
      totalLikes.innerHTML = fingerUp;
      likeButton.style.backgroundColor = 'rgb(20, 75, 157)';
      likeButton.classList.add('clickedLike');
    }
  });

}
addLikes('likeButton', 'totalLikes');


/* ------Boton Comments-------------------------------------------------------------------- */

function addComment(buttonId, fatherId) {
  let commentButton = document.getElementById(buttonId);
  let commentFather = document.getElementById(fatherId);

  commentButton.addEventListener('click', () => {
    let divChild = document.createElement("textarea");
    divChild.setAttribute("id", "hijo")
    divChild.placeholder = ('Deja tu comentario...')
    commentFather.appendChild(divChild);
  }
  )
}
addComment('commentButton', 'commentFather');
addComment('commentButton2', 'commentFather2');
addComment('commentButton3', 'commentFather3');



//ver proyectos en más detalles//

document.getElementById('masIng').addEventListener('click', (e) => {
  window.location.href = '/pags_extras/Proy_Ing.html'

});

boton = document.getElementById('masTur');

document.getElementById('masTur').addEventListener('click', (e) => {
  window.location.href = '/pags_extras/proy_tur.html'
});

boton = document.getElementById('masInmo');

document.getElementById('masInmo').addEventListener('click', (e) => {
  window.location.href = '/pags_extras/proy_inmo.html'
});


//Publicaciones sin terminar//

// const formPubli = document.getElementById('publiForm');
// formPubli.addEventListener('submit', (event) => {
//   event.preventDefault();
//   // const user = document.getElementById("user").value;
//   const text = document.getElementById('mypublications').value;
//   const parrafoPost = document.getElementById('parrafoPubli');
 


//   formPubli.reset();


//   const asyncPostSend = async () => {
//       try {
//           const response = await fetch('http://localhost:3000/createPublication', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({text})
//           });
//           const data = await response.json();
//           const { result, message } = response;

//           if (result) {
//             data.result.map((item) => {
//                   const content = document.createElement("div");
//                   content.innerHTML = 
//                   `<h4>${item.text}</h4>`
//                   ;
//                   const textPost = document.getElementById('muroPubli')
//                   textPost.appendChild(content);

//               })
//               alert(message)
//           } else {
//               window.location.href = "/public/index.html"
//           }

//       } catch (error) {
//           console.error('Error al enviar la solicitud: ', error)
//       }
//   }


//   let warnings = "";
//   let entrar = false;
//   parrafoPost.innerHTML = '';

//   if (text.length > 200) {
//       warnings += `Su post no se puede publicar. Ha excedido los caracteres máximos (200)  <br>`
//       entrar = true
//   };
//   if (!text) {
//     warnings += `Su post no se puede publicar. No tiene contenido <br>`
//     entrar = true
// };
//   if (entrar) {
//       parrafoPost.innerHTML = warnings
//   } else {
//       parrafoPost.innerHTML = 'Su contenido ha sido publicado';
//       asyncPostSend();
//   }; 

// });



// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const publication = document.getElementById('mypublications').value;

//   form.reset();

//   fetch('http://localhost:3000/publication', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({publication})
//   })
//     .then(response => {
//       if (response.ok) {
//         console.log(response.json);
//         console.log('done');
//         const divnosaurName = document.createRange().createContextualFragment(`
// 				<h1>${email}</h1> 
// 		  `);
// 		  const main = document.getElementById("divnosaurImg");
// 		  main.append(divnosaurName);
//       } else {
//         response.text().then(errorMessage => {
//           alert(errorMessage)
//         });
//       }
//     })
//     .catch(error => {
//       console.error('Error al enviar la solicitud: ', error)
//     });

// });

//KAREN CAMBIOS//

const renderUserData = (user) => {
  document.getElementById("idNameMuro").innerHTML = user.name;
};

const user_id = localStorage.getItem("idLogged");

fetch(`http://localhost:3000/${user_id}`, {
  method: "GET",
}).then(async (response) => {
  const json = await response.json();
  console.log(json);
  // json.forEach((item) => renderUserData(item));
  renderUserData(json);
});
/* -------------Cerrar Sesión----------------------------------------------------------------- */
const closeSessionBut = document.getElementById('closeSessionBut');
closeSessionBut.addEventListener('click', (e) => {
  localStorage.removeItem('idLogged');
  window.location.href = './index.html'
})

