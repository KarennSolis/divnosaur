import React, { useState } from 'react';
import { Modal } from 'react-modal';

export function SearchBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const users = useSelector(state => state.users);

  const searchUsers = searchText => {
    const filteredUsers = users.filter(user => {
      const search = searchText.toLowerCase();
      return (
        user.nombre.toLowerCase().includes(search) ||
        user.apellido.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.usuario.toLowerCase().includes(search)
      );
    });
    return filteredUsers;
  };

  const handleSearch = event => {
    const searchText = event.target.value;
    const filteredUsers = searchUsers(searchText);
    // Display search results in modal
    if (filteredUsers.length > 0) {
      openModal();
      // Render search results inside the modal
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        {/* Render the search results here */}
      </Modal>
    </>
  );
}
