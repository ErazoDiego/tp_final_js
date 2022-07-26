let cont_id=0

class Contacto{
    constructor(nombre,cbu,telefono,email,sexo,id){
        this.nombre=nombre;
        this.cbu=cbu;
        this.telefono=telefono;
        this.email=email;
        this.sexo=sexo;
        this.id = id; 
    };
};
/**
 * Evento de boton Agregar Contacto.
 */
let agregar_contacto=document.getElementById("agregar_contacto");
agregar_contacto.addEventListener("click",()=>{

    resetear_campos();
    /**
     * crea formularios y boton.
     */
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
    let formulario_5 = document.getElementById("caja-texto-5");
    formulario_5.innerHTML = `
    <label for="inputEmail" class="form-label">Sexo</label>
    <select class="form-select" aria-label="Default select example"id="inputSexo">
    <option selected></option>
    <option value="1">Masculino</option>
    <option value="2">Femenino</option>
    </select>`;
    let btn_agregar = document.getElementById("div_boton");
    btn_agregar.innerHTML =`
    <button type="button" class="btn btn-success" type="submit" id="btn_agregar">Agregar</button>`;
    /**
     * Toma los valores, crea un nuevo objeto.
     */
    function nuevo_contacto(){
        let nombre_contacto = document.getElementById("inputNombre").value;
        let CBU = document.getElementById("inputCBU").value;
        let telefono = document.getElementById("inputTelefono").value;
        let email = document.getElementById("inputEmail").value;
        let sexo =document.getElementById("inputSexo").value;

        if (sexo==1) {
            sexo = "./img/barba.png"
        } else {
            sexo= "./img/mujer2.png"
        };

        let verifico =localStorage.getItem("lista_contactos");
        if(verifico){
            let lista_contactos=JSON.parse(localStorage.getItem("lista_contactos"));
            const nuevo_contacto =new Contacto(nombre_contacto,CBU,telefono,email,sexo);
            generar_id(nuevo_contacto);
            lista_contactos.push(nuevo_contacto);
            let lista_en_json = JSON.stringify(lista_contactos);
            localStorage.setItem("lista_contactos",lista_en_json);

        }else{
            const nuevo_contacto =new Contacto(nombre_contacto,CBU,telefono,email,sexo);
            generar_id(nuevo_contacto);
            let lista_contactos = new Array();
            lista_contactos.push(nuevo_contacto);
            let lista_en_json = JSON.stringify(lista_contactos);
            localStorage.setItem("lista_contactos",lista_en_json);

        }

        Toastify({

            text: "Contacto guardado.",
            
            duration: 3000
            
        }).showToast();

    };


    function generar_id(nuevo_contacto){
        let verifico= localStorage.getItem("cont_id");
        if(verifico){
            let id_guardado =JSON.parse(localStorage.getItem("cont_id"));
            cont_id= id_guardado;
            nuevo_contacto.id= cont_id;
            cont_id++;
            let id_en_json= JSON.stringify(cont_id);
            localStorage.setItem("cont_id",id_en_json);
        }else{
            nuevo_contacto.id= cont_id;
            cont_id++;
            let id_en_json= JSON.stringify(cont_id);
            localStorage.setItem("cont_id",id_en_json);
        }
        
    };





    /**
     * borra datos ingresados.
     */
    function recet_campos(){
        document.getElementById("inputNombre").value="";
        document.getElementById("inputCBU").value="";
        document.getElementById("inputTelefono").value="";
        document.getElementById("inputEmail").value="";
        document.getElementById("inputSexo").value="";
    };

    /**
     * Evento boton Agregar Contacto.
     */
    let btn_agregar_cont = document.getElementById("btn_agregar");
    btn_agregar_cont.addEventListener("click",()=>{
        nuevo_contacto();
        recet_campos();
        
    });
});


/**
 * crea tabla html con los titulos.
 */
function actualiza_lista(){
    limpiar_campo()

    /**
     * Inserta las filas con los datos.
     */
    let contactos=JSON.parse(localStorage.getItem('lista_contactos'));

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(imprime_contacto(contactos))
        },500)
    });

};
/**
 * inserta los contactos en la tabla
 * @param {} contactos 
 */
function imprime_contacto(contactos){
    for(const contacto of contactos){
    
        let contenedor= document.getElementById("lista-contactos");
        const fila= document.createElement('tr');
        fila.innerHTML=`
        <th scope="row"><img src="${contacto.sexo}" alt="icono"  width=40px height=40px></th>
        <td>${contacto.nombre}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.cbu}</td>
        <td>${contacto.email}</td>
        <td><a href="javascript:eliminar(${contacto.id})">
        <button type="button" class=" btn-eliminar btn btn-outline-danger">Eliminar</button>
        </a></td>`
  
    
        contenedor.appendChild(fila);
    };
};

/**
 * limpia el html y prepara la tabla para mostrar los contactos o el resultado de la busqueda.
 */
function limpiar_campo(){
    let div_2 = document.getElementById("div-2");
    div_2.innerHTML=`
    <div class="row col-md-6 texto-saldo" id="saldo" >
        <h2>Contactos</h2>  
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" id="input_buscar_nombre" placeholder="Ingrese Nombre" aria-label="Search">
            <a href="javascript:buscar_contacto()">
                <button class="btn btn-success" type="button">Buscar</button>
            </a>
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
};
/**
 * busca un contacto por el nombre
 */  
function buscar_contacto(){

    let dato = document.getElementById("input_buscar_nombre").value
    let contactos=JSON.parse(localStorage.getItem('lista_contactos'));
    let resultado= contactos.filter(contacto=>contacto.nombre.toLowerCase().includes(dato.toLowerCase()))
    limpiar_campo()
    imprime_contacto(resultado)
    
}





/**
 * Evento de boton Ver Contactos.
 */
let ver_contacto= document.getElementById("btn-ver-contacto");
ver_contacto.addEventListener("click",()=>{
    
    actualiza_lista();
    
    

});
   

// A partir de un id se elimina el producto
function eliminar( id ) { 
    let lista_contactos=JSON.parse(localStorage.getItem("lista_contactos"));
    lista_contactos = lista_contactos.filter(contacto=>contacto.id !=id);
    let lista_en_json = JSON.stringify(lista_contactos);
    localStorage.setItem("lista_contactos",lista_en_json);

    actualiza_lista()
    
    
      
}