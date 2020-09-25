quiz = document.querySelector(".quiz");
var arrayObj = [];
var arrayEmbaralhada = [];
var cardSelecionado = {};
var respCerta;
var contadorAcertos = 0;
var qtdPerguntas=0;
var contador=0;

function exibirQuiz(elemento){
    listagemQuiz.style.display = "none";
    quiz.style.display = "flex";
    var idSelecionado = elemento.id;
    
    for(var i = 0; i < retornoServidor.data.length; i++){
        if(retornoServidor.data[i].id == idSelecionado){
            cardSelecionado = retornoServidor.data[i];
            renderizarPerguntas(cardSelecionado);
        }
    }
}

function renderizarPerguntas(cardSelecionado){
    for(var j = 0; j < 4; j++){
        arrayObj[j] = cardSelecionado.data.perguntas[contador].respostas[j];
    }
    arrayEmbaralhada = arrayObj.sort(comparador);
    respCerta = cardSelecionado.data.perguntas[contador].respostaCerta;
    
    var tituloDoQuiz = document.createElement("h1");
    tituloDoQuiz.id = "titulo "+contador;
    if(contador !== 0){
        var contadorAnterior = contador-1;
        var anterior = document.getElementById("titulo "+contadorAnterior);
        anterior.style.display = "none";
    }

    tituloDoQuiz.innerHTML = cardSelecionado.title;
    

    var divPergunta = document.createElement("div");
    divPergunta.setAttribute("class", "pergunta");
    divPergunta.innerHTML = "1. "+cardSelecionado.data.perguntas[contador].tituloPergunta;
    divPergunta.id = "Pergunta "+contador;
    if(contador !== 0){
        var contadorAnterior = contador-1;
        var anterior = document.getElementById("Pergunta "+contadorAnterior);
        anterior.style.display = "none";
    }


    var divContainer = document.createElement("div");
    divContainer.setAttribute("class", "container");
    if(contador === 0){
        divContainer.id = contador;
        divContainer.style.display = "flex";
    }
    else{
        var anterior = document.getElementById(contador-1);
        anterior.style.display = "none";
        divContainer.id = contador;
        divContainer.style.display = "flex";
    }

    var divResposta1 = document.createElement("div");
    divResposta1.setAttribute("class", "op normal");
    divResposta1.setAttribute("onclick", "validarResposta(this)");
    var divResposta2 = document.createElement("div");
    divResposta2.setAttribute("class", "op normal");
    divResposta2.setAttribute("onclick", "validarResposta(this)");
    var divResposta3 = document.createElement("div");
    divResposta3.setAttribute("class", "op normal");
    divResposta3.setAttribute("onclick", "validarResposta(this)");
    var divResposta4 = document.createElement("div");
    divResposta4.setAttribute("class", "op normal");
    divResposta4.setAttribute("onclick", "validarResposta(this)");

    var img1 = document.createElement("img");
    var p1 = document.createElement("p");
    img1.src = arrayEmbaralhada[0].imagem;
    p1.innerHTML = arrayEmbaralhada[0].texto;

    var img2 = document.createElement("img");
    var p2 = document.createElement("p");
    img2.src = arrayEmbaralhada[1].imagem;
    p2.innerHTML = arrayEmbaralhada[1].texto;

    var img3 = document.createElement("img");
    var p3 = document.createElement("p");
    img3.src = arrayEmbaralhada[2].imagem;
    p3.innerHTML = arrayEmbaralhada[2].texto;

    var img4 = document.createElement("img");
    var p4 = document.createElement("p");
    img4.src = arrayEmbaralhada[3].imagem;
    p4.innerHTML = arrayEmbaralhada[3].texto;

    quiz.appendChild(tituloDoQuiz);
    quiz.appendChild(divPergunta);
    quiz.appendChild(divContainer);

    divContainer.appendChild(divResposta1);
    divContainer.appendChild(divResposta2);
    divContainer.appendChild(divResposta3);
    divContainer.appendChild(divResposta4);

    
    divResposta1.appendChild(img1);
    divResposta1.appendChild(p1);
    divResposta2.appendChild(img2);
    divResposta2.appendChild(p2);
    divResposta3.appendChild(img3);
    divResposta3.appendChild(p3);
    divResposta4.appendChild(img4);
    divResposta4.appendChild(p4);
}

function validarResposta(elemento){
    var container = elemento.parentNode;
    var lista = container.querySelectorAll("p");
    if(elemento.innerText === respCerta){
        elemento.classList.remove("normal");
        elemento.classList.add("certo");
        contadorAcertos++;
    }
    for(var i = 0; i < 4;i++){
        if(lista[i].innerText === respCerta){
            var correcao = lista[i].parentNode;
            correcao.classList.remove("normal");
            correcao.classList.add("certo");
        }
        else{
            var correcao = lista[i].parentNode;
            correcao.classList.remove("normal");
            correcao.classList.add("errado");
        }
    }
    contador++;
    qtdPerguntas = cardSelecionado.data.perguntas.length;
    if(contador === qtdPerguntas){
        quiz.style.display = "none";
        fimQuiz.style.display = "flex";
        setTimeout(avaliarNivel(), 2000);
    }
    else{
        setTimeout(renderizarPerguntas.bind(null, cardSelecionado), 2000);
    }
}

function comparador() { 
    return Math.random() - 0.5; 
  }
