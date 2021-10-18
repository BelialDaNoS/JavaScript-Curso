
class Dvd{
    constructor(nombre, stock, sinopsis, idioma, subtitulos) {
        this.nombre = nombre
        this.stock = stock;
        this.sinopsis = sinopsis;
        this.idioma = idioma;
        this.subtitulos = subtitulos;
}}


const dvd1 = new Dvd("πratas del caribe", 500, "lorem ipsum", "caribeño", "no")
const dvd2 = new Dvd("El señor de los novillos", "3 dvd's para los de Palermo, 7 para los wachiturros, nueve para los del bajo flores, uno para Alberto", "lorem ipsum", "Nativo americano / inglés", "si")
const dvd3 = new Dvd("Muchahontas", 20, "lorem ipsum", "Nativo americano / inglés", "si")
const dvd4 = new Dvd("Estrella guerras", 666, "lorem ipsum", "muchos", "no")
const dvd5 = new Dvd("Matrixulado", 01, "lorem ipsum", "011010010010", "depende")
const dvd6 = new Dvd("Your ass is park", 1, "lorem ipsum", "*Sonidos de dinosaurios*", "A A AAAAA no dijiste la palabra mágica")

const peliculas = [dvd1,dvd2,dvd3,dvd4,dvd5,dvd6];

function inicio(){
    let consulta = parseInt(prompt("¿Que desea hacer? \n(1) Ver películas en stock \n(2) Ver información detallada de alguna película \n(3) Cantidad total de películas"))
    if(isNaN(consulta) || consulta < 1 || consulta > 4){
        alert("Ahora aprendí a recargar la página, así que te voy a recargar la página y cuando vuelva mas te vale que escribas un número DE LAS OPCIONES sino se te arma la podrida");
    location.reload();
}}
