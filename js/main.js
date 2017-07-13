// init variable
var calcul = document.getElementsByClassName("calculet")
var tabcalcul = []
var tabtotal = []
var total = 0
var resultat = document.getElementById("resultatcalcul")
resultat.innerHTML = 0
// calculator
for (let i = 0; i < calcul.length; i++) {
    calcul[i].addEventListener("click", function() {

        // 0 if clear button
        if (calcul[i].innerHTML == "C") {
            resultat.innerHTML = 0;
            tabcalcul.length = 0
            total = 0
        } else {
            // add on tab result
            tabcalcul.push(calcul[i].innerHTML)
        }



        // first result
        if (total === 0) {
            if (tabcalcul.length === 1) {
                if (tabcalcul[0] == "." || tabcalcul[0] == "+" || tabcalcul[0] == "-" || tabcalcul[0] == "/" || tabcalcul[0] == "*") {
                    resultat.innerHTML = "error"
                    tabcalcul.length = 0
                    total = 0
                } else {
                    resultat.innerHTML = tabcalcul[0]
                }
            }


            if (tabcalcul.length === 2) {
                if (tabcalcul[1] == "." || tabcalcul[1] == "+" || tabcalcul[1] == "-" || tabcalcul[1] == "/" || tabcalcul[1] == "*") {
                    resultat.innerHTML = tabcalcul[0]
                } else {
                    resultat.innerHTML = "error"
                }
            }

            if (tabcalcul.length === 3) {
                if (tabcalcul[1] === "+") {
                    total = Number(tabcalcul[0]) + Number(tabcalcul[2])
                } else if (tabcalcul[1] === "-") {
                    total = Number(tabcalcul[0]) - Number(tabcalcul[2])
                } else if (tabcalcul[1] === "*") {
                    total = Number(tabcalcul[0]) * Number(tabcalcul[2])
                } else if (tabcalcul[1] === "/") {
                    total = Number(tabcalcul[0]) / Number(tabcalcul[2])
                } else if (tabcalcul[1] === ".") {
                    total = Number(Number(tabcalcul[0]) + "." + Number(tabcalcul[2]))
                }
                resultat.innerHTML = total
                tabcalcul.length = 0
            }
        } else if (total !== 0) {
            if (tabcalcul.length === 1) {
                if (tabcalcul[0] == "+" || tabcalcul[0] == "-" || tabcalcul[0] == "/" || tabcalcul[0] == "*") {
                    resultat.innerHTML = total
                } else {
                    resultat.innerHTML = "error"
                    tabcalcul.length = 0
                }
            }


            if (tabcalcul.length === 2) {
                if (tabcalcul[0] === "+") {
                    total = total + Number(tabcalcul[1])
                } else if (tabcalcul[0] === "-") {
                    total = total - Number(tabcalcul[1])
                } else if (tabcalcul[0] === "*") {
                    total = total * Number(tabcalcul[1])
                } else if (tabcalcul[0] === "/") {
                    total = total / Number(tabcalcul[1])
                }
                resultat.innerHTML = total
                tabcalcul.length = 0
            }

        }
    })
}
