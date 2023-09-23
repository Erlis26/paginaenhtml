const formulario = document.getElementById('formularios'); //acceder a los elementos de los formulario
const inputs = document.querySelectorAll('#formularios input'); // acceder a los elemrntos de los selectores de los formulario

const validacion = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // validacion de usario, puede llevar numero ,guiones y guion bajo
    nombre: /^[a-zA-Z-\s]{4,16}$/, // validacion de nombre, letras espacios pueden llevar acentos
    clave: /^[0-9]{4,16}$/, // validacion de contraseña de 4 a 12 digitos
    coreo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-z0-9-.]+$/, // validacion de coreo electronico
    telefono: /^\d{7,14}$/, //validacion de telefono.
}
const campos = {
    usuario: false,
    nombre: false,
    clave: false,
    coreo: false,
    telefono: false

}
const vadaciondeformulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (validacion.usuario.test(e.target.value)) {
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['usuario'] = true
            } else {
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['usuario'] = false

            }
            break
        case "nombre":
            if (validacion.nombre.test(e.target.value)) {
                document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['nombre'] = true;
            } else {
                document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['nombre'] = false;
            }
            break
        case "clave":
            probandolaclave()
            if (validacion.clave.test(e.target.value)) {
                document.getElementById('grupo__clave').classList.remove('formulario__grupo-incorrecto');
                document.querySelector('#grupo__clave .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['clave'] = true;
            } else {
                document.getElementById('grupo__clave').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__clave .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['clave'] = false;
            }
            break
        case "clave2":
            probandolaclave()
            if (validacion.clave2.test(e.target.value)) {
                document.getElementById('grupo__clave2').classList.remove('formulario__grupo-incorrecto');
                document.querySelector('#grupo__clave2 .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['clave'] = false;
            } else {
                document.getElementById('grupo__clave2').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__clave2 .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['clave'] = true;
            }
            break
        case "coreo":
            if (validacion.coreo.test(e.target.value)) {
                document.getElementById('grupo__coreo').classList.remove('formulario__grupo-incorrecto');
                document.querySelector('#grupo__coreo .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['coreo'] = true
            } else {
                document.getElementById('grupo__coreo').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__coreo .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['coreo'] = false
            }
            break
        case "telefono":
            if (validacion.telefono.test(e.target.value)) {
                document.getElementById('grupo__telefono').classList.remove('formulario__grupo-incorrecto');
                document.querySelector('#grupo__telefono .formulario__input-error').classList.remove('formulario__input-error-activo');
                campos['telefono'] = true
            } else {
                document.getElementById('grupo__telefono').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__telefono .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['telefono'] = false
            }
            break
    }

}

inputs.forEach((input) => {

    input.addEventListener('keyup', vadaciondeformulario);
    input.addEventListener('blur', vadaciondeformulario);

});


formulario.addEventListener('submit', (e) => { //una funcion para comprobar el formulario
    e.preventDefault();
    const terminos = document.getElementById('terminos')
    if (campos.usuario && campos.nombre && campos.clave && campos.coreo && campos.telefono && terminos.checked) {
        formulario.reset();
        document.getElementById('formulario__mensage--exito').classList.add('formulario__mensage--exito-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensage--exito').classList.remove('formulario__mensage--exito-activo')

        }, 6000)
    } else {
        document.getElementById('formulario__mensage').classList.add('formulaario__mensage-activo')
    }

});

const probandolaclave = () => {
    const clave1 = document.getElementById('clave')
    const clave02 = document.getElementById('clave2')
    if (clave1.value !== clave02.value) {
        document.getElementById('grupo__clave2').classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__clave2 .formulario__input-error').classList.add('formulario__input-error-activo');
    } else {
        document.getElementById('grupo__clave2').classList.remove('formulario__grupo-incorrecto');
        document.querySelector('#grupo__clave2 .formulario__input-error').classList.remove('formulario__input-error-activo');
    }


}

function enviarmensage() {
    var chav = document.getElementById('chat').value;
    document.getElementById('conversacion').innerHTML = chav;

}

/*const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})*/