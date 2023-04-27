/* -------------API para mostrar contactos random---------------------------------------------------- */
let divDetails = document.getElementsByClassName('details');
let divDetailsArr = []

for (let div of divDetails) {
    divDetailsArr.push(div);
}

const createUser = async () => {
    for (i = 0; i < divDetailsArr.length; i++) {

        var imgChild = document.createElement("img");
        var h4Child = document.createElement("h4");
        var pChild = document.createElement("p");
        divDetailsArr[i].appendChild(imgChild);
        divDetailsArr[i].appendChild(h4Child);
        divDetailsArr[i].appendChild(pChild);

        try {
            const url = 'https://randomuser.me/api/'
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const dataUser = data.results[0];
                //console.log(dataUser);

                /* --------------------EDICIÓN DEL ELEMENTO CREADO EN EL DOM, ASIGANCIÓN A OTRO CONTENEDOR PADRE Y VOLCADO DE DATOS RESPUESTA DE LA API----------- */
                if (dataUser.email) {
                    imgChild.src = dataUser.picture.large;
                    h4Child.textContent = dataUser.name.title + " " + dataUser.name.first + " " + dataUser.name.last;
                    pChild.innerHTML = dataUser.email;


                    /* ------Funcionalidad Barra de Búsqueda de Amigos, mostrando amigos correspondiente según búsqueda además el número de los mismos--------------------------- */
                    let friendsNames = document.getElementsByTagName('h4');
                    let searchInput = document.getElementById('friendsSearch');
                    let friendItems = document.getElementsByClassName('item');
                    let friendsCounter = document.getElementById('counter');
                    let numFriends = friendItems.length;
                    let friendsNameArr = [];
                    let counter = 1;

                    friendsCounter.innerHTML = numFriends;

                    for (let friend of friendsNames) {
                        friendsNameArr.push({
                            id: counter++,
                            text: friend.innerHTML
                        });
                    }

                    searchInput.addEventListener("keyup", keyupHandler);

                    function keyupHandler() {
                        for (let item of friendItems) {
                            item.classList.add("d-none");
                        }
                        let text = this.value;
                        let filteredFriends = friendsNameArr.filter(el => el.text.toLowerCase().includes(text.toLowerCase()));

                        if (filteredFriends.length > 0) {
                            for (let el of filteredFriends) {
                                document.querySelector(`.item:nth-child(${el.id})`).classList.remove("d-none");
                            }
                        }

                        friendsCounter.textContent = filteredFriends.length;
                    }
                    /* --------Fin Código Funcionalidad de Barra de Búsqueda-------------------------------------------------------------- */
                }


            } else {
                console.log(response.status); // 404
            }

        } catch (error) {
            console.log(error)
        }
    }
}

document.addEventListener('DOMContentLoaded', createUser);

/* -----------------Fin Código de API ------------------------------------------------------------------------------- */


/* ----------------Filtro de Amigos según ya Amigos o Sugeridos--------------------------------------------------------- */

let contactNet = document.querySelector('#contactNet');
let indice;
let container = document.querySelector(".container")
let containerArr = container.children;
let justFriend = document.getElementsByClassName(".just")

const mostrar = (indice) => {
    indice = contactNet.selectedIndex;
    if (indice == 1) {
        for (let item of containerArr) {
            item.classList.remove("d-none");
        }
    }
    else if (indice == 2) {
        for (let item of containerArr) {
            item.classList.add("d-none");
            if (item.classList[2] == "just") {
                item.classList.remove("d-none");
            }
        }
    }
    else if (indice == 3) {
        for (let item of containerArr) {
            item.classList.add("d-none");
            if (item.classList[2] == "add") {
                item.classList.remove("d-none");
            }
        }
    }
};

contactNet.addEventListener("change", mostrar);