//Arrays de imagens

var imagens = [
    "./imgs/aguaviva.png",
    "./imgs/aguia.png",
    "./imgs/avestruz.png",
    "./imgs/baleia.png",
    "./imgs/cabra.png",
    "./imgs/cachorro.png",
    "./imgs/camelo.png",
    "./imgs/canguru.png",
    "./imgs/carangueijo.png",
    "./imgs/cavalo.png",
    "./imgs/chimpanze.png",
    "./imgs/cisne.png",
    "./imgs/coala.png",
    "./imgs/cobra.png",
    "./imgs/coelho.png",
    "./imgs/coruja.png",
    "./imgs/crocodilo.png",
    "./imgs/elefante.png",
    "./imgs/esquilo.png",
    "./imgs/flamingo.png",
    "./imgs/gaivota.png",
    "./imgs/ganso.png",
    "./imgs/girafa.png",
    "./imgs/golfinho.png",
    "./imgs/gorila.png",
    "./imgs/guaxinim.png",
    "./imgs/hipopotamo.png",
    "./imgs/leao.png",
    "./imgs/leopardo.png",
    "./imgs/lobo.png",
    "./imgs/macaco.png",
    "./imgs/morcego.png",
    "./imgs/ovelha.png",
    "./imgs/panda.png",
    "./imgs/pardal.png",
    "./imgs/pavao.png",
    "./imgs/pinguim.png",
    "./imgs/polvo.png",
    "./imgs/pombo.png",
    "./imgs/porco.png",
    "./imgs/raposa.png",
    "./imgs/rato.png",
    "./imgs/rena.png",
    "./imgs/sapo.png",
    "./imgs/tigre.png",
    "./imgs/toupeira.png",
    "./imgs/tubarao.png",
    "./imgs/urso.png",
    "./imgs/vaca.png",
    "./imgs/veado.png",
    "./imgs/zebra.png"];

var nomes = [
    "Água-viva",
    "Águia",
    "Avestruz",
    "Baleia",
    "Cabra",
    "Cachorro",
    "Camelo",
    "Canguru",
    "Carangueijo",
    "Cavalo",
    "Chimpanzé",
    "Cisne",
    "Coala",
    "Cobra",
    "Coelho",
    "Coruja",
    "Crocodilo",
    "Elefante",
    "Esquilo",
    "Flamingo",
    "Gaivota",
    "Ganso",
    "Girafa",
    "Golfinho",
    "Gorila",
    "Guaxinim",
    "Hipopótamo",
    "Leão",
    "Leopardo",
    "Lobo",
    "Macaco",
    "Morcego",
    "Ovelha",
    "Panda",
    "Pardal",
    "Pavão",
    "Pinguim",
    "Polvo",
    "Pombo",
    "Porco",
    "Raposa",
    "Rato",
    "Rena",
    "Sapo",
    "Tigre",
    "Toupeira",
    "Tubarão",
    "Urso",
    "Vaca",
    "Veado",
    "Zebra"]
var nome = '';





//Elementos do código

var timer = 100;
var pontuacao = 0;
var randPicker = 0;

//Elementos da DOM
var acertos = document.querySelector('.listaacertos');
var erros = document.querySelector('.listaerros');
var acertou = document.querySelector('.acertou');
var errou = document.querySelector('.errou');
var timerdom = document.querySelector('.timer');
var pontos = document.querySelector('#pontosnumero');
var animal = document.querySelector('.divdaimage');
var nomeanimal = document.querySelector('.nomeanimal');


//Event Listener

acertou.addEventListener('click',funAcertou);
errou.addEventListener('click',funErrou);


//Funções
c = backgroundimager();
animal.setAttribute("style",c);


var timerID = setInterval(timerreduz,1000);


function timerreduz(){
    if(timer>0){
    timer--;
    timerdom.innerHTML=timer;} else
    {alert("ACABOU O TEMPOOOOOOO");
    clearInterval(timerID);
}
}


function funAcertou() {
    pontuacao+=100;
    pontos.innerHTML=pontuacao;

    var newLi = document.createElement("li");
    newLi.innerHTML=nome;    
    acertos.appendChild(newLi);

    c = backgroundimager();
    //Alterando o randPicker
        // Alterando a imagem. Como o setAttribute precisa que os dois argumentos sejam strings, tenho que fabricar as string quase que na mao
    animal.setAttribute("style",c);
    
    

}

function funErrou() {
    pontuacao-=Math.floor(pontuacao*0.17);
    pontos.innerHTML=pontuacao;
    var newLi = document.createElement("li");
    newLi.innerHTML=nome;    
    erros.appendChild(newLi);
    c = backgroundimager();
    //Alterando o randPicker
        // Alterando a imagem. Como o setAttribute precisa que os dois argumentos sejam strings, tenho que fabricar as string quase que na mao
    animal.setAttribute("style",c);
}


function backgroundimager(){
    randPicker = Math.floor(Math.random()*imagens.length);
    var a = imagens[randPicker];
    nome=nomes[randPicker];
    nomeanimal.innerHTML=nome;
    //aqui eu to criando a string
    var b = "background-image: url(" + a + ")"
    return b
}

