import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { Perfil } from "./Perfil";

/**Este componente recoge los datos del usuario del backend y con dispatch los añade al estado de AddUser de redux
 * es el componente padre de perfil, y perfil puede acceder a este estado User y se encarga de modificar estos datos*/
function AppPerfil() {
    // const params = new URLSearchParams(location.search);
    // const friendId = parseInt(params.get("user_id")) || null;
    const dispatch = useDispatch();
    useEffect(() => {
        // const idLogged = localStorage.getItem('idLogged');
        
        fetch(`http://localhost:3001/profile`,{
            method: "GET",
            headers: {
                // Authorization: localStorage.getItem("Token"),
                Authorization: `Bearer ${localStorage.getItem("Token")}`,
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(addUser(data));

            })
            .catch((error) => {
                console.log(error)
            });
    }, [])




    return (

        <Perfil />

    )
}

export default AppPerfil;