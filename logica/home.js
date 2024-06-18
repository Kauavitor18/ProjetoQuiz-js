
function conferir(){
    const resposta = document.querySelector('input[name="quiz1"]:checked');
    if(resposta && resposta.value == "b"){
        document.getElementById("one").innerHTML = "Resposta correta";
        document.getElementById("one").style.color = "green";
    }
    else{
        document.getElementById("one").innerHTML = "Resposta errada";
        document.getElementById("one").style.color = "red";
        location.href = "index.html";
    }
}

