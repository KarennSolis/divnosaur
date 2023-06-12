import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUserId, setUsers } from '../../redux/followerSlice';
import { setFollowedUsers } from '../../redux/followerSlice';
import { FollowButton } from './FollowButton';
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import './Followers.css';
import './FriendsSuggst.css';

export function FriendsSuggests2() {
    const dispatch = useDispatch();
    const loggedUserId = useSelector((state) => state.user.loggedUserId);
    const users = useSelector((state) => state.follower.users);
    const filteredUsers = users.filter((user) => !user.status_friendship || user.status_friendship === 0);

    const idLogged = localStorage.getItem('idLogged');

    useEffect(() => {
        const fetchData = async () => {
            const allUsers = await fetch(`http://localhost:3001/users`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    "Content-Type": "application/json"
                }
            });
            let dataUser = [];
            if (allUsers.ok) {
                dataUser = await allUsers.json();
                console.log(dataUser);
            }

            const followedResponse = await fetch(`http://localhost:3001/followed/${idLogged}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    "Content-Type": "application/json"
                }
            });
            let followedData = [];

            if (followedResponse.ok) {
                followedData = await followedResponse.json();
                dispatch(
                    setFollowedUsers(
                        followedData.map((friend) => ({
                            ...friend,
                            status_friendship: 1,
                        }))
                    )
                );
            }

            //Haciendo combinación de info de users + status_friendship  para almacenarla en el estado global
            const combinedUsers = dataUser.map((user) => {
                const followedUser = followedData.find((followed) => followed.user_id === user.user_id);
                return followedUser ? { ...user, status_friendship: followedUser.status_friendship } : user;
            });

            dispatch(setUsers(combinedUsers));
            dispatch(setLoggedUserId(idLogged));
        };

        fetchData();
    }, [dispatch, idLogged]);

    console.log(users);

    return (
        <>
           
                
                <div className="container fContainer"  /* className="col-10 container-fluid" */>
                   
                    <h5>Haz nuevos contactos</h5>
                    <div id="followersContainer" className=" row ">

                        {filteredUsers ? (
                            filteredUsers.map((user) => (
                                <div key={user.user_id} className='col-3 rounded-2 border-dark border-opacity-50 border-2 bg-body-secondary p-2 shadow' id='divFollower'>
                                {/* // <div key={user.user_id} className='col-4 rounded-2 border-dark border-opacity-50 border-2 bg-success bg-opacity-10 p-2 shadow' id='divFollower'> */}
                                    <img src={user.image} alt='foto' className='imagPerson'/>
                                    <div>
                                        <h6>{user.name}</h6>
                                        <p>{user.email}</p>
                                        {/* <p>Contactos en común:</p> */}
                                        <FollowButton key={user.user_id} user={user} />
                                    </div>

                                    
                                </div>
                            ))
                        ) : (
                            <p>No hay usuarios disponibles.</p>
                        )}


                    </div>
                </div>
            
        </>
    );
}
