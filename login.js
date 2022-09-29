let base_de_datos_login= {}


class Usuario {
    constructor(new_usuario) {
      this.usuario = new_usuario.usuario;
      this.contraseña = new_usuario.contraseña;
    }

  
};

async function menu_inicio(){
    opcion_menu_inicio= -1
    await swal.fire({
        title:"Bienvenido",
        showConfirmButton:false,
        html:`
        <button type="button" class="swal2-confirm swal2-styled" onclick='opcion_menu_inicio=0;Swal.close()'>Login</button>
        <br>
        <button type="button" class="swal2-confirm swal2-styled" onclick='opcion_menu_inicio=1;Swal.close()'>Registrar nuevo usuario</button>
        `
    });
    switch(opcion_menu_inicio){
    case 0:
        login();
        break;
    case 1:
        registrar_nuevo_usuario();
        break;
    default:
        await menu_inicio()
        break;
    }
};

async function registrar_nuevo_usuario(){
    opcion_registrar=-1;
    await swal.fire({
        title:"Registrar",
        showConfirmButton:false,
        html:`
        <input type="text" class="swal2-input" id="inputNewUsuario" placeholder="Usuario">
        <input type="password" class="swal2-input" id="inputNewPassword" placeholder="Contraseña">

        <button type="button" class="swal2-confirm swal2-styled" onclick=' opcion_registrar=0;Swal.close()'>Cancelar</button>
        
        <button type="button" class="swal2-confirm swal2-styled" onclick=' opcion_registrar=1;Swal.clickConfirm()'>Crear</button>`,

        preConfirmNewUsuario:()=>{
            let usuario =document.getElementById("inputNewUsuario").value;
            let password =document.getElementById("inputNewPassword").value;
            if(!usuario){
                Swal.showValidationMessage("No ingreso usuario")
                return false;
            }
            if(!password){
                Swal.showValidationMessage("No ingreso contraseña");
                return false;
            }
            const nuevo_usuario = new Usuario(usuario,password)
            base_de_datos_login.push(nuevo_usuario)
            guardar_datos(nuevo_usuario)
            return true;
            

        }

    });
    switch(opcion_registrar){
        case 0:
            menu_inicio();
            break;
        case 1:
            
            break;
        default:
            await menu_inicio()
            break;
    }
}


async function login(){
    let{value:datos}=await swal.fire({
        title:"Bienvenido",
        confirmButtonText:"login",
        html:`
        <form>
            <div class="">
                
                <input type="text" class="swal2-input" id="inputUsuario" placeholder="Usuario">
                <input type="password" class="swal2-input" id="inputPassword" placeholder="Contraseña">
                
            </div>
        </form>`,

        preConfirm:()=>{
            let user =document.getElementById("inputUsuario").value;
            let password =document.getElementById("inputPassword").value;
            if(!user){
                Swal.showValidationMessage("No ingreso usuario")
                return false;
            }
            if(!password){
                Swal.showValidationMessage("No ingreso contraseña");
                return false;
            }


            let datos = JSON.parse(localStorage.getItem("lista_usuarios"))
            
            let encontrado=false
            let i =0
            while (!encontrado&& i !=datos.length) {
                if (datos[i].usuario==user) {
                    encontrado=datos[i]
                }
                i++
            }
            
            if (encontrado.usuario !=user) {
                Swal.showValidationMessage("El usuario no existe")
                return false;
            }
            if (encontrado.contraseña !=password) {
                Swal.showValidationMessage("Contraseña incorrecta");
                return false;
            }
            return datos



        }

        
    });
    return datos


};
/**
 *carga los datos de el archivo json 
 */
async function iniciar(){
    fetch('./usuarios_json.json')
        .then(respuesta =>respuesta.json())
        .then(resultado =>{
            
            let lista_usuarios = JSON.stringify(resultado.usuarios)
            localStorage.setItem("lista_usuarios",lista_usuarios)
            base_de_datos_login= lista_usuarios
            console.log(base_de_datos_login)
    })
};

function guardar_datos(nuevo_usuario){
    let verifico=localStorage.getItem("lista_usuarios");
    if(verifico){
        let lista_de_usuarios =JSON.parse(localStorage.getItem("lista_usuarios"));
        lista_de_usuarios.push(nuevo_usuario)
        let lista_en_json=JSON.stringify(lista_de_usuarios);
        localStorage.setItem("lista_usuarios",lista_en_json);
    }else{
        let lista_de_usuarios =new Array();
        lista_de_usuarios.push(nuevo_usuario)
        let lista_en_json=JSON.stringify(lista_de_usuarios);
        localStorage.setItem("lista_usuarios",lista_en_json);
    }
}

iniciar();
menu_inicio();
