import React from "react";
import "./Followers.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";


export function Followers(props) {

    /* let users = [];
    let loggedUserId; */
    
/*     const createUserElement = async (userData) => {
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
    }; */
    
/*     const getUsers = async () => {
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
    
        await Promise.all(promises); */
    
        // --------Filtrar usuarios repetidos y contactos sugeridos--------------//
/*         const filteredUsers = users.filter((user, index, self) =>
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
    }; */

    return (

    /*     -----------------------Con BOOTSTRAP-------------------------------------------------------- */
/* 
    <div className="container">
  <div className="row align-items-center">
    <div className="col-md-8">
      <div className="columnaA">
        <div className="newFeeds">
          <p className="feedTit">New Feeds</p>
          <ul className="feeds">
            <li>
              <i className="bi bi-newspaper"></i>
              <p>Newsfeed</p>
            </li>
            <li>
              <i className="bi bi-shield-slash-fill"></i>
              <p>Badges</p>
            </li>
            <li>
              <i className="bi bi-eye-fill"></i>
              <p>Explore Stories</p>
            </li>
            <li>
              <i className="bi bi-people-fill"></i>
              <p>Popular Groups</p>
            </li>
            <li>
              <i className="bi bi-person-bounding-box"></i>
              <p>Author Profile</p>
            </li>
          </ul>
        </div>
        <div class="account">
          <p class="feedTit">Account</p>
          <ul class="feeds">
            <li>
              <i class="bi bi-gear-fill"></i>
              <p>Settings</p>
            </li>
            <li>
                <i className="bi bi-bar-chart-line-fill"></i>
                            <p>Analytics</p>
                        </li>
                        <li>
                            <i className="bi bi-chat-dots-fill"></i>
                            <p>Chat</p>
                        </li>
                    </ul>
                </div> */
           

         <div>
            <Navbar2 />
            <div className="columnaA">
                <div className="newFeeds">
                    <p className="feedTit">New Feeds</p>
                    <ul className="feeds">
                        <li>
                            <i className="bi bi-newspaper"></i>
                            <p>Newsfeed</p>
                        </li>
                        <li>
                            <i className="bi bi-shield-slash-fill"></i>
                            <p>Badges</p>
                        </li>
                        <li>
                            <i className="bi bi-eye-fill"></i>
                            <p>Explore Stories</p>
                        </li>
                        <li>
                            <i className="bi bi-people-fill"></i>
                            <p>Popular Groups</p>
                        </li>
                        <li>
                            <i className="bi bi-person-bounding-box"></i>
                            <p>Author Profile</p>
                        </li>
                    </ul>
                </div>
                <div className="account">
                    <p className="feedTit">Account</p>
                    <ul className="feeds">
                        <li>
                            <i className="bi bi-gear-fill"></i>
                            <p>Settings</p>
                        </li>
                        <li>
                            <i className="bi bi-bar-chart-line-fill"></i>
                            <p>Analytics</p>
                        </li>
                        <li>
                            <i className="bi bi-chat-dots-fill"></i>
                            <p>Chat</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="friends_container">
                <div className="search_friends">
                    <h2>Tu red</h2>
                    <div className="input-group">
                        <input type="search" id="friendsSearch" className="form-control rounded" placeholder="Buscar..."
                            aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" className="btn btn-outline-primary">Buscar</button>
                    </div>
                    <div className="friendsCounter">
                        Total contactos: <span id="counter"></span>
                    </div>
                    <div className="div_filter">
                        <select name="contactNet" id="contactNet">
                            <option className="option" value="selecciona">Filtrar</option>
                            <option className="option" value="friend">Todos</option>
                            <option className="option" id="selectFriends" value="friends">Amigos</option>
                            <option className="option" id="selectSuggested" value="friendsSug">Contactos sugeridos</option>
                        </select>
                    </div>
                </div>
                <div id="followersContainer" className="container">

                </div>
            </div>
        </div> 
    );
}

