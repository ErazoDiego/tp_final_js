let saldo= 0;
parseInt(saldo);

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


function actualizar_saldo(){
    let textoSaldo = document.getElementById('texto-saldo');
    textoSaldo.innerText = "$"+saldo;
        
};

function resetear_campos(){
    let div_2 = document.getElementById("div-2");
    div_2.innerHTML=`
    <div class="row col-md-3 texto-saldo" id="saldo" >
            
    </div>
    <form class="row g-3"id="form">
        <div class="col-md-6"id="caja-texto">

        </div>
        <div class="col-md-6"id="caja-texto-2">

        </div>
        <div class="col-md-6"id="caja-texto-3">

        </div>
       
        <div class="col-12" id="div_boton">
            
        </div>
        <div id="mensaje">
            
        </div>
    
    </form>`

};



let btn_ingresar_dinero= document.getElementById("btn_ingresar_dinero");
btn_ingresar_dinero.addEventListener("click",()=>{
    resetear_campos();
    let formulario =document.getElementById("caja-texto");
    formulario.innerHTML=`
    <label for="inputMonto" class="form-label">Monto</label>
    <input type="number" class="form-control" id="inputMonto" placeholder="Ingrese monto">`
    let boton = document.getElementById("div_boton");
    boton.innerHTML=`<button type="button" class="btn btn-primary" id="btn_depositar">Depositar</button>`
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML=`<h6 id="mensaje"></h6>`;

    let texto_saldo = document.getElementById("saldo");
    texto_saldo.innerHTML=`
    <h2>Saldo</h2>
    <h2 id="texto-saldo"></h2>`;

    
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

    actualizar_saldo();
    let btn_depositar = document.getElementById("btn_depositar");
    btn_depositar.addEventListener("click",()=>{
        Depositar();
        actualizar_saldo();
        reset_campo();

    });

});


let btn_retirar_dinero = document.getElementById("btn_retirar_dinero");
btn_retirar_dinero.addEventListener("click",()=>{
    resetear_campos();
    let formulario =document.getElementById("caja-texto");
    formulario.innerHTML=`
    <label for="inputMonto" class="form-label">Monto</label>
    <input type="number" class="form-control" id="inputMonto" placeholder="Ingrese monto">`
    let boton = document.getElementById("div_boton");
    boton.innerHTML=`<button type="button" class="btn btn-primary" id="btn_retirar">Retirar</button>`
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML=`<h6 id="mensaje"></h6>`;

    let texto_saldo = document.getElementById("saldo");
    texto_saldo.innerHTML=`
    <h2>Saldo</h2>
    <h2 id="texto-saldo"></h2>`;

    function Retiro(){
        let retiro = parseInt(document.getElementById("inputMonto").value);
        let mensaje = " ";
        if (isNaN(retiro)) {
            mensaje ='No se ingreso un valor numerico.';
        }else if(retiro>saldo){
            mensaje ='No posee saldo suficiente'
        }else{
            saldo = saldo-retiro
            mensaje ='Su retiro se realizo correctamente.';      
        };
        let texto = document.getElementById('mensaje');
        texto.innerText = mensaje;
    };

    function reset_campo(){
        document.getElementById("inputMonto").value = "";
    };

    actualizar_saldo();
    let btn_retirar = document.getElementById("btn_retirar");
    btn_retirar.addEventListener("click",()=>{
        Retiro();
        actualizar_saldo();
        reset_campo();

    });
});

let nueva_transferencia = document.getElementById("nueva_transferencia");
nueva_transferencia.addEventListener("click",()=>{
    resetear_campos();
    let formulario_1=document.getElementById("caja-texto");
    formulario_1.innerHTML=`
    <label for="inputNombre" class="form-label">Nombre y Apellido</label>
    <input type="text" class="form-control" id="inputNombre" placeholder="Ingrese nombre">`
    let formulario_2 = document.getElementById("caja-texto-2");
    formulario_2.innerHTML = `
    <label for="inputMontoTransferencia" class="form-label">Monto a Tranferir</label>
    <input type="text" class="form-control" id="inputMontoTransferencia" placeholder="Ingrese monto">`
    let formulario_3 = document.getElementById("caja-texto-3");
    formulario_3.innerHTML = `
    <label for="inputCBU" class="form-label">CBU</label>
    <input type="text" class="form-control" id="inputCBU" placeholder="Ingrese CBU">`
    let div_btn_transferir = document.getElementById("div_boton");
    div_btn_transferir.innerHTML =`
    <button type="button" class="btn btn-primary" id="btn_trnsferir">Transferir</button>`

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
            /**
             * Crea nuevo objeto transferencias.
             */
            const transfererencia_x = new Transferencia(nombre_t_cuenta,monto_transferido,CBU);
            /**
             * Guardo objeto creado en el array.
             */
            array_tranferencias.push(transfererencia_x);
    
        };
        

        const texto = document.getElementById('mensaje');
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
});
