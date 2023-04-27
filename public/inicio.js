
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
addLikes('likeButton2', 'totalLikes2');
addLikes('likeButton3', 'totalLikes3');

/* ------Boton Comments-------------------------------------------------------------------- */

function addComment(buttonId,fatherId) {
  let commentButton = document.getElementById(buttonId);
  let commentFather = document.getElementById(fatherId);

  commentButton.addEventListener('click', () => {
    let divChild = document.createElement("textarea");
    divChild.setAttribute("id", "hijo")
    divChild.placeholder=('Deja tu comentario...')
    commentFather.appendChild(divChild);
  }
  )
}
addComment('commentButton', 'commentFather');
addComment('commentButton2', 'commentFather2');
addComment('commentButton3', 'commentFather3');

document.getElementById('masIng').addEventListener('click', (e)=>{
    //window.location.href = 'pags_extras/Proy_Ing.html'
    window.location.href = ''

});

boton = document.getElementById('masTur');

document.getElementById('masTur').addEventListener('click', (e)=>{
    window.location.href = 'pags_extras/proy_tur.html'
});

boton = document.getElementById('masInmo');

document.getElementById('masInmo').addEventListener('click', (e) => {
    window.location.href = 'pags_extras/proy_inmo.html'
});

