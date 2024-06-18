
function conferir(){
    const resposta = document.querySelector('input[name="quiz1"]:checked');
    if(resposta && resposta.value == "b"){
        document.getElementById("one").innerHTML = "Resposta correta";
        document.getElementById("one").style.color = "green";
        proximaPage();
    }
    else{
        sairTempo();
    }
    function proximaPage(){
        setTimeout(function(){
        location.href = "home2.html";
        }, 1000);
    }
    function sairTempo(){
        document.getElementById("one").innerHTML = "Resposta errada";
        document.getElementById("one").style.color = "red";
        setTimeout(function(){
            location.href = "index.html";
        }, 1000);
    }
}

// HOME 2
function conferir2(){
    const resposta2 = document.querySelector('input[name="quiz2"]:checked');
    if(resposta2 && resposta2.value == "a"){
        document.getElementById("one").innerHTML = "Resposta correta";
        document.getElementById("one").style.color = "green";
        proximaPage2();
    }
    else{
        sairTempo();
    }
    function proximaPage2(){
        setTimeout(function(){
        location.href = "home3.html";
        }, 1000);
    }
    function sairTempo(){
        document.getElementById("one").innerHTML = "Resposta errada";
        document.getElementById("one").style.color = "red";
        setTimeout(function(){
            location.href = "index.html";
        }, 1000);
    }
}

