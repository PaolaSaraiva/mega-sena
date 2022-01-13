const barra = document.getElementById("barra")
//const do meu codigo
const min = 1
const max = 60
const quantidadeDeNumerosSorteados = 6
//array de resultadods
let numerosSorteados = []
let idDoIntervalo 
//função para gerar numero
function gerarNumero(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
//função para realizar o sorteio
function sortear(){
     numerosSorteados = []
     barra.innerHTML =""
     idDoIntervalo = setInterval(function callback (){
        let numeroSorteado = SortearNumero()
        numerosSorteados.push(numeroSorteado)
        inserirNumeroNaBarra(numeroSorteado)
//if para limpar o intervalo assim que a quantidade de numeros for atingida
        if(numerosSorteados.length==quantidadeDeNumerosSorteados){
            clearInterval(idDoIntervalo)
        }
    },1000)
}
//função para sortear um numero por vez
function SortearNumero (){
    let numeroSorteado = gerarNumero(min,max)
//verificando se o numero sorteado ja havia sido sorteado e caso seja sorteara um novo numero quantas vezes for necessario
    while (numerosSorteados.find((num)=>numeroSorteado==num)){
        numeroSorteado = gerarNumero(min,max)
    }
 //retorna numero sorteado
    return numeroSorteado
}
//inserir numero sorteado no HTML
function inserirNumeroNaBarra(numeroSorteado){
    let criarElementoDoNumero = document.createElement("span")
    criarElementoDoNumero.innerHTML= numeroSorteado 
    barra.appendChild(criarElementoDoNumero)
}