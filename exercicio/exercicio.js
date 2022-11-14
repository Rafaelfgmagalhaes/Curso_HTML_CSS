function somar(){
    let valor1 = document.getElementById('a')
    let valor2 = document.getElementById('b')
    let res = document.getElementById('result') 
    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    let resultado = n1 + n2 
    res.innerHTML = `O resultado da soma é: ${resultado}`
}

function subtrair(){
    let valor1 = document.querySelector('input#a')
    let valor2 = document.querySelector('input#b')
    let res = document.querySelector('#result')
    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    let resultado = n1 - n2
    res.innerHTML = `O resultado da subtração é: ${resultado}`
}

function multiplicar(){
    let valor1 = document.getElementById('a')
    let valor2 = document.getElementById('b')
    let res = document.getElementById('result') 
    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    let resultado = n1 * n2 
    res.innerHTML = `O resultado da multiplicação é: ${resultado}`
}

function dividir(){
    let valor1 = document.getElementById('a')
    let valor2 = document.getElementById('b')
    let res = document.getElementById('result') 
    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)
    let resultado = n1 / n2 
    res.innerHTML = `O resultado da divisão é: ${resultado}`
}