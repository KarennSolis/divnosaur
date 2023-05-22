import React from "react";
import "./Followers.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";


export function Followers(props) {
    return (
        <div>
            <Navbar2></Navbar2>
            <div class="columnaA">
            <div class="newFeeds">
                <p class="feedTit">New Feeds</p>
                <ul class="feeds">
                    <li>
                        <i class="bi bi-newspaper"></i>
                        <p>Newsfeed</p>
                    </li>
                    <li>
                        <i class="bi bi-shield-slash-fill"></i>
                        <p>Badges</p>
                    </li>
                    <li>
                        <i class="bi bi-eye-fill"></i>
                        <p>Explore Stories</p>
                    </li>
                    <li>
                        <i class="bi bi-people-fill"></i>
                        <p>Popular Groups</p>
                    </li>
                    <li>
                        <i class="bi bi-person-bounding-box"></i>
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
                        <i class="bi bi-bar-chart-line-fill"></i>
                        <p>Analytics</p>
                    </li>
                    <li>
                        <i class="bi bi-chat-dots-fill"></i>
                        <p>Chat</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="friends_container">
            <div class="search_friends">
                <h2>Tu red</h2>
                <div class="input-group">
                    <input type="search" id="friendsSearch" class="form-control rounded" placeholder="Buscar..."
                        aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-primary">Buscar</button>
                </div>
                <div class="friendsCounter">
                    Total contactos: <span id="counter"></span>
                </div>
                <div class="div_filter">
                    <select name="contactNet" id="contactNet">
                        <option class="option" value="selecciona">Filtrar</option>
                        <option class="option" value="friend">Todos</option>
                        <option class="option" id="selectFriends" value="friends">Amigos</option>
                        <option class="option" id="selectSuggested" value="friendsSug">Contactos sugeridos</option>
                    </select>
                </div>
            </div>
            <div id="followersContainer" class="container">
               
            </div>
        </div>
        </div>
    );
}

