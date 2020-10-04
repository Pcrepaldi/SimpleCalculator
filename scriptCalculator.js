var c = window.document.getElementsByTagName("td")[0];
var del = window.document.getElementsByTagName("td")[1];
var dividir = window.document.getElementsByTagName("td")[2];
var multiplicar = window.document.getElementsByTagName("td")[3];
var menos = window.document.getElementsByTagName("td")[7];
var mais = window.document.getElementsByTagName("td")[11];
var igual = window.document.getElementsByTagName("td")[15];
var ponto = window.document.getElementsByTagName("td")[17];
var n_0 = window.document.getElementsByTagName("td")[16];
var n_1 = window.document.getElementsByTagName("td")[12];
var n_2 = window.document.getElementsByTagName("td")[13];
var n_3 = window.document.getElementsByTagName("td")[14];
var n_4 = window.document.getElementsByTagName("td")[8];
var n_5 = window.document.getElementsByTagName("td")[9];
var n_6 = window.document.getElementsByTagName("td")[10];
var n_7 = window.document.getElementsByTagName("td")[4];
var n_8 = window.document.getElementsByTagName("td")[5];
var n_9 = window.document.getElementsByTagName("td")[6];

var res = window.document.querySelector('#calculo');
var res2 = window.document.querySelector('#resultado');

var fullString = []

var valor1
var valor2
var n1, n2

function addResultado(v){
    fullString.push(v)
    res.innerHTML = fullString.join("")

    //DEPURAÇÃO
    /*
    if(isNaN(v) == false){
        valor1 = v
        console.log(valor1)
    }else if(v == "+"){
        valor2 = "+"
        console.log(valor2)
    }else if(v == "-"){
        valor2 = "-"
        console.log(valor2)
    }else if(v == "x"){
        valor2 = "x"
        console.log(valor1)
    }else if(v == "/"){
        valor2 = "/"
        console.log(valor2)
    }else if(v == "."){
        valor2 = "."
        console.log(valor2)
    }
    else{
        console.log("NaN")
    }
    */
}

function clearAll(){
    do{
        fullString.pop()
    }while(fullString.length = 0)

    res.innerHTML = fullString.join("")
    res2.innerHTML = ""
}

function deletar(){
    fullString.pop()
    res.innerHTML = fullString.join("")
    res2.innerHTML = ""
}

function sinal_mais(){
    var sinal = "+"
    addResultado(sinal)     
}

function sinal_menos(){
    var sinal = "-"
    addResultado(sinal)
}

function sinal_vezes(){
    var sinal = "*"
    addResultado(sinal)
}

function sinal_dividir(){
    var sinal = "/"
    addResultado(sinal)
}

function sinal_ponto(){
    var sinal = "."
    addResultado(sinal)
}

function calcular(){
    
    for(var i=0; i<fullString.length; i++){

        var string = fullString.join();
        var stringFormatted = string.replace(/,/g, "")
        //console.log("String formatada = " + stringFormatted)
        Number(stringFormatted)

        // VERIFICAR SE UM VALOR NÃO É NÚMERO
        if(isNaN(fullString[i])){
            var sinal = fullString[i]
            if(sinal != "."){
                //console.log("SIGNAL AT " + i)
                var n1 = fullString.join("")
                
                Number(n1)
                var expressao = eval(n1)
                if(isNaN(expressao)){
                    console.log("Erro de expressão")
                }else{
                    //console.log("Calculo = " + expressao)
                    res2.innerHTML = " = " + expressao
                }
            }
        }

    }

}

// O QUE EU APRENDI COM ESSE PROJETO

// -- MANIPULAÇÃO DE VETORES
// -- CONVERTER EXPRESSAO DE STRING
// -- MÉTODO DE VERIFICAÇÃO isNaN()

/*
var lista = [];
lista.push("arroz");   // ADICIONA NO VETOR
lista.pop()            // REMOVE O ÚLTIMO ITEM DO VETOR
lista.push("feijão");
lista.push("carne");
show(lista.join(" ")); // TORNA O VETOR INTEIRO EM UMA STRING
show(lista.pop());
show(lista);

//CONVERTE UMA EXPRESSÃO DE UMA VALOR STRING
eval();
*/

