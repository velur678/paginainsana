document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulación de credenciales correctas
    const validUsername = "TRABAJO" ;
    const validPassword = "PAGINAS";


    
    if (username === validUsername && password === validPassword) {
        alert("Inicio de sesión exitoso");
        window.location.href = "galeria.html";
        // Aquí podrías redirigir a otra página, por ejemplo:
        // window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});