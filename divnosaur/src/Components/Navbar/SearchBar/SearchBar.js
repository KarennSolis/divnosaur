import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { updateSearchTerm, filterUsers } from '../../../redux/userSlice';
import './SearchBar.css';
import { FilteredUser } from './FilteredUsers';
import { FollowButton } from '../../Followers/FollowButton';
import { useNavigate } from 'react-router-dom';



export function SearchBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.follower.users);
    const followers = useSelector((state) => state.follower.users.filter((user) => user.status_friendship === 1));
    const searchTerm = useSelector((state) => state.user.searchTerm);
    const filteredUsers = users.filter((user) => {
        return (
            user.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });


    const handleSearch = (event) => {
        const searchTerm = event.target.value;

        if (searchTerm.trim().length > 0) {
            dispatch(updateSearchTerm(searchTerm));
            dispatch(filterUsers(searchTerm));
        } else {
            dispatch(updateSearchTerm(""));
            dispatch(filterUsers([]));
        }
    };


    /* ----------------Código para el Componente Modal-------------------------------------- */

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: '450px',
            left: '15%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: 'none',
            zIndex: '10000',
            opacity: 1.2
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.50)',
            zindex: '100000000000'
        },
    };


    useEffect(() => {
        if (searchTerm.length > 0 && filteredUsers.length > 0) {
            setModalIsOpen(true);
        }
    }, [filteredUsers]);




    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }


    return (
        <>
            <form id="search" className="d-flex" role="search">
                <input className="form-control me-4" type="search" placeholder="nombre, email ..." aria-label="Search" value={searchTerm} onChange={handleSearch} />
                <button className="btn btn-outline-primary me-2" type="button" >Buscar</button>
            </form>
            <FilteredUser filteredUsers={filteredUsers} />

            <Modal
                isOpen={modalIsOpen}
                scrollable={true}
                onRequestClose={closeModal}
                contentLabel="searchResults"
                style={customStyles}

            >
                <div className='modalContainer'>
                    {searchTerm.length > 0 && filteredUsers.length > 0 && (
                        <ul style={{ maxHeight: 'calc(100vh - 10px)', overflowY: 'auto' }}>
                            {filteredUsers.map((user) => (
                                <li key={user.id} id="divFollower">
                                    <img src={user.image} alt='foto' className='imagPerson' />
                                    <div className=' followDetails'>
                                        <h6>{user.name}</h6>
                                        <p>{user.email}</p>
                                        {followers && user.status_friendship === 1 ? (
                                            <div>
                                            <FollowButton key={user.user_id} user={user} />
                                            <button className='btn btn-outline-success pt-1 ms-2' onClick={() => navigate(`/profile?user_id=${encodeURIComponent(JSON.stringify(user.user_id))}`)}>
                                                <i className="bi bi-eye fs-5 "></i>
                                            </button>
                                            </div>
                                        ) : (
                                            <FollowButton key={user.user_id} user={user} />

                                       )}
                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <button className='buttonModal' onClick={closeModal} >X</button>
                </div>


            </Modal >


        </>
    )
}