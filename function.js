// Declarate
let buttonClick = document.querySelectorAll('p')
let calc = document.getElementById('calc')
let tipic = document.getElementsByClassName('tipic')
let color = document.getElementById("colorClickActive")
let valor = {}
let calculo
let aux = 0
let operAux
let Aux_Validation_Second_Operation=0
let Aux_Validation_Second_Numbers=0
let Aux_Validation_Class_Active=0
// RemoveClassActive
color.classList.remove("colorClickActive")
// Verify the button
for (i = 0; i < buttonClick.length; i++) {
        // Select the button of click
        buttonClick[i].addEventListener("click", function (e) {
        buttonClick = e.target.innerText
        //Verification of Operators
        if (buttonClick === '/' || buttonClick === '*' || buttonClick === '-' || buttonClick === '+' || buttonClick ==='=') {
            if (Aux_Validation_Second_Operation === 1)
            {
                calc.innerHTML = ''
                 Aux_Validation_Second_Operation == 0
                oper(operAux)
                valor[0] = valor[2]
                valor[1] = 0
                operAux = buttonClick

            }
            operAux = buttonClick
            aux = 1
            Aux_Validation_Second_Numbers=1
            // Remove and Add Class Active
            if(Aux_Validation_Class_Active === 1){
                color.classList.remove("colorClickActive")
                Aux_Validation_Class_Active=0
                
            }
            else{
                color.classList.add("colorClickActive")
                Aux_Validation_Class_Active=1
            }
        }
        else {
            // IF button click is a number
            if (aux === 1) {
                if(Aux_Validation_Second_Numbers===1){
                    calc.innerHTML = ''
                    Aux_Validation_Second_Numbers=0 
                }
                calc.innerHTML += buttonClick
                valor[1] = calc.innerHTML
                Aux_Validation_Second_Operation = 1
            }
            else{
                calc.innerHTML += buttonClick
                valor[0] = calc.innerText
            }
            // clean all atribuitions
            if (buttonClick === 'C') {
                calc.innerHTML = ''
                valor[0] = 0
                valor[1] = 0
                calculo = 0
                aux = 0
                Aux_Validation_Second_Operation=0
            }
        }
    });
}

// function of operations
function oper(Selec){
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
            case'+':
                calculo = parseInt(valor[0]) + parseInt(valor[1])
                calc.innerHTML = calculo
                break;
            case'=':
                calc.innerHTML = calculo
                break;
        }
        valor[2] = calculo 
}