const encriptador = document.getElementById("Encriptador")
const desencriptador = document.querySelector("#Desencriptador")
// Botones
const btnEncriptar = document.querySelector("#Encriptar")
const btnDesencriptar = document.getElementById("Desencriptar")
const btnCopiar = document.getElementById("Copiar")

btnCopiar.style.display = 'none'

// Funcion para prevenir que se ingresen mayusculas, palabras asentuadas o caracteres especiales
function textCorrrect(texto){
	return  texto.value.toLowerCase().replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[íìî]/g, 'i').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u');
}

encriptador.addEventListener("keyup", ()=>{
	encriptador.value = textCorrrect(encriptador);
})


/*Funcion Encriptar*/

const encriptar = (texto) => {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                encriptado += 'enter';
                break;
            case 'i':
                encriptado += 'imes';
                break;
            case 'a':
                encriptado += 'ai';
                break;
            case 'o':
                encriptado += 'ober';
                break;
            case 'u':
                encriptado += 'ufat';
                break;
            default:
                encriptado += texto[i];
                break;
        }
    }
	return encriptado;
}

/*Muestra el texto encriptado en pantalla*/

btnEncriptar.addEventListener("click", (e)=>{
	e.preventDefault();

	let texto = document.getElementById("Encriptador").value;
	// desencriptador.innerHTML = encriptar(texto);

    if (texto.length == 0) {
        alert("Ingrese un mensaje")
    } else{
        desencriptador.innerHTML = encriptar(texto)
        btnCopiar.style.display = 'block'
    }
})

// Funcion para desencriptar el texto

function desencriptar(texto) {
    texto = texto.replace(/enter/g, "e");
	texto = texto.replace(/imes/g, "i");
	texto = texto.replace(/ai/g, "a");
	texto = texto.replace(/ober/g, "o");
	texto = texto.replace(/ufat/g, "u");

	return texto;
}

/*Muestra el texto desencriptado en pantalla*/

btnDesencriptar.addEventListener("click", (e)=>{
	e.preventDefault();

	texto = document.getElementById("Encriptador").value;
    if (texto.length == 0) {
        alert("Ingrese un mensaje")
    }else {
        desencriptador.innerHTML = desencriptar(texto);
        btnCopiar.style.display = 'block'
    }
	
})


// Copiar en porta papeles
btnCopiar.addEventListener('click', (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(desencriptador.innerHTML);

	alert("mensaje copiado");
})