let buttonClicado = document.querySelectorAll('p')
let calc = document.getElementById('calc')
let valor = {}
let calculo
let aux = 0
let operAux
let aux2=0
// Verify the button
for (i = 0; i < buttonClicado.length; i++) {
    buttonClicado[i].addEventListener("click", function (e) {
        buttonClicado = e.target.innerText
        if (buttonClicado === '/' || buttonClicado === '*' || buttonClicado === '-' || buttonClicado === '+' || buttonClicado ==='=') {
            if(aux2 === 1)
            {
                calc.innerHTML = ''
                aux2 == 0
                oper(operAux)
                valor[0] = valor[3]
                valor[1] = 0
                operAux = buttonClicado

            }
            operAux = buttonClicado
            aux = 1
        }
        else {
            calc.innerHTML += buttonClicado
            aux === 0 ? valor[0] = calc.innerText : valor[1] = calc.innerText
            if (aux === 1) {
                calc.innerHTML = ''
                calc.innerHTML += buttonClicado
                valor[1] = calc.innerHTML
                aux = 0
                aux2 = 1

            }
            if (buttonClicado === 'C') {
                calc.innerHTML = ''
                valor[0] = 0
                valor[1] = 0
                calculo = 0
                aux = 0
                aux2=0
            }
        }
        console.log(valor[0], valor[1])
    });
}

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
        valor[3] = calculo 
}