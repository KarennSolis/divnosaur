const mail = document.querySelector('#mailUser')

const divMail = document.createElement("div");
const createUser = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const dataUser = data.results[0];
            console.log(dataUser)

            /* --------------------EDICIÓN DEL ELEMENTO CREADO EN EL DOM, ASIGANCIÓN A OTRO CONTENEDOR PADRE Y VOLCADO DE DATOS RESPUESTA DE LA API----------- */
            if(dataUser.email) {
                divMail.setAttribute("id", "mail")
                mail.appendChild(divMail); 
                divMail.innerHTML= dataUser.email;
            };
            
        } else {
            console.log(response.status); // 404
        }

    } catch (error) {
        console.log(error)
    }
};

document.addEventListener('DOMContentLoaded', createUser);


const locationUser = document.querySelector('#locationUser')

const divHijo2 = document.createElement("div");
const createLoc = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const dataUser = data.results[0];
            console.log(dataUser)

            /* --------------------EDICIÓN DEL ELEMENTO CREADO EN EL DOM, ASIGANCIÓN A OTRO CONTENEDOR PADRE Y VOLCADO DE DATOS RESPUESTA DE LA API----------- */
            if(dataUser.location) {
                divHijo2.setAttribute("id", "hijo2")
                locationUser.appendChild(divHijo2); 
                divHijo2.innerHTML= dataUser.location.city+", "+dataUser.location.country+"";
            };

        } else {
            console.log(response.status); // 404
        }

    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('DOMContentLoaded', createLoc);


const birthUser = document.querySelector('#profileBirth')

const divHijo3 = document.createElement("div");
const createBirthday = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const dataUser = data.results[0];
            console.log(dataUser)
            

            /* --------------------EDICIÓN DEL ELEMENTO CREADO EN EL DOM, ASIGANCIÓN A OTRO CONTENEDOR PADRE Y VOLCADO DE DATOS RESPUESTA DE LA API----------- */
            if(dataUser.dob) {
                divHijo3.setAttribute("id", "hijo3")
                birthUser.appendChild(divHijo3); 
                divHijo3.innerHTML= dataUser.dob.date;
            };

        } else {
            console.log(response.status); // 404
        }

    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('DOMContentLoaded', createBirthday);



const nameUser = document.querySelector('#profileName')

const divHijo4 = document.createElement("div");
const createNames = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const dataUser = data.results[0];
            console.log(dataUser)
            

            /* --------------------EDICIÓN DEL ELEMENTO CREADO EN EL DOM, ASIGANCIÓN A OTRO CONTENEDOR PADRE Y VOLCADO DE DATOS RESPUESTA DE LA API----------- */
            if(dataUser.name) {
                divHijo4.setAttribute("id", "hijo4")
                nameUser.appendChild(divHijo4); 
                divHijo4.innerHTML= dataUser.name.title+" "+dataUser.name.first+" "+dataUser.name.last;
            };

        } else {
            console.log(response.status); // 404
        }

    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('DOMContentLoaded', createNames);



const photoUser = document.querySelector('#foto')

const divHijo5 = document.createElement("img");
const createPics = async () => {
    try {
        const url = 'https://randomuser.me/api/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            const dataUser = data.results[0];
            console.log(dataUser)
            

            /* --------------------EDICIÓN DEL ELEMENTO CREADO EN EL DOM, ASIGANCIÓN A OTRO CONTENEDOR PADRE Y VOLCADO DE DATOS RESPUESTA DE LA API----------- */
            if(dataUser.picture) {
                divHijo5.setAttribute("id", "hijo5")
                divHijo5.setAttribute("src", "")
                photoUser.appendChild(divHijo5); 
                divHijo5.src = dataUser.picture.large;
            };
           
        } else {
            console.log(response.status); // 404
        }

    } catch (error) {
        console.log(error)
    }

}

document.addEventListener('DOMContentLoaded', createPics);