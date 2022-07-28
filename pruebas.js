

//Array donde guardo los objetos
const array_De_Datos = [];


//clase constructora de objeto
class Objeto_A_Crear{

    constructor(dato_1 , dato_2 , dato_3 , dato_4){

        this.nombre = dato_1;
        this.dni = dato_2;
        this.numero = dato_3;
        this.otro_dato = dato_4; 

    }

}


//variables usadas en la funcion
let nombre= 0
let dni = 0
let numero = 0
let otro_dato = 0

//funcion para pedir datos, crear objeto y guardar en el array
function Pedir_Datos() {

    //datos ingresados por el usuario
    nombre = prompt("Ingrese nombre ")
    dni = prompt("Ingrese DNI:")
    numero =parseInt(prompt("Ingrese numero "))
    otro_dato = prompt("Ingrese otro dato")
    
    //crea un nuevo objeto
    const nuevo_objeto = new Objeto_A_Crear(nombre,dni,numero,otro_dato);

    //guarda el objeto en el array
    array_De_Datos.push({nuevo_objeto})
}
