import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import './AvatarComponent.css';


export function AvatarComponent({ initialSelectedImage, handleSaveSelectedImage }) {

  const [selectedImage, setSelectedImage] = useState(initialSelectedImage);//modificacion
  const imageUrls = ["/images1.jpg","/images2.jpg","/images3.jpg","/images4.jpg","/images5.jpg","/images6.jpg","/images7.jpg","/images8.jpg"];



  const handleImageClick = (url) => {
    saveSelectedImage(url);
    console.log("cogiendo la imagen")
  };

  const saveSelectedImage = async (selectedImage) => {
    const formData = new FormData(); 
    const imageBlob = await fetch(selectedImage).then((r) => r.blob());
    //modificacion
    /* formData.append('avatar', selectedImage); */
    formData.append('avatar', imageBlob); //modificacion
    /* setSelectedImage(selectedImageUrl); */ //modificacion
    await handleSaveSelectedImage(formData);
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