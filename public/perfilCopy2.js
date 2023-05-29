const profileName = document.querySelector("#profileName");
const locationUser = document.querySelector("#locationUser");
const profileBirth = document.querySelector("#profileBirth");
const profileStudy = document.querySelector("#profileStudy");
const profileLang = document.querySelector("#profileLang");
const mailUser = document.querySelector("#mailUser");
const profileHobbies = document.querySelector("#profileHobbies");
const photoUser = document.querySelector("#foto");

const user_id = localStorage.getItem("idLogged");
fetch(`http://localhost:3000/${user_id}`, {
  method: "GET",
}).then(async (response) => {
  const json = await response.json();
  console.log(json);
  renderUserData(json);
});

const renderUserData = (dataUser) => {
   

    profileName.innerHTML = dataUser.name;
    locationUser.innerHTML = dataUser.country;
    profileBirth.innerHTML = dataUser.age;
    profileStudy.innerHTML = dataUser.experience;
    mailUser.innerHTML = dataUser.email
    profileHobbies.innerHTML = dataUser.hobbies;
}


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

