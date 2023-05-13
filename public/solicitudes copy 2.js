let users = [];
let loggedUserId;

const createUserElement = async (userData) => {
    const container = document.getElementById("followersContainer");

    const element = document.createElement("div");
    element.classList.add("item");

    element.innerHTML = `
     <h4>${userData.name}</h4>
     <p>${userData.email}</p>
     <p>${userData.country}</p>
   `;

    const button = document.createElement("button");
    if (userData.status_friendship === 1) {
        button.textContent = "Siguiendo";
        button.classList.add("following");
    } else {
        button.textContent = "Seguir";
        button.classList.add("users");
    }

    button.addEventListener("click", async () => {
        try {
            const response = await fetch(`http://localhost:3000/changeStatus/${loggedUserId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    friend: userData.user_id,
                    status_friendship: userData.status_friendship === 1 ? 0 : 1 //----------nuevo valor--------------//
                }),
            });

            if (response.ok) {
                userData.status_friendship = userData.status_friendship === 1 ? 0 : 1;
                button.textContent = userData.status_friendship === 1 ? "Siguiendo" : "Seguir";//---------dejar de seguir, cambia valor a 0 y cambia el botón------------------//
                button.classList.toggle("following");

                if (userData.status_friendship === 0) {
                    container.removeChild(element);
                }
            } else {
                console.error("Ocurrió un error al actualizar el estado de la amistad.");
            }
        } catch (error) {
            console.error(error);
        }
    });

    const image = document.createElement("img");
    image.src = userData.image;

    element.appendChild(button);
    const h4 = element.querySelector("h4");
    element.insertBefore(image, h4);
    container.appendChild(element);
};

const getUsers = async () => {
    const idLogged = localStorage.getItem('idLogged');
    loggedUserId = idLogged;

    const followedResponse = await fetch(`http://localhost:3000/followed/${idLogged}`);
    if (followedResponse.ok) {
        const followedData = await followedResponse.json();
        console.log(followedData);
        users = [...followedData];
    }

    const url = 'http://localhost:3000/users';
    const response = await fetch(url);
    if (response.ok) {
        const dataUser = await response.json();
        console.log(dataUser);
        users = [...users, ...dataUser];
    }

    const promises = users.map(user =>
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                user.image = data.results[0].picture.large;
            })
    );

    await Promise.all(promises);

    // --------Filtrar usuarios repetidos y contactos sugeridos--------------//
    const filteredUsers = users.filter((user, index, self) =>
        user.user_id !== loggedUserId && self.findIndex(u => u.user_id === user.user_id) === index && (user.status_friendship === 0 || user.status_friendship === 1)
    );

    renderUsers(filteredUsers);
};

const renderUsers = (users) => {
    const container = document.getElementById("followersContainer");
    container.innerHTML = "";
    users.forEach((user) => {
        createUserElement(user);
    });
};

const searchBar = () => {
    const searchInput = document.getElementById('friendsSearch');

    const keyupHandler = () => {
        let text = searchInput.value;
        if (text === "") {
            const filteredUsers = users.filter(user => user.user_id !== loggedUserId);
            renderUsers(filteredUsers);
        } else {
            const filteredUsers = users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()) && user.user_id !== loggedUserId);
            renderUsers(filteredUsers);
        }
    };

    searchInput.addEventListener("keyup", keyupHandler);
};

const filterUsers = () => {
    let contactNet = document.querySelector('#contactNet');

    const mostrar = () => {
        const indice = contactNet.selectedIndex;

        switch (indice) {
            case 0:
                renderUsers(users);
                break;
            case 1:
                const filteredUsers = users.filter(user => user.status_friendship !== 1 && user.user_id !== loggedUserId);
                renderUsers(filteredUsers);
                break;
            case 2:
                const followingUsers = users.filter(user => user.status_friendship === 1 && user.user_id !== loggedUserId);
                renderUsers(followingUsers);
                break;
            case 3:
                const suggestedUsers = users.filter(user => user.friendship_id === undefined && user.user_id !== loggedUserId);
                renderUsers(suggestedUsers);
                break;
        }
    };

    contactNet.addEventListener("change", mostrar);
};


searchBar();
filterUsers();
getUsers();
