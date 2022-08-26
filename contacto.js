

class Contacto{
    constructor(nombre,cbu,telefono,email){
        this.nombre=nombre;
        this.cbu=cbu;
        this.telefono=telefono;
        this.email=email;
    };
};

let agregar_contacto=document.getElementById("agregar_contacto");
agregar_contacto.addEventListener("click",()=>{

    resetear_campos();
    let texto_saldo = document.getElementById("saldo");
    texto_saldo.innerHTML=`
    <h2>Agregar Contacto</h2>`;

    let formulario_1=document.getElementById("caja-texto");
    formulario_1.innerHTML=`
    <label for="inputNombre" class="form-label">Nombre y Apellido</label>
    <input type="text" class="form-control" id="inputNombre" placeholder="Ingrese nombre">`;

    let formulario_2 = document.getElementById("caja-texto-2");
    formulario_2.innerHTML = `
    <label for="inputCBU" class="form-label">CBU</label>
    <input type="number" class="form-control" id="inputCBU" placeholder="Ingrese CBU">`;

    let formulario_3 = document.getElementById("caja-texto-3");
    formulario_3.innerHTML = `
    <label for="inputTelefono" class="form-label">Numero de Telefono</label>
    <input type="number" class="form-control" id="inputTelefono" placeholder="Ingrese Numero de telefono">`;
    
    let formulario_4 = document.getElementById("caja-texto-4");
    formulario_4.innerHTML = `
    <label for="inputEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Ingrese Email">`;

    let btn_agregar = document.getElementById("div_boton");
    btn_agregar.innerHTML =`
    <button type="button" class="btn btn-success" type="submit" id="btn_agregar">Agregar</button>`;

    function nuevo_contacto(){
        let nombre_contacto = document.getElementById("inputNombre").value;
        let CBU = document.getElementById("inputCBU").value;
        let telefono = document.getElementById("inputTelefono").value;
        let email = document.getElementById("inputEmail").value;

        const nuevo_contacto =new Contacto(nombre_contacto,CBU,telefono,email);

        guardar_contacto(nuevo_contacto);
        Toastify({

            text: "Contacto guardado.",
            
            duration: 3000
            
        }).showToast();

    };

    function recet_campos(){
        document.getElementById("inputNombre").value="";
        document.getElementById("inputCBU").value="";
        document.getElementById("inputTelefono").value="";
        document.getElementById("inputEmail").value="";
    };

    function guardar_contacto(nuevo_contacto){
        let verifico =localStorage.getItem("lista_contactos");
        if(verifico){
            let lista_contactos=JSON.parse(localStorage.getItem("lista_contactos"));
            lista_contactos.push(nuevo_contacto);

            let lista_en_json =JSON.stringify(lista_contactos);
            localStorage.setItem("lista_contactos",lista_en_json);
        }else{
            let lista_contactos = new Array();
            lista_contactos.push(nuevo_contacto);
            let lista_en_json = JSON.stringify(lista_contactos);
            localStorage.setItem("lista_contactos",lista_en_json);
        }
    };

    let btn_agregar_cont = document.getElementById("btn_agregar");
    btn_agregar_cont.addEventListener("click",()=>{
        nuevo_contacto();
        recet_campos();
        
    });
});

let ver_contacto= document.getElementById("btn-ver-contacto");
ver_contacto.addEventListener("click",()=>{

    let div_2 = document.getElementById("div-2");
    div_2.innerHTML=`
    <div class="row col-md-6 texto-saldo" id="saldo" >
        <h2>Contactos</h2>  
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Ingrese Nombre" aria-label="Search">
            <button class="btn btn-success" type="submit">Buscar</button>
        </form>    
    </div>
    <div class="row-md-6"id="caja-texto">
    <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">CBU</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody id="lista-contactos">
            </tbody>
        </table>

    </div>`;

    let contactos=JSON.parse(localStorage.getItem('lista_contactos'));
    for(const contacto of contactos){
        let contenedor= document.getElementById("lista-contactos");
        const fila= document.createElement('tr');
        fila.innerHTML=`
        <th scope="row"></th>
        <td>${contacto.nombre}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.cbu}</td>
        <td>${contacto.email}</td>
        <td><button type="button" class="btn btn-outline-danger">Eliminar</button></td>`
        contenedor.appendChild(fila);
    };
        
});