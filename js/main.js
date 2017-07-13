// init variable
var calcul = document.getElementsByClassName("calculet")
var tabcalcul = []
var total = 0
var resultata = document.getElementById("resultatcalcul")
resultata.innerHTML = 0
var resultat = document.getElementById("resultatcalcul1")
resultat.innerHTML = 0

// calculator baby
for (let i = 0; i < calcul.length; i++) {
    calcul[i].addEventListener("click", function() {

        // 0 if clear button
        if (calcul[i].innerHTML == "C") {
            resultata.innerHTML = 0;
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
                    resultata.innerHTML = "error"
                    tabcalcul.length = 0
                    total = 0
                } else {
                    resultata.innerHTML = tabcalcul[0]
                }
            }


            if (tabcalcul.length === 2) {
                if (tabcalcul[1] == "." || tabcalcul[1] == "+" || tabcalcul[1] == "-" || tabcalcul[1] == "/" || tabcalcul[1] == "*") {
                    resultata.innerHTML = tabcalcul[0]
                } else {
                    resultata.innerHTML = "error"
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
                resultata.innerHTML = total
                tabcalcul.length = 0
            }
        } else if (total !== 0) {
            if (tabcalcul.length === 1) {
                if (tabcalcul[0] == "+" || tabcalcul[0] == "-" || tabcalcul[0] == "/" || tabcalcul[0] == "*") {
                    resultata.innerHTML = total
                } else {
                    resultata.innerHTML = "error"
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
                resultata.innerHTML = total
                tabcalcul.length = 0
            }

        }
    })
}
