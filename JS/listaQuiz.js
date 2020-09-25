var listagemDeQuiz = listagemQuiz.querySelector(".listaDeQuiz");
var listaDeQuizzes = ["Novo Quiz"];
var retornoServidor = {};

function atualizarLista(){
    var requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes", {headers: {'User-token': token}});
    requisicao.then(tratarResposta);
    requisicao.catch(tratarErro);
}
function tratarResposta(resposta){
    retornoServidor = resposta;
    listagemDeQuiz.innerHTML = "";
    console.log("Deu bom");
    console.log(resposta);
    if (resposta.data.length === 0){
        var li = document.createElement("li");
        li.setAttribute("Onclick", "criarQuiz()");
        li.innerHTML = "Novo Quizz";
        listagemDeQuiz.appendChild(li);
    }
    else if (resposta.data.length !== 0){
        var qtdDeQuizzes = resposta.data.length;
        var li = document.createElement("li");
        li.setAttribute("Onclick", "criarQuiz()");
        li.innerHTML = listaDeQuizzes[0];
        listagemDeQuiz.appendChild(li);
        for (i=0; i<qtdDeQuizzes; i++){
            listaDeQuizzes.push(resposta.data[i].title);
            var li = document.createElement("li");
            li.setAttribute("Onclick", "exibirQuiz(this)");
            var ide = resposta.data[i].id;
            console.log(ide);
            li.id = ide; 
            li.innerHTML = listaDeQuizzes[i+1];
            listagemDeQuiz.appendChild(li);
        }
    }
}
function tratarErro(resposta){
    console.log("Deu ruim");
    console.log(resposta);
}
function criarQuiz(){
    console.log("Chegou em criar Quiz");
    listagemQuiz.style.display = "none";
    criacaoQuiz.style.display = "flex";
    layoutPergunta();
    layoutNivel();
}




{/* <ul class="listaDeQuiz">
    <li onclick="criarQuiz">Novo Quizz</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
    <li>O quão poterhead você é</li>
</ul> */}