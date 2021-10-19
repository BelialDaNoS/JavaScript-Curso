
function Dvd(nombre, stock, sinopsis, idioma, subtitulos) {
    this.nombre = nombre
    this.stock = stock;
    this.sinopsis = sinopsis;
    this.idioma = idioma;
    this.subtitulos = subtitulos;
}

let info = 0;

const dvd1 = new Dvd("πratas del caribe", 500, "lorem ipsum", "caribeño", "no")
const dvd2 = new Dvd("El señor de los novillos", "3 dvd's para los de Palermo, 7 para los wachiturros, nueve para los del bajo flores, uno para Alberto", "lorem ipsum", "Nativo americano / inglés", "si")
const dvd3 = new Dvd("Muchahontas", 20, "lorem ipsum", "Nativo americano / inglés", "si")
const dvd4 = new Dvd("Estrella guerras", 666, "lorem ipsum", "muchos", "no")
const dvd5 = new Dvd("Matrixulado", 01, "lorem ipsum", "011010010010", "depende")
const dvd6 = new Dvd("Your ass is park", 1, "lorem ipsum", "*Sonidos de dinosaurios*", "A A AAAAA no dijiste la palabra mágica")
alert("Inventario de películas digitales")




function inicio(){
    let consulta = parseInt(prompt("¿Que desea hacer? \n(1) Ver películas en stock \n(2) Ver información detallada de alguna película \n(3) Cantidad total de películas"))
    if(isNaN(consulta) || consulta < 1 || consulta > 3){
        alert("Ahora aprendí a recargar la página, así que te voy a recargar la página y cuando vuelva mas te vale que escribas un número DE LAS OPCIONES sino se te arma la podrida");
    location.reload();
}

switch(consulta){
    case 1:
        alert("Actualmente tenemos éstas películas en stock:\n" + dvd1.nombre + "\n" + dvd2.nombre + "\n" + dvd3.nombre + "\n" + dvd4.nombre + "\n" + dvd5.nombre + "\n" + dvd6.nombre);
        inicio();
        break;
    case 2:
     info = parseInt(prompt("Sobre que película le gustaría saber más?\n" +"(1)"+ dvd1.nombre + "\n" +"(2)"+ dvd2.nombre + "\n" +"(3)"+ dvd3.nombre + "\n" +"(4)"+ dvd4.nombre + "\n" +"(5)"+ dvd5.nombre + "\n" +"(6)"+ dvd6.nombre));
        switch(info){
            case 1:
                alert("Nombre: " + dvd1.nombre + "\n Cantidad en Stock: " + dvd1.stock + "\n Sinopsis: " + dvd1.sinopsis + "\n Idioma: " + dvd1.idioma + "\n Subtitulos: " + dvd1.subtitulos);
                inicio();
                break;
            case 2:
                alert("Nombre: " + dvd2.nombre + "\n Cantidad en Stock: " + dvd2.stock + "\n Sinopsis: " + dvd2.sinopsis + "\n Idioma: " + dvd2.idioma + "\n Subtitulos: " + dvd2.subtitulos);
                inicio();
                break;
            case 3:
                alert("Nombre: " + dvd3.nombre + "\n Cantidad en Stock: " + dvd3.stock + "\n Sinopsis: " + dvd3.sinopsis + "\n Idioma: " + dvd3.idioma + "\n Subtitulos: " + dvd3.subtitulos);
                inicio();
                break;
            case 4:
                alert("Nombre: " + dvd4.nombre + "\n Cantidad en Stock: " + dvd4.stock + "\n Sinopsis: " + dvd4.sinopsis + "\n Idioma: " + dvd4.idioma + "\n Subtitulos: " + dvd4.subtitulos);
                inicio();
                break;
            case 5:
                alert("Nombre: " + dvd5.nombre + "\n Cantidad en Stock: " + dvd5.stock + "\n Sinopsis: " + dvd5.sinopsis + "\n Idioma: " + dvd5.idioma + "\n Subtitulos: " + dvd5.subtitulos);
                inicio();
                break;
            case 6:
                alert("Nombre: " + dvd6.nombre + "\n Cantidad en Stock: " + dvd6.stock + "\n Sinopsis: " + dvd6.sinopsis + "\n Idioma: " + dvd6.idioma + "\n Subtitulos: " + dvd6.subtitulos);
                inicio();
                break;
            default:
                alert("No es un número válido. Indique el número de la película de la cual desea saber.")
        }
        inicio();
        break;
    case 3:
        alert("El total de películas es de: " + (parseInt(dvd1.stock) + 20  + parseInt(dvd3.stock) + parseInt(dvd4.stock) + parseInt(dvd5.stock) + parseInt(dvd6.stock)));
        inicio();
        break;
    }
}
inicio();


