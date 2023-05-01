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
            const { result, message } = data;

            if (result) {
                alert(message)
            } else {
                alert(message)
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
