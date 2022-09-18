

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
        
        <button type="button" class="swal2-confirm swal2-styled" onclick='registrar_nuevo_usuario=0;Swal.close()'>Cancelar</button>
        
        <button type="button" class="swal2-confirm swal2-styled" onclick='registrar_nuevo_usuario=1;Swal.clickConfirm()'>Crear</button>`,

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
    await swal.fire({
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
            let usuario =document.getElementById("inputUsuario").value;
            let password =document.getElementById("inputPassword").value;
            if(!usuario){
                Swal.showValidationMessage("No ingreso usuario")
                return false;
            }
            if(!password){
                Swal.showValidationMessage("No ingreso contraseña");
                return false;
            }


        }
    });
};
menu_inicio();