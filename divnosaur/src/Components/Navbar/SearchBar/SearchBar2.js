import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { updateSearchTerm, filterUsers } from '../../../redux/userSlice';
import './SearchBar.css';
import { FilteredUser } from './FilteredUsers';

export function SearchBar2() {

    const dispatch = useDispatch();
    /* const filteredUsers = useSelector(state => state.filteredUsers); */
    const users = useSelector((state) => state.users);
    const filteredUsers = users && users.filter((user) => user.age > 18);
    console.log(users);


    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(filterUsers(event.target.value));
      };
      
  
    

    const handleInputChange = (event) => {
        dispatch(updateSearchTerm(event.target.value));
    };

    return (
        <>
            <form id="search" className="d-flex" role="search">
                <input className="form-control me-4" type="text" placeholder="nombre, email ..." aria-label="Search" /* value={searchTerm} */ onChange={handleInputChange} />
                <button className="btn btn-outline-primary me-2" type="button" onClick={handleSearch} >Buscar</button>
     
            </form>
            <FilteredUser filteredUsers={filteredUsers} />
        </>
    )
}