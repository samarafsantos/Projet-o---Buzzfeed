var quiz = listagemQuiz.querySelector(".listaDeQuiz");
var listaDeQuizzes = [];

function atualizarLista(){
    var requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes", {headers: {'User-token': token}});
    requisicao.then(tratarResposta);
    requisicao.catch(tratarErro);
}
function tratarResposta(resposta){
    console.log("Deu bom");
    console.log(resposta);
    if(resposta.data.length === 0){
        var li = document.createElement("li");
        li.setAttribute("Onclick", "criarQuiz()");
        li.innerHTML = "Novo Quizz";
        quiz.appendChild(li);
    }
    else{
        //Colocar aqui o for para chamar a função de renderização dos quizzes (qnd existirem)
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