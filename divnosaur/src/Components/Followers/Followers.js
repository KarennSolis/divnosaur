import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUserId, setUsers, updateFriendshipStatus } from '../../redux/followerSlice';
import './Followers.css';
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { Link } from 'react-router-dom';

export function Followers() {
    const dispatch = useDispatch();
    const loggedUserId = useSelector((state) => state.user.loggedUserId);
    const users = useSelector((state) => state.follower.users);
    const [userImages, setUserImages] = useState([]);
    const idLogged = localStorage.getItem('idLogged');


    useEffect(() => {
        const fetchData = async () => {


            const allUsers = await fetch(`http://localhost:3001/users`);
            let dataUser = [];
            if (allUsers.ok) {
                dataUser = await allUsers.json();
                console.log(dataUser);
            }

            const promises = users.map((user) =>
                fetch('https://randomuser.me/api/')
                    .then((response) => response.json())
                    .then((data) => {
                        return {
                            ...user,
                            image: data.results[0].picture.large,
                        };
                    }),
            );


            const followedResponse = await fetch(`http://localhost:3001/followed/${idLogged}`);
            let followedData = [];
            if (followedResponse.ok) {
                followedData = await followedResponse.json();
                console.log(followedData);
            }


            /* const promises = users.map((user) =>
                fetch('https://randomuser.me/api/').then((response) => response.json()).then((data) => {
                    user.image = data.results[0].picture.large;
                }),
            );

             await Promise.all(promises); */


            Promise.all(promises).then((updatedUsers) => {
                setUserImages(updatedUsers);
            });

            dispatch(setUsers([/* ...followedData, */ ...dataUser]));
            dispatch(setLoggedUserId(idLogged));

        };


        fetchData();
    }, [dispatch, loggedUserId]);
    /* }, [dispatch, loggedUserId, users]); */


    const handleButtonClick = async function (userData) {
        try {

            const response = await fetch(`http://localhost:3001/changeStatus/${idLogged}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    friend: userData.user_id,
                    status_friendship: userData.status_friendship
                })
            })

            if (response.ok) {
                dispatch(updateFriendshipStatus({
                    friendId: userData.user_id,
                    newStatus: userData.status_friendship
                }))
            } else {

                console.error('Ocurrió un error al actualizar el estado de la amistad.')
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <>
            <Navbar2 />
            <div className='postsDiv'>
                {userImages.map((user) => (
                    <div key={user.user_id}>
                        <img src={user.image} alt="User" />
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        <button
                            className={user.status_friendship === 1 ? 'following' : ''}
                            onClick={() => handleButtonClick(user)}
                        >
                            {user.status_friendship === 1 ? 'Siguiendo' : 'Seguir'}
                        </button>
                    </div>
                ))}
            </div>
            {/*             <div>
                {users.map(user => (
                    <div key={user.user_id}>
                        <img src={user.image} alt="User" />
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        <button
                            className={user.status_friendship === 1 ? 'following' : ''}
                            onClick={() => handleButtonClick(user)}
                        >
                            {user.status_friendship === 1 ? 'Siguiendo' : 'Seguir'}
                        </button>
                    </div>
                ))}
            </div> */}



            {/*  -----------------------Con BOOTSTRAP--------------------------------------------------------  */}


            <div>
                <Navbar2 />
                <div className="columnaA-f">
                    <div className="newFeeds-f">
                        <p className="feedTit-f">New Feeds</p>
                        <ul className="feeds-f">
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
                    <div className="account-f">
                        <p className="feedTit-f">Account</p>
                        <ul className="feeds-f">
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
                <div className="friends_container-f">
                    <div className="search_friends-f">
                        <h2>Tu red</h2>
                        <div className="input-group-f">
                            <input type="search" id="friendsSearch" className="form-control rounded" placeholder="Buscar..."
                                aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" className="btn btn-outline-primary">Buscar</button>
                        </div>
                        <div className="friendsCounter-f">
                            Total contactos: <span id="counter"></span>
                        </div>
                        <div className="div_filter-f">
                            <select name="contactNet" id="contactNet">
                                <option className="option" value="selecciona">Filtrar</option>
                                <option className="option" value="friend">Todos</option>
                                <option className="option" id="selectFriends" value="friends">Amigos</option>
                                <option className="option" id="selectSuggested" value="friendsSug">Contactos sugeridos</option>
                            </select>
                        </div>
                    </div>
                    <div id="followersContainer" className="container-f">

                    </div>
                </div>
            </div>




        </>
    );

}

