document.getElementById("showPass").addEventListener("click", function() {
    var inputPass = document.getElementById("inputPass");
    var showPass = document.getElementById("showPass");

    if (inputPass.type === "password") {
        inputPass.type = "text";
        showPass.innerHTML = "Ocultar Contraseña";
    } else {
        inputPass.type = "password";
        showPass.innerHTML = "Mostrar Contraseña";
    }
});