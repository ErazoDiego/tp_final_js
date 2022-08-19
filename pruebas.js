let saldo = 10000;

/**
 * Aca se guardan las transferencias.
*/
const array_tranferencias=[
    {nombre_t_cuenta: "Sandra Gomez", monto_transferido: 2500, CBU: 123654987},
    {nombre_t_cuenta: "Lucas Proda", monto_transferido: 5000, CBU: 225566489},
    {nombre_t_cuenta: "Victor ferreira", monto_transferido: 2000, CBU: 898765454},
    {nombre_t_cuenta: "Juan Salgero", monto_transferido: 4500, CBU: 321245655},
    {nombre_t_cuenta: "Lucas Ferrari", monto_transferido:5500 , CBU: 225566489},
    {nombre_t_cuenta: "Julieta Martin", monto_transferido: 5000, CBU: 785465782}
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
 * Captura datos, crea un objeto y lo guarda en el array_transferencias
 */
 function transferir(){

    let nombre_t_cuenta = document.getElementById("inputNombre").value;
    let CBU = document.getElementById("inputCBU").value;
    let monto_transferido = document.getElementById("inputMontoTransferencia").value;
    let mensaje =" ";

    parseInt(monto_transferido);
    parseInt(CBU);

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
    texto.innerText = mensaje;
    
    console.log(array_tranferencias);

};





function resetear_form(){

    document.getElementById("inputNombre").value = "";
    document.getElementById("inputCBU").value = "";
    document.getElementById("inputMontoTransferencia").value = "";
    

};


let btn_transferir = document.getElementById("btn_trnsferir");
btn_transferir.addEventListener("click", ()=>{
   
    transferir();
    resetear_form();

});

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

let btn_transferencias = document.getElementById("btn-transferencias");
btn_transferencias.addEventListener("click",()=>{


    mostrar_transferencias(array_tranferencias)

});