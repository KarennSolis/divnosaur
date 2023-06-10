import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { setUsers } from '../../../redux/followerSlice';
import './SearchBar.css';



export function SearchBar() {
    const users = useSelector((state) => state.users);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: '35%',
            left: '43%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'transparent',
            border: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.50)',
            zindex: '1000'
        },
    };


    const dispatch = useDispatch();

    const handleSearch = (event) => {
        
        const searchTerm = event.target.value.toLowerCase();
        console.log(searchTerm)
        const filteredUsers = users ? users.filter((user) => {
            const username = user.name.toLowerCase();
            const email = user.email.toLowerCase();
            return username.includes(searchTerm) || email.includes(searchTerm);
        }) : [];
        dispatch(setUsers([...filteredUsers]));
        console.log(filteredUsers);
        
      };


    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <>
            <form id="search" className="d-flex" role="search">
                <input className="form-control me-4" type="search" placeholder="nombre, especialidad ..." aria-label="Search" onChange={handleSearch} onClick={openModal} />
                <button className="btn btn-outline-primary me-2" type="submit"  >Buscar</button>
            </form>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="searchResults"
                style={customStyles}
            >
                <div className='modalContainer'>
                    <Link to='/perfil'><div className='results'><a href='#'>resultado filtrado </a></div></Link>
                    <button className='buttonModal' onClick={closeModal}>X</button>
                </div>

            </Modal>

        </>
    )
}