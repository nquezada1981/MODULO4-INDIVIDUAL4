import { data } from "./data.js";


    function ordenarId(lista,callback){
        setTimeout(()=>{            
            const ordenarId =lista.sort(((a, b) => a.id - b.id));
            callback();
            console.log("Ordenado por ID");
        },3000)
    }


    function ordenarName(lista,callback){
        setTimeout(()=>{
            
            const ordenadoName = lista.sort((x,y) => x.name.localeCompare(y.name));
            callback();
            console.log("Ordenado por nombre");
        },3000)
    }


function mostrarDatos(){
    setTimeout(()=>{

        
        data.forEach(datos=>{
            console.log(datos)
        });
        
    },1000)
}
// Descomentar para ver pokémones ordenados segun ID, y comentar la siguiente linea
//ordenarId(data,mostrarDatos)


ordenarName(data,mostrarDatos)