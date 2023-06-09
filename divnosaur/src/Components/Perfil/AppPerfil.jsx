import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { Perfil } from "./Perfil";


function AppPerfil() {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const idLogged = localStorage.getItem('idLogged');

    //     fetch(`http://localhost:3001/profile/${idLogged}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             dispatch(addUser(data));

    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }, [])

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