let dato = 0 
let saldo = 0
let tasaInteres = parseFloat(0.38)

function Depositar(){
    let deposito = parseInt(prompt('Ingrese monto a depositar:'))
    if (isNaN(deposito)) {
        alert('No se ingreso un valor numerico.')
    }else{
        saldo = saldo+deposito
        alert('Su deposito se realizo correctamente.')
        
    }
}

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

function plazoFijo() {
    let deposito = parseInt(prompt('Ingrese monto a invertir:'))
    let duracion = parseInt(prompt('Seleccione periodo en dias:'))
    let InteresGanado = deposito*(tasaInteres*(duracion/365))
    alert('El interes ganado sera de: '+InteresGanado.toFixed(2))

    
}

const VerSaldo = (saldo) => {alert('Su saldo es de: '+saldo)}



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