let firstName = prompt("Lütfen isminizi giriniz:")
let info = document.querySelector("#info")

if(firstName.length > 0){
    info.innerHTML = `Merhaba,${firstName}! Hoşgeldin.${new Date().getUTCDay}`;
}