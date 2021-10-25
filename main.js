
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
const dvd7 = new Dvd();


const peliculas = [dvd1,dvd2,dvd3,dvd4,dvd5,dvd6];

let cantpelis = peliculas.length;

let titulo = "dvd" + (cantpelis + 1);

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


function nombrepagina(){
    let nombrepagina = document.getElementById("nombrepagina");
    alert("Entiendo que el nombre de la página pueda ser medio repetitivo o muy básico, pero ésto se da porque quien creó la página se quedó sin ideas y no tuvo una mejor que usar algo conocido y transformarlo al digital.");
    let nuevonombre = prompt("Así que te crees muy inteligente eh? Crees que podes poner un mejor nombre que el que le puse yo? \n\nA ver, que nombre se te ocurre??");
    nombrepagina.innerHTML = nuevonombre;
    setTimeout(function(){alert("Me gustaba más mi nombre... pero al parecer " + nuevonombre + " no queda tan mal.")}, 2000);
}


// Función a agregar cuando aprenda a controlar la BD

// function agregpelis(){
//     let name = prompt("Indique el título de la película:");
//     let cant = prompt("Indique la cantidad de Dvd's que ingresa:");
//     let sino = prompt("Indique la sinposis de la película:");
//     let idi = prompt("Indique el idioma de la película:");
//     let subs = prompt("Indique si tiene subtítulos y en que idioma están:");
//     return(name, cant, sino, idi, subs);
// }





function inicio(){
    let consulta = parseInt(prompt("¿Que desea hacer? \n(1) Ver películas en stock \n(2) Ver información detallada de alguna película \n(3) Cantidad total de películas \n(4) Agregar una película al inventario \n(5) Cambiar el nombre de la página"))
    if(isNaN(consulta) || consulta < 1 || consulta > 5){
        alert("Ahora aprendí a recargar la página, así que te voy a recargar la página y cuando vuelva mas te vale que escribas un número DE LAS OPCIONES sino se te arma la podrida");
    location.reload();}
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
            let total= 0;
            for(i=0;i<cantpelis;i++){
                total += peliculas[i].stock
            }
            alert("El total de películas en stock es de: " + total );
            inicio();
            break;
        case 4:
            alert("Actualmente ésta opción se encuentra deshabilitada por desconocimiento del creador de éste script.")
            inicio();
            break;
        case 5:
            nombrepagina();
            setTimeout(inicio,4000);
            break;
        }
    }


setTimeout(inicio,1000)



