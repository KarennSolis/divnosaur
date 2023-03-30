user = document.getElementById("user");
email = document.getElementById('Correo');
password = document.getElementById('Contrasena');
form = document.getElementById('form');
parrafo = document.getElementById('warnings');


form.addEventListener('submit', (e) =>{
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

