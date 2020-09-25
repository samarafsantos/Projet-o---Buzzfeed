var contadorPergunta = 1;
var contadorNivel = 1
var quizOBJ = {
    title:"", 
    data: {
        perguntas:[{
            tituloPergunta: "",
            respostas: [{texto: "",imagem:"",}],
            respostaCerta: ""
        }],
        niveis: [{
            min:"",
            max:"",
            tituloNivel:"",
            linkImagem:"",
            descricao:""
        }]
    }
};

function layoutPergunta(){
    var perguntas = criacaoQuiz.querySelector(".perguntas");
    var pergunta = document.createElement("div");
    pergunta.setAttribute("class", "pergunta");

    var h1 = document.createElement("h1");
    h1.innerHTML = "Pergunta "+contadorPergunta;
    var input = document.createElement("input");
    input.setAttribute("placeholder", "Digite a pergunta");
    var div = document.createElement("div");

    var divResposta = document.createElement("div");
    divResposta.setAttribute("class", "respostas");
    var inputResposta1 = document.createElement("input");
    inputResposta1.setAttribute("placeholder", "Digite a resposta correta");
    var inputResposta2 = document.createElement("input");
    inputResposta2.setAttribute("placeholder", "Digite a resposta errada 1");
    var inputResposta3 = document.createElement("input");
    inputResposta3.setAttribute("placeholder", "Digite a resposta errada 2");
    var inputResposta4 = document.createElement("input");
    inputResposta4.setAttribute("placeholder", "Digite a resposta errada 3");

    var divLink = document.createElement("div");
    divLink.setAttribute("class", "links");
    var inputLink1 = document.createElement("input");
    inputLink1.setAttribute("placeholder", "Link pra imagem correta");
    var inputLink2 = document.createElement("input");
    inputLink2.setAttribute("placeholder", "Link para imagem errada 1");
    var inputLink3 = document.createElement("input");
    inputLink3.setAttribute("placeholder", "Link para imagem errada 2");
    var inputLink4 = document.createElement("input");
    inputLink4.setAttribute("placeholder", "Link para imagem errada 3");

    perguntas.appendChild(pergunta);

    pergunta.appendChild(h1);
    pergunta.appendChild(input);
    pergunta.appendChild(div);

    div.appendChild(divResposta);
    div.appendChild(divLink);

    divResposta.appendChild(inputResposta1);
    divResposta.appendChild(inputResposta2);
    divResposta.appendChild(inputResposta3);
    divResposta.appendChild(inputResposta4);

    divLink.appendChild(inputLink1);
    divLink.appendChild(inputLink2);
    divLink.appendChild(inputLink3);
    divLink.appendChild(inputLink4);
    contadorPergunta ++;
}

function layoutNivel(){
    var niveis = criacaoQuiz.querySelector(".niveis");

    var div = document.createElement("div");
    div.setAttribute("class", "nivel");

    var titulo = document.createElement("h1");
    titulo.innerHTML = "Nível "+contadorNivel;

    var span = document.createElement("span");
    span.setAttribute("class", "percentual");

    var inputMinimo = document.createElement("input");
    inputMinimo.setAttribute("placeholder", "% Mínima de Acerto do nível");
    var inputMaximo = document.createElement("input");
    inputMaximo.setAttribute("placeholder", "% Máxima de Acerto do nível");
    var inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("placeholder", "Título do nível");
    var inputImagem = document.createElement("input");
    inputImagem.setAttribute("placeholder", "Link da imagem do nível");
    var inputDescricao = document.createElement("input");
    inputDescricao.setAttribute("placeholder", "Descrição do nível");

    niveis.appendChild(div);

    div.appendChild(titulo);
    div.appendChild(span);
    span.appendChild(inputMinimo);
    span.appendChild(inputMaximo);
    div.appendChild(inputTitulo);
    div.appendChild(inputImagem);
    div.appendChild(inputDescricao);

    contadorNivel++;
}

function montarOBJ(){
    montarOBJPerguntas();
    montarOBJNiveis();
    validar();
}

function montarOBJPerguntas(){
    var titulo = criacaoQuiz.querySelector("input").value;
    quizOBJ.title = titulo;
    var containerPerguntas = criacaoQuiz.querySelector(".perguntas");
    var listaPerguntas = containerPerguntas.querySelectorAll(".pergunta");
    for(i=0; i<listaPerguntas.length; i++){
        var inputPergunta = listaPerguntas[i].children[1].value;
        if(quizOBJ.data.perguntas[i] === undefined){
            quizOBJ.data.perguntas[i] = {};
        }
        quizOBJ.data.perguntas[i].tituloPergunta = inputPergunta;
        for(j=0; j<4; j++){
            var inputRespostaTexto = listaPerguntas[i].children[2].children[0].children[j].value;
            var inputRespostaImagem = listaPerguntas[i].children[2].children[1].children[j].value;
            if(quizOBJ.data.perguntas[i].respostas == undefined){
                quizOBJ.data.perguntas[i].respostas = [];
            }
            if(quizOBJ.data.perguntas[i].respostas[j] == undefined){
                quizOBJ.data.perguntas[i].respostas[j] = {}
            }
            quizOBJ.data.perguntas[i].respostas[j].texto = inputRespostaTexto;
            quizOBJ.data.perguntas[i].respostas[j].imagem = inputRespostaImagem;
        }
        quizOBJ.data.perguntas[i].respostaCerta = listaPerguntas[i].children[2].children[0].children[0].value;
    }
}

function montarOBJNiveis(){
    var containerNiveis = criacaoQuiz.querySelector(".niveis");
    var listaNiveis = containerNiveis.querySelectorAll(".nivel");
    for(i=0; i<listaNiveis.length; i++){
        var tituloNivel = listaNiveis[i].children[2].value;
        
        var linkNivel = listaNiveis[i].children[3].value;
        var descricaoNivel = listaNiveis[i].children[4].value;
        var minNivel = listaNiveis[i].children[1].children[0].value;
        var maxNivel = listaNiveis[i].children[1].children[1].value;

        if(quizOBJ.data.niveis[i] === undefined){
            quizOBJ.data.niveis[i] = {};
        }
        quizOBJ.data.niveis[i].min = minNivel;
        quizOBJ.data.niveis[i].max = maxNivel;

        quizOBJ.data.niveis[i].tituloNivel = tituloNivel;
        quizOBJ.data.niveis[i].linkImagem = linkNivel;
        quizOBJ.data.niveis[i].descricao = descricaoNivel;
    }
}

function validar(){
    validaTitulo();
    validaPerguntas();
    validaRespostas();
    validaNiveis();
    publicar();
}

function validaTitulo(){
    var frase = quizOBJ.title;
    var maiuscula = frase.charAt(0).toUpperCase(); 
    var divide = frase.substring(1, frase.length);
    var concate = maiuscula.concat(divide);
    concate.trim();
    concate = concate.replace(/\s+/g, " ");
    quizOBJ.title = concate;
}

function validaPerguntas(){
    var qtdPerguntas = quizOBJ.data.perguntas.length;
    for (var i=0; i<qtdPerguntas; i++){
        var pergunta = quizOBJ.data.perguntas[i].tituloPergunta;
        var maiuscula = pergunta.charAt(0).toUpperCase(); 
        var divide = pergunta.substring(1, pergunta.length);
        var concate = maiuscula.concat(divide);
        concate.trim();
        concate = concate.replace(/\s+/g, " ");
        var index1 = concate.indexOf("?");
        var index2 = concate.lastIndexOf("?");
        if(index1 !== index2){
            alert("Por favor, corrija a quantidade de interrogações nas perguntas.");
        }
        quizOBJ.data.perguntas[i].tituloPergunta = concate;
    }
}

function validaRespostas(){
    var qtdPerguntas = quizOBJ.data.perguntas.length;
    for (var i=0; i<qtdPerguntas; i++){
        for (j=0; j<4; j++){
            var resposta = quizOBJ.data.perguntas[i].respostas[j].texto;
            var maiuscula = resposta.charAt(0).toUpperCase(); 
            var divide = resposta.substring(1, resposta.length);
            var concate = maiuscula.concat(divide);
            concate.trim();
            concate = concate.replace(/\s+/g, " ");
            quizOBJ.data.perguntas[i].respostas[j].texto = concate;

            var respostaCorreta = quizOBJ.data.perguntas[i].respostaCerta;
            maiuscula = respostaCorreta.charAt(0).toUpperCase(); 
            divide = respostaCorreta.substring(1, respostaCorreta.length);
            concate = maiuscula.concat(divide);
            concate.trim();
            concate = concate.replace(/\s+/g, " ");
            quizOBJ.data.perguntas[i].respostaCerta = concate;
        }
    }
    
}

function validaNiveis(){
    var qtdNiveis = quizOBJ.data.niveis.length;
    for (var i=0; i<qtdNiveis; i++){
        var tituloDoNivel = quizOBJ.data.niveis[i].tituloNivel;
        var maiuscula = tituloDoNivel.charAt(0).toUpperCase(); 
        var divide = tituloDoNivel.substring(1, tituloDoNivel.length);
        var concate = maiuscula.concat(divide);
        concate.trim();
        concate = concate.replace(/\s+/g, " ");
        quizOBJ.data.niveis[i].tituloNivel = concate;

        var descricaoNivel = quizOBJ.data.niveis[i].descricao;
        maiuscula = descricaoNivel.charAt(0).toUpperCase(); 
        divide = descricaoNivel.substring(1, descricaoNivel.length);
        concate = maiuscula.concat(divide);
        concate.trim();
        concate = concate.replace(/\s+/g, " ");
        quizOBJ.data.niveis[i].descricao = concate;
    }
}

function publicar(){
    var requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes", quizOBJ, {headers: {'User-token': token}})
    requisicao.then(mudarTela);
}

function mudarTela(){
    listagemQuiz.style.display = "block";
    criacaoQuiz.style.display = "none";
    atualizarLista();
}