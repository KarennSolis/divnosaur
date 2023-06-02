import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import './AvatarComponent.css';


export function AvatarComponent({ initialSelectedImage, handleSaveSelectedImage }) {

  const imageUrls = [
    "/images1.jpg",
    "/images2.jpg",
    "/images3.jpg",
    "/images4.jpg",
    "/images5.jpg",
    "/images6.jpg",
    "/images7.jpg",
    "/images8.jpg",
  ];

  const handleImageClick = (url) => {
    saveSelectedImage(url);
  };

  const saveSelectedImage = async () => {
    const formData = new FormData();
    formData.append('avatar', selectedImage);
    onSaveSelectedImage(formData);
  };

  return (
    <>
      <div className='avatarContainer'>
        <AvatarGroup max={8}>
          {imageUrls.map((url, index) => (
            <Avatar
              key={index}
              src={url}
              alt="Avatar"
              onClick={() => handleImageClick(url)}
              className="avatar"
            />
          ))}
        </AvatarGroup>

      </div>

    </>

  );
}