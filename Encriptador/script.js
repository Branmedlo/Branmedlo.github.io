const textarea = document.querySelector(".textarea");
const areaEncriptada = document.querySelector(".area-encriptada");

function btnEncriptar() {
    const textoEncriptado = Encriptar(textarea.value);
    areaEncriptada.value = textoEncriptado;
}

function Encriptar(stringEcriptado){

    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEcriptado = stringEcriptado.toLowerCase();

    for(let i =0; i < matrizCodigo.length; i++){

        if(stringEcriptado.includes(matrizCodigo[i][0])){

            stringEcriptado = stringEcriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringEcriptado;
} 


function btnDesencriptar() {
    const textoEncriptado = Desencriptar(textarea.value);
    areaEncriptada.value = textoEncriptado;
}

function Desencriptar(desencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    desencriptado = desencriptado.toLowerCase();
    
   
    for(let i =0; i < matrizCodigo.length; i++){

        if(desencriptado.includes(matrizCodigo[i][1])){

            desencriptado = desencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return desencriptado;



}