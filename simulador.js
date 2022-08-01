/**
 * Variables usadas en el menu, en la funcion Depositar y en la funcion plazoFijo.
 */
let dato = 0; 
let dato2 = 0;
let saldo = 0;
let tasaInteres = parseFloat(0.38);

/**
 * Aca se guardan las tarjetas.
 */
const array_tarjetas = [
{nombre_Titular: "Diego", dni_Titular: 1234567, numero_Tarjeta : 000000001, vencimiento_tarjeta: 010124},
{nombre_Titular: "Alejandro", dni_Titular: 987654, numero_Tarjeta : 11111111111, vencimiento_tarjeta: 1111111},
{nombre_Titular: "Julio", dni_Titular: 654321, numero_Tarjeta : 222222222, vencimiento_tarjeta: 222222}];

/**
 * Aca se guardan las transferencias.
 */
const array_tranferencias=[];

/**
 * clase constructora de objeto Tarjeta.
 */
class Tarjeta{
    constructor(nombre_Titular, dni_Titular, numero_Tarjeta, vencimiento_tarjeta){

        this.nombre_Titular = nombre_Titular;
        this.dni_Titular = dni_Titular;
        this.numero_Tarjeta = numero_Tarjeta;
        this.vencimiento_tarjeta = vencimiento_tarjeta;
    }
};

/**
 * clase constructora de objeto Transferencia.
 */
class Transferencia{
    constructor(nombre_t_cuenta, monto_transferido, CBU){
        this.nombre_t_cuenta = nombre_t_cuenta;
        this.monto_transferido = monto_transferido;
        this.CBU = CBU;
    };
};

/**
 *Pide un monto a depositar verifica que sea un numero y lo guarda en la variable saldo. 
 */
function Depositar(){
    let deposito = parseInt(prompt('Ingrese monto a depositar:'));
    if (isNaN(deposito)) {
        alert('No se ingreso un valor numerico.');
    }else{
        saldo = saldo+deposito
        alert('Su deposito se realizo correctamente.');      
    };
};

/**
 * Solicita datos para tranfencia, crea un objeto y lo guarda en el array_transferencias
 */
function Transferir(){
    let nombre_t_cuenta = prompt('Ingrese nombre del titular de la cuenta:');
    let CBU = parseInt(prompt('ingrese CBU.'));
    let monto_transferido = parseInt(prompt('Ingrese monto que desea transferir.'));
    if (isNaN(monto_transferido)) {
        alert('No se ingreso un valor numerico.'); 
    }else if (monto_transferido >= saldo) {
        alert('No posee saldo suficiente para realizar la transferencia');
    } else {   
        saldo = saldo-monto_transferido;
        alert('La transferencia fue realizada correctamente al CBU: '+CBU);
    };
    /**
     * Crea nuevo objeto transferencias.
     */
    const transfererencia_x = new Transferencia(nombre_t_cuenta,monto_transferido,CBU);
    /**
     * Guardo objeto creado en el array.
     */
    array_tranferencias.push(transfererencia_x);
}

/**
 * Calcula con un interes del 38%
 */
function plazoFijo() {
    let deposito = parseInt(prompt('Ingrese monto a invertir:'));
    let duracion = parseInt(prompt('Seleccione periodo en dias:'));
    let InteresGanado = deposito*(tasaInteres*(duracion/365));
    alert('El interes ganado sera de: '+InteresGanado.toFixed(2));   
};

/**
 * Devuelve true o false dependiendo de si el parametro ingresado es un numero.
 * @param {*} campo 
 * @returns 
 */ 
function validar_campo(campo) {
    if (isNaN(campo)) {
        alert("No se a ingresado un numero.");
        return false;
    } else {
        return true;
    }; 
};

/**
 * Imprime una alert con el saldo actual.
 * @param {*} saldo 
 */
const VerSaldo = (saldo) => {alert('Su saldo es de: '+saldo)};

/**
 * Pide datos, crear nuevo objeto y lo guarda en el array_tarjetas.
 */
function agregar_tarjeta() {
    /**
     * Datos ingresados por el usuario.
     */
    let nombre = prompt("Ingrese nombre del titular: ");
    let dni = prompt("Ingrese DNI:");
    /**
     * No sale del ciclo hasta que se ingrese el dato correctamente.
     */
    let numero_t=0;
    let valida= false;
    do {
        numero_t =parseInt(prompt("Ingrese numero de la tarjeta: "));
        valida = validar_campo(numero_t);
    } while (!valida); 
    let vencimiento_t = prompt("Ingrese vencimiento de la tarjeta");
    /**
     * Crea un nuevo objeto.
     */
    const tarjeta_x = new Tarjeta(nombre, dni, numero_t, vencimiento_t);
    /**
     * Guarda el objeto en el array.
     */
    array_tarjetas.push(tarjeta_x);
};

/**
 * Imprime en consola el listado de tarjetas.
 * @param {*} array 
 */
function mostrar_tarjetas(array){
    for (const tarjeta_x of array) {
        console.log("Nombre del titular: "+tarjeta_x.nombre_Titular);
        console.log("DNI: "+tarjeta_x.dni_Titular);
        console.log("Numero de tarjeta: "+tarjeta_x.numero_Tarjeta);
        console.log("fecha de vencimiento: "+tarjeta_x.vencimiento_tarjeta+'\n\n');  
    }
}

/**
 * Muestra por consola el array_transferencias.
 * @param {*} array 
 */
function mostrar_transferencias(array){
    if (array_tranferencias.length==0) {
        alert('No tiene transferensias realizadas.');
    } else {
       for (const transferencia_x of array) {
        console.log("Nombre del titular: "+transferencia_x.nombre_t_cuenta);
        console.log("CBU: "+ transferencia_x.CBU);
        console.log("monto transferido: $"+transferencia_x.monto_transferido+'\n\n');
        }; 
    };  
};


do {
    /**
     * Dato ingresado por el usuario.
     */
    dato = parseInt(prompt('Bienvenido elija una opcion para continuar:\n1: Depositar/Transferir/Simular plazo fijo.\n2: Agregar tarjetas.\n3: Mostrar Tarjetas.\n4: Ver saldo.\n5: Ver transferencias.\n0: Salir.'));
    /**
     * Menu
     */
    switch (dato) {
        case 1:
            do {
                /**
                 * Dato ingresado por el usuario.
                 */
                dato2 = parseInt(prompt('elija una opcion:\n1: Depositar.\n2: Transferir.\n3: Simular plazo fijo.\n0: salir.'));
                 /**
                  * Submenu
                  */
                switch (dato2) {
                    case 1:
                        Depositar();
                        break;
                    case 2:
                        Transferir();
                        break;
                    case 3:
                        plazoFijo();
                        break;
                    case 0:                       
                        break;
                    default:
                        alert('Opcion invalida.');
                        break;
                };
            } while ( dato2 != 0);
            break;
        case 2:
            agregar_tarjeta();            
            break;
        case 3:
            mostrar_tarjetas(array_tarjetas);
            break;
        case 4:
            VerSaldo(saldo);
            break;
        case 5:
            mostrar_transferencias(array_tranferencias);
            break;
        case 0:
            break;
        default:
            alert('Opcion invalida.');
            break;
    }
} while (dato != 0);



