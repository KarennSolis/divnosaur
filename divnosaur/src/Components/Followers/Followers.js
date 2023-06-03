import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUserId, setUsers, updateFriendshipStatus } from '../../redux/followerSlice';
import { setFollowedUsers } from '../../redux/followerSlice'
import './Followers.css';
import { Navbar2 } from '../Navbar/Navbar2/Navbar2';


export function Followers() {
    const dispatch = useDispatch();
    const loggedUserId = useSelector((state) => state.user.loggedUserId);
    const users = useSelector((state) => state.follower.users);

    const [userImages, setUserImages] = useState([]); //se guardan en el estado local, no en el global de redux

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


            Promise.all(promises).then((updatedUsers) => {
                console.log('updatedUsers', updatedUsers);
                /* setUserImages(updatedUsers); */
                const imagesMap = updatedUsers.reduce((acc, user) => {
                    acc[user.user_id] = user.image;
                    return acc;
                }, {});
                setUserImages(imagesMap);

            });

            dispatch(setUsers(combinedUsers));
            dispatch(setLoggedUserId(idLogged));

        };

        fetchData();
    }, [dispatch, loggedUserId]);


    const handleButtonClick = async function (userData) {

        const updatedStatus = userData.status_friendship === 1 ? 0 : 1;

        try {

            const response = await fetch(`http://localhost:3001/changeStatus/${idLogged}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    friend: userData.user_id,
                    status_friendship: updatedStatus
                })
            })

            if (response.ok) {
                dispatch(updateFriendshipStatus({
                    friendId: userData.user_id,
                    newStatus: updatedStatus
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
            <div>
                <Navbar2 />

                <div className="friends_container-f">
                    <div className="search_friends-f">
                    </div>
                    
                    <div id="followersContainer" className="container-f">
                        {/* ------------------INSERTANDO EL DIV DE FOLLOWERS------------------ */}
                        {/* <div className='postsDiv'> */}
                        {users ? (
                            users.map((user) => (
                                <div key={user.user_id}>
                                    <img src={userImages[user.user_id]} alt="User" />
                                    <h4>{user.name}</h4>
                                    <p>{user.email}</p>
                                    <button
                                        className={user.status_friendship === 1 ? 'following' : 'users'}
                                        onClick={() => handleButtonClick(user)}
                                    >
                                        {user.status_friendship === 1 ? 'Siguiendo' : 'Seguir'}
                                    </button>
                                </div>
                            ))

                        ) : (
                            <p>Cargando...</p>
                        )}
                        {/* </div> */}

                    </div>
                </div>
            </div>




        </>
    );

}

