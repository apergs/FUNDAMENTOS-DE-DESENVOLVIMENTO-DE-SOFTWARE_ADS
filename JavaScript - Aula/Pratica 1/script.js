/* EXERCICIO 1
Crie um bota padrão que altere para a cor verde quando passar
o cursor do mouse em cima.
Quando tirar o botão do mouse o botão deve alterar a cor para azul.
Quando clicado o botão deve alterar a cor para vermelho e
exibir a mensagem "Quebrei".
__________________________________________________________________

let botão = document.querySelector("#botão");
botão.style.background="blue";
let estaQuebrado=false;
let contaCliques=0;
botão.addEventListener("mouseover",e =>{
    if(!estaQuebrado){
        botão.style.background="green";
        botão.style.color="white";  
    }
});

botão.addEventListener("mouseout",e =>{
    if(!estaQuebrado){
        botão.style.background="blue";  
        }
});

botão.addEventListener("click",e =>{

    contaCliques++; //contaCliques=contaCliques+1;

    if(contaCliques>=10){
    botão.style.background="red"; 
    botão.innerHTML="Quebrei"; 
    estaQuebrado=true;
        }
}); 

*/

/*Exercicio 2 e 3
Faça uma calculadora com as quatro operações basicas
____________________________________________________________________

const campo1 = document.querySelector("#campo1");
const campo2 = document.querySelector("#campo2");
const seletor = document.querySelector("#operacao");
let resposta = document.querySelector ("#resposta");

seletor.addEventListener("change",calcular);
campo1.addEventListener("keyup",calcular);
campo2.addEventListener("keyup",calcular);

function calcular(){


    if(campo1.value!='' && campo2.value!=''){
        const valor1 = parseInt(campo1.value);
        const valor2 = parseInt(campo2.value);
        const operacao = seletor.value;
        if(operacao==="somar")
        resposta.innerHTML = valor1 + valor2;
        if(operacao==="subtrair")
        resposta.innerHTML = valor1 - valor2;
        if(operacao==="multiplicar")
        resposta.innerHTML = valor1 * valor2;
        if(operacao==="dividir")
        resposta.innerHTML = valor1 / valor2;

    }
}

/*

