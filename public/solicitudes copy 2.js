let users = [];
let usersFiltered = users;

const createUserElement = async (userData) => {
    // Container para append el elemento de usuario
    const container = document.getElementById("followersContainer");

    // Creamos elemento de usuario (el cuadrado)
    const element = document.createElement("div");
    element.classList.add("item");

    element.innerHTML = `
        <h4>${userData.name}</h4>
        <p>${userData.email}</p>
        <p>${userData.country}</p>
    `

    const button = document.createElement("button");
    if (userData.status_friendship===1){
        button.textContent = "Siguiendo";
        button.classList.add("following");
    }else {
        button.textContent = "Seguir";
        button.classList.add("users");
    }

    const image = document.createElement("img");
    image.src = userData.image;

    element.appendChild(button);
    const h4 = element.querySelector("h4");
    element.insertBefore(image, h4);
    container.appendChild(element);
}

const getUsers = async () => {
    const idLogged = localStorage.getItem('idLogged');
    const followedResponse = await fetch(`http://localhost:3000/followed/${idLogged}`);
    if (followedResponse.ok) {
        const followedData = await followedResponse.json();
        console.log(followedData);
        users = [...users, ...followedData];
    }

    const url = 'http://localhost:3000/users'
    const response = await fetch(url);       
    if (response.ok) {
        const dataUser = await response.json();
        console.log(dataUser);
        users = [...users, ...dataUser];
    }

    users.map(user => 
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            user.image = data.results[0].picture.large;
            renderUsers(users);
        })
    )

    renderUsers(users);
}

const renderUsers = (users) => {
    const container = document.getElementById("followersContainer");
    container.innerHTML = "";
    users.forEach((user) => {
        createUserElement(user);
    })
};


const searchBar = () => {
    const container = document.getElementById("followersContainer");
    let searchInput = document.getElementById('friendsSearch');

    const keyupHandler = () => {
        let searchInput = document.getElementById('friendsSearch');

        let text = searchInput.value;
        if (text === "") {
            usersFiltered = users
            renderUsers(usersFiltered);
        } else {
            usersFiltered = users.filter(user => user.name.toLowerCase().includes(text));
            renderUsers(usersFiltered);
        }
    }

    searchInput.addEventListener("keyup", keyupHandler);
}

const filterUsers = () => {
    let contactNet = document.querySelector('#contactNet');

    const mostrar = () => {
        const indice = contactNet.selectedIndex;
        
        switch (indice) {
            case 1:
                usersFiltered = users;
                break;
            case 2:
                usersFiltered = users.filter(user => user.status_friendship === 1);
                break;
            case 3:
                usersFiltered = users.filter(user => user.friendship_id === undefined);
                break;
        }
        renderUsers(usersFiltered);
    }

    contactNet.addEventListener("change", mostrar);
}

searchBar();
filterUsers();
getUsers();


/* ----------------Filtro de Amigos según ya Amigos o Sugeridos--------------------------------------------------------- */
//NO COMENTAR//

// let contactNet = document.querySelector('#contactNet');
// let indice;
// let container = document.querySelector(".container")
// let containerArr = container.children;
// let justFriend = document.getElementsByClassName(".just")

// const mostrar = (indice) => {
//     indice = contactNet.selectedIndex;
//     if (indice == 1) {
//         for (let item of containerArr) {
//             item.classList.remove("d-none");
//         }
//     }
//     else if (indice == 2) {
//         for (let item of containerArr) {
//             item.classList.add("d-none");
//             if (item.classList[2] == "just") {
//                 item.classList.remove("d-none");
//             }
//         }
//     }
//     else if (indice == 3) {
//         for (let item of containerArr) {
//             item.classList.add("d-none");
//             if (item.classList[2] == "add") {
//                 item.classList.remove("d-none");
//             }
//         }
//     }
// };

// contactNet.addEventListener("change", mostrar);