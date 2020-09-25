
cardSelecionado;
contadorAcertos;
qtdPerguntas;
fimQuiz;

function avaliarNivel(){
    var tituloNivel=0, descricao=0, linkImagem=0;
    var percentual = parseInt(((contadorAcertos/qtdPerguntas)*100).toFixed(0));
    for(var i=0; i<cardSelecionado.data.niveis.length; i++){
        var min = cardSelecionado.data.niveis[i].min;
        var max = cardSelecionado.data.niveis[i].max;
        if (percentual >= min){
            if(percentual <= max){
                tituloNivel = cardSelecionado.data.niveis[i].tituloNivel;
                descricao = cardSelecionado.data.niveis[i].descricao;
                linkImagem = cardSelecionado.data.niveis[i].linkImagem;
            }
            
        }
       
    }
    criarEstrutura(tituloNivel, descricao, linkImagem, percentual);
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