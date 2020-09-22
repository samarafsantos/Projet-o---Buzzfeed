var contadorPergunta = 1;
var contadorNivel = 1
var quizOBJ = {
    "title": "Título do meu quizz",
    "data": {
        "perguntas": [{
            "titulo": "Pergunta 1?",
            "pergunta": "pergunta",
            "respostas": ["1", "2", "3", "4"],
            "links": ["", "", "",""]
        }],
        "níveis": [{
            "nível": "Nível x",
            "mínimo": "x",
            "máximo": "y",
            "título": "titulo",
            "imagem": "imagem",
            "descrição": "descrição"
        }]
    }
}
var listaPerguntas = {
    Número:
    Pergunta:
    Respostas: [];
    Links: []; 
}
var h1;


function layoutPergunta(){
    var perguntas = criacaoQuiz.querySelector(".perguntas");
    var pergunta = document.createElement("div")
    pergunta.setAttribute("class", "pergunta");

    h1 = document.createElement("h1");
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
function publicar(){
    console.log(h1.innerText);
    // for(var i=0; i<contadorPergunta; i++){

    // }
    var titulo = criacaoQuiz.querySelector("input").value;
    console.log(titulo);

}



// <div class="nivel">
//     <h1>Nível 1</h1>
//     <span class="percentual">
//         <input type="text" placeholder="% Mínima de Acerto do nível">
//         <input type="text" placeholder="% Máxima de Acerto do nível">
//     </span>
//     <input type="text" placeholder="Título do nível">
//     <input type="text" placeholder="Link da imagem do nível">
//     <input type="text" placeholder="Descrição do nível">
// </div>