// init variable
var calcul = document.getElementsByClassName("calculet")
var tabcalcul = []
var total = ""
var resultat = document.getElementById("resultatcalcul")
resultat.innerHTML = 0


// calculator
for (let i = 0; i < calcul.length; i++) {
    calcul[i].addEventListener("click", function() {

if(calcul[i].innerHTML!== "="){
total = total + calcul[i].innerHTML
resultat.innerHTML = total
}
else{
  if(total.slice(-1) == "+" || total.slice(-1) == "-" || total.slice(-1) ==  "*" || total.slice(-1) == "/" || total.slice(-1) == "."){
    total = total.replace((total.slice(-1)),"")
  }
  total = eval(total)
  resultat.innerHTML = total
}


        // 0 if clear button
        if (calcul[i].innerHTML == "C") {
            resultat.innerHTML = 0;
            total = ""
        }

})
}
