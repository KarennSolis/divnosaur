import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFriendshipStatus } from '../../redux/followerSlice';
import './FollowButton.css'

export function FollowButton({ user }) {
    const dispatch = useDispatch();
    const idLogged = localStorage.getItem('idLogged');
  
    const handleButtonClick = async function (userData) {

        const updatedStatus = userData.status_friendship === 1 ? 0 : 1;

        try {

            const response = await fetch(`http://localhost:3001/changeStatus/${idLogged}`, {
                method: 'PATCH',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("Token")}`,
                    "Content-Type": "application/json"
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
        <button type="button" 
            className= {user.status_friendship === 1 ? 'following btn btn-outline-danger' : 'users btn btn-outline-primary bi bi-person-fill-add ps-1'}
            onClick={() => handleButtonClick(user)}
        >
            {user.status_friendship === 1 ? 'eliminar' : 'seguir'}
        </button>
    )
}