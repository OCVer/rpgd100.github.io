var span = document.querySelector('span');


function aleatorio(min,max){
 return Math.floor(Math.random() * (max-min+1)+min);
}

span.onclick = function dado() {

    var atributo = parseFloat(prompt(" Qual o valor do atributo que o mestre pediu? "));
    var random = aleatorio(1,100);
    var atributo2 = atributo/2;
    var atributo5 = atributo/5;

    alert("você tirou " + random + " no dado.")

    if(atributo2 < random && random <= atributo){
        alert("Você passou com sucesso Normal.");
    }
    else if(atributo5 < random && random <= atributo2){
        alert("Você passou com sucesso Bom.");
    }
    else if(random <= atributo5){
        alert("Você passou com sucesso Muito Bom.");
    }
    else if(random === 1){
        alert("Você passou com sucesso Extremo.");
    }
    else if(random >= atributo){
        alert("Você Não passou :(");
    }
    else if(random === 100){
        alert("Você fracassou muito feio :(");
    }
}
