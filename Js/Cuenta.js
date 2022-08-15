let saldo= 0;
parseInt(saldo);

/**
 *Pide un monto a depositar verifica que sea un numero y lo guarda en la variable saldo. 
 */
 function Depositar(){
    let deposito = parseInt(document.getElementById("inputMonto").value);
    let mensaje = " ";
    if (isNaN(deposito)) {
        mensaje ='No se ingreso un valor numerico.';
    }else{
        saldo = saldo+deposito
        mensaje ='Su deposito se realizo correctamente.';      
    };
    let texto = document.getElementById('mensaje');
    texto.innerText = mensaje;
};

function reset_campo(){
    document.getElementById("inputMonto").value = "";
};

function actualizar_saldo(){
    let textoSaldo = document.getElementById('texto-saldo');
    textoSaldo.innerText = "$"+saldo;
    
};

actualizar_saldo();
let btn_depositar = document.getElementById("btn_depositar");
btn_depositar.addEventListener("click",()=>{
    Depositar();
    actualizar_saldo();
    reset_campo();

});