var telaLogin = document.querySelector(".telaLogin");
var listagemQuiz = document.querySelector(".listagemGeralQuiz");
var criacaoQuiz = document.querySelector(".criacaoQuiz");
var quiz = document.querySelector(".quiz");
var fimQuiz = document.querySelector(".fimQuiz");
var token;
cadastro = {
    email: "",
    password: ""
}
function processarEnter(e, elemento){
    if (e.keyCode == 13) {
        verificarEntrada(elemento);
        return false;
    }
}

function verificarEntrada(elemento){
    var pai = elemento.parentNode;
    var email = pai.querySelector(".email");
    var senha = pai.querySelector(".senha");
    if (email.value==="" || senha.value===""){
        alert("Por favor, preencha os campos");
    }
    else{
        cadastro.email = email.value;
        cadastro.password = senha.value;
        console.log(cadastro);
        elemento.disabled = true;
        elemento.style.cursor = "progress";
        var requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/users", cadastro);
        requisicao.then(sucesso);
        requisicao.catch(falha);
    }
}
function sucesso(resposta){
    token = resposta.data.token;
    telaLogin.style.display = "none";
    listagemQuiz.style.display = "block";
    setTimeout(atualizarLista, 1000);
}
function falha(resposta){
    alert("E-mail ou senha incorretos.");
}

