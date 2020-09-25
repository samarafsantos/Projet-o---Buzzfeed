
cardSelecionado;
contadorAcertos;
qtdPerguntas;
fimQuiz;

function avaliarNivel(){
    var tituloNivel=0, descricao=0, linkImagem=0;
    var percentual = parseInt(((contadorAcertos/qtdPerguntas)*100).toFixed(0));
    for(var i=0; i<cardSelecionado.data.niveis.length; i++){
        console.log(percentual);
        var min = cardSelecionado.data.niveis[i].min;
        var max = cardSelecionado.data.niveis[i].max;
        console.log(cardSelecionado);
        if (percentual >= min){
            console.log("entrou no 1 if");
            if(percentual <= max){
                console.log("entrou no 2 if");
                tituloNivel = cardSelecionado.data.niveis[i].tituloNivel;
                descricao = cardSelecionado.data.niveis[i].descricao;
                linkImagem = cardSelecionado.data.niveis[i].linkImagem;
            }
            
        }
       
    }
    console.log(tituloNivel);
    console.log(descricao);
    console.log(linkImagem);
    criarEstrutura(tituloNivel, descricao, linkImagem, percentual);
    console.log
}
function criarEstrutura(tituloNivel, descricao, linkImagem, percentual){
    var h1 = document.createElement("h1");
    h1.innerHTML = cardSelecionado.title;
    var divContainer = document.createElement("div");
    divContainer.setAttribute("class", "container");
    
    var divAcertos = document.createElement("div");
    divAcertos.setAttribute("class", "acertos");

    var pTitulo = document.createElement("p");
    pTitulo.innerHTML = "Você acertou "+contadorAcertos+" de "+qtdPerguntas+" perguntas!";
    var pScore = document.createElement("p");
    pScore.innerHTML = "Score: "+percentual+"%";

    var span = document.createElement("span");
    var divTexto = document.createElement("div");
    divTexto.setAttribute("class", "textoResultado");
    var h2 = document.createElement("h2");
    h2.innerHTML = tituloNivel;
    var pDescricao = document.createElement("p");
    pDescricao.innerHTML = descricao;

    var divImagem = document.createElement("div");
    divImagem.setAttribute("class", "imagem");
    var imagem = document.createElement("img");
    imagem.src = linkImagem;

    fimQuiz.appendChild(h1);
    fimQuiz.appendChild(divContainer);

    divContainer.appendChild(divAcertos);
    divContainer.appendChild(span);

    divAcertos.appendChild(pTitulo);
    divAcertos.appendChild(pScore);

    span.appendChild(divTexto);
    span.appendChild(divImagem);

    divTexto.appendChild(h2);
    divTexto.appendChild(pDescricao);

    divImagem.appendChild(imagem);
}

// <h1>BLA BLA BLA BLA</h1>
// <div class="container">
//     <div class="acertos">
//         <p>Você acertou tanto de tantas perguntas!</p>
//         <p>Score: x%</p>
//     </div>
//     <span>
//         <div class="textoResultado">
//             <h2>Você é praticamente tananananana</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam at incidunt voluptate quae illum optio, laborum illo voluptatem similique ullam molestiae vero iure cupiditate provident, eveniet in, fugiat quos?</p>
//         </div>
//         <div class="imagem">
//             <img src="https://images.unsplash.com/photo-1551499779-ee50f1aa4d25?ixlib=rb-1.2.1&w=1000&q=80" alt="">
//         </div>
//     </span>
// </div>