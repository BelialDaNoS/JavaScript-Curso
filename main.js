
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
    $(document).ready(() => {
        $("#iconopelis").slideUp(2000)
        .slideDown(2000);
    })
    const lista = [];
    for(i=0;i<cantpelis;i++){
        lista.push("("+(i+1)+") " + peliculas[i].nombre);
    }
    let info = prompt("Sobre quepelícula le gustaría saber más?\n"+ lista.join("\n"));
    if(info<1 || info>cantpelis || isNaN(info)){
        alert("ERROR! Indique correctamente el número de la pelícual sobre la cual desea saber");
    }else{
    alert("Nombre: " + peliculas[info-1].nombre + "\n" + "Cantidad en Stock: " + peliculas[info-1].stock + "\n" + "Sinopsis: " + peliculas[info-1].sinopsis + "\n" + "Idioma: " + peliculas[info-1].idioma + "\n" + "Subtítulos: " + peliculas[info-1].subtitulos)
}}




function nombrepagina(){
    $(document).ready(() => {
        $("#iconopelis").slideUp(2000)
        .slideDown(2000);
        alert("Entiendo que el nombre de la página pueda ser medio repetitivo o muy básico, pero ésto se da porque quien creó la página se quedó sin ideas y no tuvo una mejor que usar algo conocido y transformarlo al digital.");
        $("#nombrepagina").fadeOut(600)
        let nuevonombre = prompt("Así que te crees muy inteligente eh? Crees que podes poner un mejor nombre que el que le puse yo? \n\nA ver, que nombre se te ocurre??");
        if (nuevonombre == ""){
            alert("Bueno, tampoco es que mi nombre sea tan malo :c \n Te dejo el que mio");
            $("#nombrepagina").fadeIn(800)
            $("#nombrepagina").text("BloqueBuster");
            return;
        }else{
            $("#nombrepagina").fadeIn(800)
            $("#nombrepagina").text(nuevonombre).toString();
            setTimeout(function(){alert("Me gustaba más mi nombre... pero al parecer '" + nuevonombre.toUpperCase() + "' no queda tan mal.")}, 2000);
            
        }
        
    })
}





let total= 0;
for(i=0;i<cantpelis;i++){
total += peliculas[i].stock}


$(document).ready(() => {
    $("#cambiarnombrepagina").on('click',nombrepagina);
    $("#totalbtn").on('click',()=> {
        $("#iconopelis").slideUp(2000)
        .delay(2000)
        .slideDown(2000);
        $("#totalbtn").hide()
        .delay(5500)
        .fadeIn(1500);
        $("#totalstock").fadeOut(200)
        .delay(5500)
        .fadeIn(1500);
        $("#totalstock-padre").append(`<h2 id="totalstock--"></h2>`);
        $("#totalstock--").hide();
        $("#totalstock--").text(`El total de películas es de: ${total}`).fadeIn(1400)
        .delay(4000)
        .fadeOut();

    });
    $("#infobtn").click(infopelis);
    $("#stockbtn").click(listapelis);
 })



