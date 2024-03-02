function validacion(){

    let validar = document.getElementById('entrada-texto').value;
    console.log(validar);
    const expresionRegular = /^[a-z\s]+$/; /*
        ^: Representa el inicio de la cadena.
        [a-z]: Acepta cualquier letra minúscula.
        \s: Acepta espacios en blanco.
        +: Acepta una o más ocurrencias de los caracteres anteriores.
        $: Representa el final de la cadena.*/
    return expresionRegular.test(validar); // si la expresión cumple retorna un true

}

function encriptarTexto () {
    validacion();
    console.log(validacion());
    if(validacion() == true){
        let textoEncriptado = document.getElementById('entrada-texto').value
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat"); // la /a/ representa la coincidencia que se busca, g indica que la busqueda sea global y no se detenga en la primer coincidencia, y ai es lo que queremos reemplazar
        console.log(textoEncriptado);   
        let textArea = document.getElementById('salida-texto');
        textArea.innerHTML = textoEncriptado;
        return textoEncriptado;
    }else{
        alert('[ERROR]: Por favor ingrese un texto con las condiciones indicadas');
        return null;
    }


}

function desencriptarTexto() {
    validacion();
    if (validacion() == true) {
        let textoDesencriptado = document.getElementById('entrada-texto').value
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        console.log(textoDesencriptado);
        let textArea = document.getElementById('salida-texto');
        textArea.innerHTML = textoDesencriptado;
        return textoDesencriptado;
        
    }else{
        alert('[ERROR]: Por favor ingrese un texto con las condiciones indicadas');
        return null;
    }

}

function copiar() {
    let portaPapeles = document.getElementById('salida-texto').value;
    navigator.clipboard.writeText(portaPapeles);// este comando te permite copiar en el portapapeles
}