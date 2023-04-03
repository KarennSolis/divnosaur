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