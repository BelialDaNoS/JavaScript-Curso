
class Dvd{
    constructor(nombre, stock, sinopsis, idioma, subtitulos) {
        this.nombre = nombre
        this.stock = stock;
        this.sinopsis = sinopsis;
        this.idioma = idioma;
        this.subtitulos = subtitulos;
}}


const dvd1 = new Dvd("πratas del caribe", 500, "lorem ipsum", "caribeño", "no");
const dvd2 = new Dvd("El señor de los novillos",20, "lorem ipsum", "Nativo americano / inglés", "si");
// "3 dvd's para los de Palermo, 7 para los wachiturros, nueve para los del bajo flores, uno para Alberto"
const dvd3 = new Dvd("Muchahontas", 20, "lorem ipsum", "Nativo americano / inglés", "si");
const dvd4 = new Dvd("Estrella guerras", 666, "lorem ipsum", "muchos", "no");
const dvd5 = new Dvd("Matrixulado", 01, "lorem ipsum", "011010010010", "depende");
const dvd6 = new Dvd("Your ass is park", 1, "lorem ipsum", "*Sonidos de dinosaurios*", "A A AAAAA no dijiste la palabra mágica");

const peliculas = [dvd1,dvd2,dvd3,dvd4,dvd5,dvd6];

let cantpelis = peliculas.length;


function listapelis(){
    let lista = []
    for(i=0;i<cantpelis;i++){
        lista.push(peliculas[i].nombre);
    }
    alert("Actualmente tenemos éstas películas en stock:\n" + lista.join("\n"));
}



function infopelis(){
    const lista = [];
    for(i=0;i<cantpelis;i++){
        lista.push("("+(i+1)+") " +peliculas[i].nombre);
    }
    let info = prompt("Sobre quepelícula le gustaría saber más?\n"+ lista.join("\n"));
    if(info<1 || info>cantpelis || isNaN(info)){
        alert("ERROR! Indique correctamente el número de la pelícual sobre la cual desea saber");
        infopelis();
    }else{
    alert("Nombre: " + peliculas[info-1].nombre + "\n" + "Cantidad en Stock: " + peliculas[info-1].stock + "\n" + "Sinopsis: " + peliculas[info-1].sinopsis + "\n" + "Idioma: " + peliculas[info-1].idioma + "\n" + "Subtítulos: " + peliculas[info-1].subtitulos)
}}





function inicio(){
    let consulta = parseInt(prompt("¿Que desea hacer? \n(1) Ver películas en stock \n(2) Ver información detallada de alguna película \n(3) Cantidad total de películas \n(4) Agregar una película al inventario"))
    if(isNaN(consulta) || consulta < 1 || consulta > 4){
        alert("Ahora aprendí a recargar la página, así que te voy a recargar la página y cuando vuelva mas te vale que escribas un número DE LAS OPCIONES sino se te arma la podrida");
    location.reload();
    }

    switch(consulta){
        case 1:
            listapelis();
            inicio();
            break;
        case 2:
            infopelis();
            inicio();
            break;
        case 3:
            alert("El total de películas es de: " + (parseInt(dvd1.stock) + 20  + parseInt(dvd3.stock) + parseInt(dvd4.stock) + parseInt(dvd5.stock) + parseInt(dvd6.stock)));
            inicio();
            break;
        }
    }

    inicio();