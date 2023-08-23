    function tocaSom (seletorAudio) {
        const elemento = document.querySelector(seletorAudio);
        
        if (elemento != null && elemento.localName === 'audio'){
            console.log(elemento.localName);
            
            elemento.play();
        } else {
            alert('Tem nada aqui meu(minha) bom(boa) digita certo aew');
        }

    }
    
    const listaDeTeclas = document.querySelectorAll('.tecla');

    
    for(let i = 0; i < listaDeTeclas.length; i++) {
        
        const tecla = listaDeTeclas[i]; 
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;
    
        tecla.onclick = function () {
            tocaSom(idAudio)
        }

        tecla.onkeydown = function(e) {
            if (e.code === 'Space' || e.code === 'Enter'){
                tecla.classList.add('ativa'); 
            }
        }

        tecla.onkeyup = function() {
            tecla.classList.remove('ativa'); 
        }
    } 
