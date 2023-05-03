start = document.querySelector(".start");
const buttons = document.querySelectorAll(".button");
choix = document.querySelector(".choix");
const exit = document.querySelector(".exit");
exit.addEventListener("click",function () {
    document.getElementById("get").style.display="";
    document.querySelector(".les_choix").style.display = "none";
})
start.addEventListener("click", function () {
    document.querySelector(".les_choix").style.display= "flex";
    document.getElementById("get").style.display="none";
    document.querySelector(".choix").innerHTML="";
})
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",function () {
        const Vous = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random()*buttons.length)].innerHTML;
        let resultat ="";
        if (Vous==robot) {
            resultat="Egalité";
        }
        else if (Vous==="pierre"&&robot=="ciseaux" ||Vous==="ciseaux"&&robot==="feuille" ||Vous==="feuille"&&robot=="ciseaux"){
            resultat="Gagné"
        }
        else{
            resultat="Pérdue"
        }
        document.querySelector(".choix").innerHTML=
        `Vous : ${Vous} <br>
        robot : ${robot}<br>
        ${resultat}`;

    })    
}


