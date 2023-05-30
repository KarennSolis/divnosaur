import React from "react";
import "./Followers.css";
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from "react-router-dom";


export function Followers(props) {
    return (
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

