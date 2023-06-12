import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUserId, setUsers } from '../../redux/followerSlice';
import { setFollowedUsers } from '../../redux/followerSlice';
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';
import { FriendsSuggests } from './FriendsSuggst';
import { FollowButton } from './FollowButton';
import './Followers.css';
import './FriendsSuggst.css';
import { useNavigate } from 'react-router-dom';




export function Followers() {
    const dispatch = useDispatch();
    const loggedUserId = useSelector((state) => state.user.loggedUserId);
    /* const users = useSelector((state) => state.follower.users); */
    const users = useSelector((state) => state.follower.users.filter((user) => user.status_friendship === 1));
    const numberUsers = users.length
    const [userImages, setUserImages] = useState([]); //se guardan en el estado local, no en el global de redux

    const idLogged = localStorage.getItem('idLogged');
    const navigate = useNavigate()

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
    }, [dispatch, loggedUserId]);


    return (

        <>
            <Navbar2 />
            <div className="container fContainer">

                <h5 className='numberFollowers'>Tienes <span className='numberUsers'>{numberUsers}</span>  contactos en tu red</h5>
                <div id="followersContainer" className=" row ">

                    {users ? (
                        users.map((user) => (
                            <div key={user.user_id} className='col-4 rounded-2 border-success border-opacity-50 border-2 bg-success bg-opacity-10 p-2' id='divFollower'>
                                <img src={user.image} alt='foto' className='imagPerson' />
                                <div className=' followDetails'>
                                    <h6>{user.name}</h6>
                                    <p>{user.email}</p>
                                    <FollowButton key={user.user_id} user={user} />
                                    <button className='btn btn-outline-success pt-0 ps-3 ms-2' onClick={() => navigate(`/profile?user_id=${encodeURIComponent(JSON.stringify(user.user_id))}`)}>
                                        ver
                                        {/* <i className="bi bi-person bs-icon-b fs-4">ver perfil</i> */}
                                        <i className="bi bi-eye px-2 fs-5"></i>
                                    </button>
                                </div>

                            </div>
                        ))

                    ) : (
                        <p>Cargando...</p>
                    )}

                </div>

            </div>
            <FriendsSuggests />


        </>
    );

}

