function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    if (elemento && elemento.localName == 'audio'){// nao precisa comparar elemento com null, pois o js ja interpreta o codigo assim
        elemento.play();
    }else{
        alert('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const inputTel = document.querySelector('input[type=tel]');

for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];
    console.log()
    //tecla.value = i;
    //template string
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function (){
        tocaSom(idAudio)
        //inputTel.value = inputTel.value + tecla.value; //poderia ser também inputTel.value = inputTel.value + tecla.value;

    }
    tecla.onkeydown = function (evento){
        console.log(evento.code)
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    
}

