/* const user = document.getElementById("user").value;
const email = document.getElementById('Correo').value;
const password = document.getElementById('Contrasena').value;
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');
const age = document.getElementById('age').value;
const phone = document.getElementById('phone').value;
const town = document.getElementById('town').value;
const country = document.getElementById('country').value;
const hobbies = document.getElementById('hobbies').value;
const experience = document.getElementById('experience').value; */


//const user = document.getElementById("user").value;
//const email = document.getElementById('Correo').value;
//const password = document.getElementById('Contrasena').value;



/* form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let warnings = "";
    let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entrar = false;
    parrafo.innerHTML = '';
    if (user.value.length < 6) {
        warnings += `El user no es valido  <br>`
        entrar = true
    };
    if (!expRegEmail.test(email.value)) {
        warnings += `El correo no es valido <br>`
        entrar = true
    };
    if (password.value.length < 8) {
        warnings += `La contraseña no es valida <br>`
        entrar = true
    };

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = 'Enviado';
        setTimeout(function () {
            location.href = 'http://127.0.0.1:5500/team-8/index.html';
        }, 1000,);
    };

});

//const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const email = document.getElementById('Correo').value;
    const password = document.getElementById('Contrasena').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const town = document.getElementById('town').value;
    const country = document.getElementById('country').value;
    const hobbies = document.getElementById('hobbies').value;
    const experience = document.getElementById('experience').value;

    form.reset(); */

/*     fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, email, password, age, phone, town, country, hobbies, experience })
    })
        // .then(data => { console.log(data) })
        .then(data => data.json())
        .then(response => {
            const { result, message } = response
            if (result) {
                alert(message)
            } else {
                // response.text().then(errorMessage => {
                //     alert(errorMessage)
                // });
                // alert(message)
                window.location.href = "/public/index.html"
            }
        })
        .catch(error => {
            console.error('Error al enviar la solicitud: ', error)
        }); */

/* 
    const asyncPostCall = async () => {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, email, password, age, phone, town, country, hobbies, experience })
            });
            const data = await response.json();
            // enter you logic when the fetch is successful
            //console.log(response.json);
            alert('olissss')
            const { result, message } = data
            //console.log(data)
            if (result) {
                //console.log(result)
                alert(message)
            } else {
                window.location.href = "/public/index.html"
            }


        } catch (error) {
            console.error('Error al enviar la solicitud: ', error)
        }
    }

    asyncPostCall();


});
 */


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById("user").value;
    const email = document.getElementById('Correo').value;
    const password = document.getElementById('Contrasena').value;
    const form = document.getElementById('form');
    const parrafo = document.getElementById('warnings');
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const town = document.getElementById('town').value;
    const country = document.getElementById('country').value;
    const hobbies = document.getElementById('hobbies').value;
    const experience = document.getElementById('experience').value;

    form.reset();


    const asyncPostCall = async () => {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user, email, password, age, phone, town, country, hobbies, experience })
            });
            const data = await response.json();
            const { result, message } = response;
  
            if (result) {
                alert(message)
            } else {
                window.location.href = "/public/index.html"
            }

        } catch (error) {
            console.error('Error al enviar la solicitud: ', error)
        }
    }


    let warnings = "";
    let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entrar = false;
    parrafo.innerHTML = '';

    if (user.length < 6) {
        warnings += `El user no es valido  <br>`
        entrar = true
    };
    if (!expRegEmail.test(email)) {
        warnings += `El correo no es valido <br>`
        entrar = true
    };
    if (password.length < 8) {
        warnings += `La contraseña no es valida <br>`
        entrar = true
    };
    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = 'Enviado';
        asyncPostCall();
    }; 

});


