function insert(num){
 document.getElementById('resultado').innerHTML+=num ;
}
function clean(){
    document.getElementById('resultado').innerHTML=""
    
}function off(){
    document.getElementById('resultado').innerHTML=""

}
function ligar(){
    document.body.classList.toggle("liga")

}
function desligar(){
    document.body.classList.toggle("desliga")
}



function calcular(){

    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML=eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML='Digite algo'
    }
}