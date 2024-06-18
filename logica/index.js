/// PRINCIPAL DO INDEX

const hora = new Date().getHours();
console.log(hora)

if(hora > 5 && hora < 12){
    document.getElementById("welcome").innerHTML = "BOM DIA " + "<br> SEJA BEM VINDO AO QUIZ GAME";
}else if(hora > 12 && hora < 18){
    document.getElementById("welcome").innerHTML = "BOA TARDE " +"<br> SEJA BEM VINDO AO QUIZ GAME";
}
else if(hora > 18 && hora < 24){
    document.getElementById("welcome").innerHTML = "BOA NOITE " +"<br> SEJA BEM VINDO AO QUIZ GAME";
}

function run(){
    document.getElementById("runner").value;
    location.href = "home.html";
}



