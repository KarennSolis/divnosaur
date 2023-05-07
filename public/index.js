const parrafo = document.getElementById('warnings');

/* const asyncPostCall = async (email, password) => {
	try {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});
		const data = await response.json();
		const { result, message } = data;

		if (result) {
			alert(message)
		} else {
			console.log(data.result)
			parrafo.innerHTML = 'Usuario logueado con éxito';
			localStorage.setItem('user_id', data.result);
			window.location.href = "/public/inicio.html"
		}

	} catch (error) {
		console.error('Error al enviar la solicitud: ', error)
	}
} */

const asyncPostCall = async (email, password) => {
	try {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});
		const data = await response.json();
		const { result, message } = data;
		console.log(result)
		console.log(data)

		if (!result) {
			alert(message)
		} else {
			alert(message)
			console.log(result)
			parrafo.innerHTML = 'Usuario logueado con éxito';
			/* localStorage.setItem('user_id', result); */
			localStorage.setItem('user_id', result['user_id']);
			window.location.href = "/public/inicio.html"
		}

	} catch (error) {
		console.error('Error al enviar la solicitud: ', error)
	}
}


//Actualizacion//
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const password = document.getElementById('exampleInputPassword1').value;
	const email = document.getElementById('exampleInputEmail1').value;

	form.reset();

	let warnings = "";
	let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let entrar = false;
	parrafo.innerHTML = '';

	if (!expRegEmail.test(email)) {
		warnings += ` El correo no es valido.`
		entrar = true
	};
	if (password.length < 8) {
		warnings += ` La contraseña no es valida.`
		entrar = true
	};
	if (entrar) {
		parrafo.innerHTML = warnings
	} else {
		asyncPostCall(email, password);
	};

});


