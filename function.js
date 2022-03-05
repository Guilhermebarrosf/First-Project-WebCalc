// Declarate
let buttonClick = document.querySelectorAll('p')
let calc = document.getElementById('calc')
let tipic = document.getElementsByClassName('tipic')
let valor = {}
let calculo
let aux = 0
let operAux
let Aux_Validation_Second_Operation = 0
let Aux_Validation_Second_Numbers = 0
let Aux_Validation_Second_Operator = 0
// Identify of Class Operator
let Aux_Validation_Class_Active_Oper_One = 0
let Aux_Validation_Class_Active_Oper_Two = 0
let Aux_Validation_Class_Active_Oper_Three = 0
let Aux_Validation_Class_Active_Oper_Four = 0
// colors of Operators
let oper_one = document.querySelector("#oper_one")
let oper_two = document.querySelector("#oper_two")
let oper_three = document.querySelector("#oper_three")
let oper_four = document.querySelector("#oper_four")
// // RemoveClassActive
oper_one.classList.remove("colorCLickActive")
oper_two.classList.remove("colorCLickActive")
oper_three.classList.remove("colorCLickActive")
oper_four.classList.remove("colorCLickActive")
// Verify the button
for (i = 0; i < buttonClick.length; i++) {
    // Select the button of click
    buttonClick[i].addEventListener("click", function (e) {
        buttonClick = e.target.innerText
        //Verification of Operators
        if (buttonClick === '/' || buttonClick === '*' || buttonClick === '-' || buttonClick === '+' || buttonClick === '=') {
            if (Aux_Validation_Second_Operation === 1) {
                calc.innerHTML = ''
                Aux_Validation_Second_Operation == 0
                oper(operAux)
                valor[0] = valor[2]
                valor[1] = 0
                operAux = buttonClick

            }
            operAux = buttonClick
            aux = 1
            Aux_Validation_Second_Numbers = 1
            // Remove and Add Class Active
            RemoveOrAdd(buttonClick)
        }
        else {
            // IF button click is a number
            if (aux === 1) {
                if (Aux_Validation_Second_Numbers === 1) {
                    calc.innerHTML = ''
                    Aux_Validation_Second_Numbers = 0
                }
                calc.innerHTML += buttonClick
                valor[1] = calc.innerHTML
                Aux_Validation_Second_Operation = 1
            }
            else {
                calc.innerHTML += buttonClick
                valor[0] = calc.innerText
            }
            // clean all atribuitions
            if (buttonClick === 'C') {
                oper_one.classList.remove("colorClickActive")
                oper_two.classList.remove("colorClickActive")
                oper_three.classList.remove("colorClickActive")
                oper_four.classList.remove("colorClickActive")
                calc.innerHTML = ''
                valor = {}
                calculo = 0
                aux = 0
                operAux = 0
                Aux_Validation_Second_Operation = 0
                Aux_Validation_Second_Numbers = 0
                Aux_Validation_Class_Active_Oper_One = 0
                Aux_Validation_Class_Active_Oper_Two = 0
                Aux_Validation_Class_Active_Oper_Three = 0
                Aux_Validation_Class_Active_Oper_Four = 0
            }
        }
    });
}

// function of operations
function oper(Selec) {
    switch (Selec) {
        case '/':
            calculo = valor[0] / valor[1]
            calc.innerHTML = calculo
            break;
        case '*':
            calculo = valor[0] * valor[1]
            calc.innerHTML = calculo
            break;
        case '-':
            calculo = valor[0] - valor[1]
            calc.innerHTML = calculo
            break;
        case '+':
            calculo = parseInt(valor[0]) + parseInt(valor[1])
            calc.innerHTML = calculo
            break;
        case '=':
            calc.innerHTML = calculo
            break;
    }
    valor[2] = calculo
}
// Function for Remove and Add ClassColor
function RemoveOrAdd(Oper) {
    console.log(Oper)
    if (Aux_Validation_Second_Operator === 0) {
        console.log(Aux_Validation_Second_Operator)
        switch (Oper) {
            case '-':
                if (Aux_Validation_Class_Active_Oper_One === 1) {
                    oper_one.classList.remove("colorClickActive")
                    Aux_Validation_Class_Active_Oper_One = 0

                }
                else {
                    oper_one.classList.add("colorClickActive")
                    Aux_Validation_Class_Active_Oper_One = 1
                }
                break
            case '*':
                if (Aux_Validation_Class_Active_Oper_Three === 1) {
                    oper_three.classList.remove("colorClickActive")
                    Aux_Validation_Class_Active_Oper_Three = 0

                }
                else {
                    oper_three.classList.add("colorClickActive")
                    Aux_Validation_Class_Active_Oper_Three = 1
                }
                break
            case '/':
                if (Aux_Validation_Class_Active_Oper_Four === 1) {
                    oper_four.classList.remove("colorClickActive")
                    Aux_Validation_Class_Active_Oper_Four = 0

                }
                else {
                    oper_four.classList.add("colorClickActive")
                    Aux_Validation_Class_Active_Oper_Four = 1
                }
                break
            case '+':
                if (Aux_Validation_Class_Active_Oper_Two === 1) {
                    oper_two.classList.remove("colorClickActive")
                    Aux_Validation_Class_Active_Oper_Two = 0

                }
                else {
                    oper_two.classList.add("colorClickActive")
                    Aux_Validation_Class_Active_Oper_Two = 1
                }
                break
            case '=':
                oper_one.classList.remove("colorClickActive")
                oper_two.classList.remove("colorClickActive")
                oper_three.classList.remove("colorClickActive")
                oper_four.classList.remove("colorClickActive")
        }
        Aux_Validation_Second_Operator = 1;
    }
    else{
        // Second select operator
        oper_one.classList.remove("colorClickActive")
        oper_two.classList.remove("colorClickActive")
        oper_three.classList.remove("colorClickActive")
        oper_four.classList.remove("colorClickActive")

        switch (Oper) {
            case '-':
                    oper_one.classList.add("colorClickActive")
                break
            case '*':
                    oper_three.classList.add("colorClickActive")
                break
            case '/':
                    oper_four.classList.add("colorClickActive")
                break
            case '+':
                    oper_two.classList.add("colorClickActive")
                break
        }

    }
}