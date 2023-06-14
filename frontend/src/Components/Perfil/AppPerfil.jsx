import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { Perfil } from "./Perfil";
import { useLocation } from "react-router-dom";
// /**Este componente recoge los datos del usuario del backend y con dispatch los añade al estado de AddUser de redux
//  * es el componente padre de perfil, y perfil puede acceder a este estado User y se encarga de modificar estos datos*/
function AppPerfil() {
    const [follower, setFollower] = useState(null);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const followerId = parseInt(params.get("user_id")) || null;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("http://localhost:3001/profile", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`,
                        "Content-Type": "application/json"
                    }
                });

                const userData = await response.json();
                console.log("USER DATA QUE SE GUARDA EN REDUX  " + userData);
                dispatch(addUser(userData));

                if (followerId) {
                    const followerResponse = await fetch(`http://localhost:3001/user/${followerId}`);
                    const followerData = await followerResponse.json();
                    console.log(followerData);
                    setFollower(followerData);
                } else {
                    setFollower(null);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserProfile();
    }, [location.search]);  //*Agrega location.search como dependencia//

    return <Perfil followerData={follower} />;
}

export default AppPerfil;
