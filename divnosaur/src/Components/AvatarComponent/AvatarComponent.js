import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import './AvatarComponent.css';


export function AvatarComponent({ setSelectedImageUrl }) {
    const imageUrls = ["/images/images1.jpg", "/images/images2.jpg", "/images/images3.jpg", "/images/images4.jpg", "/images/images5.jpg", "/images/images6.jpg", "/images/images7.jpg", "/images/images8.jpg"];

    const handleImageClick = (url) => {
        setSelectedImageUrl(url);
        
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