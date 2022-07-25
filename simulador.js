//Variables
let dato = 0 
let saldo = 0
let tasaInteres = parseFloat(0.38)

//Funcion depositar pide un monto a depositar verifica que sea un numero y lo guarda en la variable saldo.
function Depositar(){
    let deposito = parseInt(prompt('Ingrese monto a depositar:'))
    if (isNaN(deposito)) {
        alert('No se ingreso un valor numerico.')
    }else{
        saldo = saldo+deposito
        alert('Su deposito se realizo correctamente.')
        
    }
}


//Funcion transferir pide un monto a transferir, verifica que sea un numero y que no sea mayor al saldo. Actualiza el  monto de la variable saldo
function Transferir(){
    let transferencia = parseInt(prompt('Ingrese monto que desea transferir.'))
    if (isNaN(transferencia)) {
        alert('No se ingreso un valor numerico.') 
    }else if (transferencia >= saldo) {
        alert('No posee saldo suficiente para realizar la transferencia')
    } else {
        let cbu = parseInt(prompt('ingrese CBU al que desea transferir.'))
        saldo = saldo-transferencia
        alert('La transferencia fue realizada correctamente al CBU: '+cbu)


    }
}

//Funcion plazo fijo calcula el interes a ganar de un monto ingresado en un periodo de dias sobre una tasa de interes del 38%
function plazoFijo() {
    let deposito = parseInt(prompt('Ingrese monto a invertir:'))
    let duracion = parseInt(prompt('Seleccione periodo en dias:'))
    let InteresGanado = deposito*(tasaInteres*(duracion/365))
    alert('El interes ganado sera de: '+InteresGanado.toFixed(2))

    
}

//Imprime una alert con el saldo actual
const VerSaldo = (saldo) => {alert('Su saldo es de: '+saldo)}


//menu
do {
    
    dato = parseInt(prompt('Bienvenido elija una opcion para continuar:\n1: Depositar\n2: Transferir\n3: Simular plazo fijo\n4: Ver saldo\n5: Salir'))

    switch (dato) {

        case 1:
            Depositar();
            break;
        case 2:
            Transferir();
            break;
        case 3:
            plazoFijo();
            break;
        case 4:
            VerSaldo(saldo);
            break;
        case 5:
            
            break;
    
        default:
            alert('Opcion invalida.')
            break;
    }





} while (dato != 5);