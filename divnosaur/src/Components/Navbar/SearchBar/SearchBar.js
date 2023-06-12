import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { updateSearchTerm, filterUsers } from '../../../redux/userSlice';
import './SearchBar.css';
import { FilteredUser } from './FilteredUsers';



export function SearchBar() {
    /*     console.log('entrando')
        const dispatch = useDispatch();
        const searchTerm = useSelector((state) => state.user.searchTerm);
    
        const handleSearch = (event) => {
            const searchTerm = event.target.value;
    
            dispatch(updateSearchTerm(searchTerm));
            dispatch(filterUsers(searchTerm));
    
        };
    
        const filteredUsers = useSelector((state) => {
            console.log(state.user.filteredUsers);
            return state.user.filteredUsers;
        });
       */

    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.user.searchTerm);
    const filteredUsers = useSelector((state) => state.user.filteredUsers) || [];
    const hasFilteredUsers = useSelector((state) => state.user.filteredUsers.length > 0);

    /* const users = useSelector((state) => state.user.users); */

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        dispatch(updateSearchTerm(searchTerm));
        dispatch(filterUsers(searchTerm));

        /* dispatch(updateSearchTerm(searchTerm.toString()));
        const filteredUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase().toString()) || user.email.toLowerCase().includes(searchTerm.toLowerCase().toString());
        });
        dispatch(filterUsers(filteredUsers));
        if (searchTerm.trim() === '') {
            dispatch(filterUsers([]));
          } else {
            const filteredUsers = users.filter(user => {
              return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
            });
            dispatch(filterUsers(filteredUsers));
          } */
    };

   
   /*  const filteredUsers = useSelector((state) => state.user.filteredUsers); */


    /* ----------------Código para el Componente Modal-------------------------------------- */

    /* const [modalIsOpen, setModalIsOpen] = useState(false);

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
            zIndex: '1000'
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.50)',
            zindex: '1000'
        },
    }; */

    /* useEffect(() => {
        if (filteredUsers.length > 0) {
            setModalIsOpen(true);
        }
    }, [filteredUsers]); */


    /* const openModal = () => {
        console.log('Modal abierto');
        setModalIsOpen(true);
    } */


    /* const closeModal = () => {

        setModalIsOpen(false);
    } */


    return (
        <>
            <form id="search" className="d-flex" role="search">
                <input className="form-control me-4" type="search" placeholder="nombre, email ..." aria-label="Search" value={searchTerm} onChange={handleSearch} />
                <button className="btn btn-outline-primary me-2" type="button" onClick={() => filteredUsers ? console.log('siii') : console.log('nooo')} >Buscar</button>
                {filteredUsers.length > 0 && (
                    <ul>
                        {filteredUsers.map((user) => (
                            <li key={user.id} className='results'>el resultado es {user.name}</li>
                        ))}
                    </ul>
                )}
            </form>
            <FilteredUser filteredUsers={filteredUsers} />

           {/*  <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="searchResults"
                style={customStyles}

            >
                <div className='modalContainer'>
                    <p className='results'>probando si el modal renderiza</p> */}

                    {/* {filteredUsers && (
                        <ul>
                            {filteredUsers.map((user) => (
                                <li key={user.id} className='results'>el resultado es {user.name}</li>
                            ))}
                        </ul>
                    )} */}


                    {/* {/* <button className='buttonModal' onClick={closeModal} >X</button>
                /* </div> */}  


           {/*  </Modal> */}

                    
        </>
    )
}