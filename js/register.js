let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
     e.preventDefault();
     let formulario = e.target;

     if(formulario.children[0].value === "user" && formulario.children[1].value === "pass"){
        alert("Sesión iniciada correctamente");
     } else {
        alert("Credenciales inválidas");
     };
     formulario.children[0].value = "";
     formulario.children[1].value = "";
 };