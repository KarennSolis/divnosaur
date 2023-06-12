import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import './AvatarComponent.css';
import { useState } from 'react';



export function AvatarComponent({ setSelectedImageUrl }) {
    const imageUrls = ["/images/images1.jpg", "/images/images2.jpg", "/images/images3.jpg", "/images/images4.jpg", "/images/images5.jpg", "/images/images6.jpg", "/images/images7.jpg", "/images/images8.jpg"];

    const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(-1);
    const [selectedAvatarSize, setSelectedAvatarSize] = useState({
        selected: 70,
        unselected: 40,
      });
   

    const handleImageClick = (url, index) => {
        setSelectedImageUrl(url);
        if (index === selectedAvatarIndex) {
          setSelectedAvatarIndex(-1);
        } else {
          setSelectedAvatarIndex(index);
        }
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
                            onClick={() => handleImageClick(url, index)}
                            className="avatar"
                            sx={{
                                width: index === selectedAvatarIndex ? selectedAvatarSize.selected : selectedAvatarSize.unselected,
                                height: index === selectedAvatarIndex ? selectedAvatarSize.selected : selectedAvatarSize.unselected,
                              }}
                           
                        />
                    ))}
                </AvatarGroup>
            </div>
        </>
    );
}