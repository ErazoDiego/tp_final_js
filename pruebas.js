let saldo = 10000;

/**
 * Aca se guardan las transferencias.
*/
const array_tranferencias=[
    {nombre_t_cuenta: "Sandra", monto_transferido: 2500, CBU: 123654987},
    {nombre_t_cuenta: "Lucas", monto_transferido: 5000, CBU: 225566489},
    {nombre_t_cuenta: "Victor", monto_transferido: 2000, CBU: 898765454},
    {nombre_t_cuenta: "Juan", monto_transferido: 4500, CBU: 321245655},
    {nombre_t_cuenta: "Lucas", monto_transferido:5500 , CBU: 225566489},
    {nombre_t_cuenta: "Julieta", monto_transferido: 5000, CBU: 785465782}
];

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
 * Solicita datos para tranfencia, crea un objeto y lo guarda en el array_transferencias
 */
 function Transferir(){
    let nombre_t_cuenta = prompt('Ingrese nombre del titular de la cuenta:');
    let CBU = parseInt(prompt('ingrese CBU.'));
    let monto_transferido = parseInt(prompt('Ingrese monto que desea transferir.'));
    let mensaje =" ";
    if (isNaN(monto_transferido)) {

        mensaje ='No se ingreso un valor numerico.'; 


    }else if (monto_transferido >= saldo) {

        mensaje ='No posee saldo suficiente para realizar la transferencia';

    } else {  

        saldo = saldo-monto_transferido;
        mensaje ='La transferencia fue realizada correctamente';
    
    };
    /**
     * Crea nuevo objeto transferencias.
     */
    const transfererencia_x = new Transferencia(nombre_t_cuenta,monto_transferido,CBU);
    /**
     * Guardo objeto creado en el array.
     */
    array_tranferencias.push(transfererencia_x);

    const texto = document.getElementById('texto');
    console.log(texto);
    const h1 = document.createElement('h1');
    h1.textContent = mensaje;
    texto.appendChild(h1);


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

Transferir();