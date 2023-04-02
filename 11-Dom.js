document.getElementById("bio").innerHTML = "Selamlar!";

document.getElementsByClassName("intro1").innerHTML = "Merhaba!";

var header = document.getElementById("header").addEventListener("click",rengiDegistir);

var isBlue = false;
function rengiDegistir
() {
    if(!isBlue){
        document.getElementById("header").style.color = "blue";
        isBlue = true;
    }else{
        document.getElementById("header").style.color = "black";
        isBlue = false;
    }
     
}