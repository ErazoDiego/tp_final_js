//Variables usadas en la funcion Depositar y plazoFijo.
let dato = 0 
let dato2 = 0
let saldo = 0
let tasaInteres = parseFloat(0.38)

//variables usadas en la funcion agregar_tarjeta.
let nombre= 0
let dni = 0
let numero_t = 0
let vencimiento_t = 0

//Array donde guardo los objetos
const array_tarjetas = [
{nombre_Titular: "Diego", dni_Titular: 1234567, numero_Tarjeta : 000000001, vencimiento_tarjeta: 010124},
{nombre_Titular: "Alejandro", dni_Titular: 987654, numero_Tarjeta : 11111111111, vencimiento_tarjeta: 1111111},
{nombre_Titular: "Julio", dni_Titular: 654321, numero_Tarjeta : 222222222, vencimiento_tarjeta: 222222}];


//clase constructora de objeto
class tarjeta{

    constructor(nombre_Titular, dni_Titular, numero_Tarjeta, vencimiento_tarjeta){

        this.nombre_Titular = nombre_Titular;
        this.dni_Titular = dni_Titular;
        this.numero_Tarjeta = numero_Tarjeta;
        this.vencimiento_tarjeta = vencimiento_tarjeta;
    }

}

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

//funcion validar_campo devuelve true o false dependiendo de si el parametro ingresado es un numero. 
function validar_campo(campo) {

    if (isNaN(campo)) {
        alert("No se a ingresado un numero.")
        return false
    } else {
        return true
    }
    
}

//Imprime una alert con el saldo actual
const VerSaldo = (saldo) => {alert('Su saldo es de: '+saldo)}

//funcion agregar_tarjeta pide datos, crear nuevo objeto y lo guarda en el array_tarjetas
function agregar_tarjeta() {

    //datos ingresados por el usuario
    nombre = prompt("Ingrese nombre del titular: ")
    dni = prompt("Ingrese DNI:")

    //no sale del ciclo hasta que se ingrese el dato correctamente
    do {
        numero_t =parseInt(prompt("Ingrese numero de la tarjeta: "))
        dato = validar_campo(numero_t)
    } while (dato != true);
     
    let vencimiento_t = prompt("Ingrese vencimiento de la tarjeta")
    

    //crea un nuevo objeto
    const tarjeta_x = new tarjeta(nombre, dni, numero_t, vencimiento_t);

    //guarda el objeto en el array
    array_tarjetas.push({tarjeta_x})
}

//funcion mostrar_tarjetas imprime en consola el listado de tarjetas.
function mostrar_tarjetas(array){

    for (const tarjeta_x of array) {

        console.log("Nombre del titular: "+tarjeta_x.nombre_Titular);
        console.log("DNI: "+tarjeta_x.dni_Titular);
        console.log("Numero de tarjeta: "+tarjeta_x.numero_Tarjeta);
        console.log("fecha de vencimiento: "+tarjeta_x.vencimiento_tarjeta+'\n\n');
        
    }

}



//menu
do {
    
    dato = parseInt(prompt('Bienvenido elija una opcion para continuar:\n1: Depositar/Transferir.\n2: Agregar tarjetas.\n3: Mostrar Tarjetas.\n4: Ver saldo.\n5: Simular Plazo Fijo.\n0: Salir.'))

    switch (dato) {

        case 1:

            do {

                dato2 = parseInt(prompt('elija una opcion: \n1: Depositar\n2: Transferir\n0: salir.')) 
                switch (dato2) {
                    case 1:
                        Depositar();
                        break;
                    case 2:
                        Transferir();
                        break;
                    case 0:
                        
                        break;
                
                    default:
                        alert('Opcion invalida.');
                        break;
                }
            } while ( dato2 != 0);

            break;
        case 2:
            agregar_tarjeta();
            console.log(array_tarjetas)
            break;
        case 3:
            mostrar_tarjetas(array_tarjetas);
            break;
        case 4:
            VerSaldo(saldo);
            break;
        case 5:
            plazoFijo();
            break;
        case 0:

            break;
        default:
            alert('Opcion invalida.')
            break;
    }


} while (dato != 0);



