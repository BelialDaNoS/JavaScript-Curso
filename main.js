
class pokemons{
    constructor(nombre, stock, tipo, ataqueespecial, peso) {
        this.nombre = nombre
        this.stock = stock;
        this.tipo = tipo;
        this.ataqueespecial = ataqueespecial;
        this.peso = peso;
}}


const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none";
    document.body.appendChild(sonido);
    return sonido;
};


const pokesongintro = cargarSonido("./recursos/pokesong intro.webm"); //<-- Acá va la canción del intro


const pokemons1 = new pokemons("Pikachu", 13, "Eléctrico", "Electricidad Estática", "6,0");
const pokemons2 = new pokemons("voltorb",200, "Eléctrico", "Electricidad Estática / Insonorizar", "si");
// "3 pokemons's para los de Palermo, 7 para los wachiturros, nueve para los del bajo flores, uno para Alberto"
const pokemons3 = new pokemons("Muchahontas", 20, "lorem ipsum", "Nativo americano / inglés", "si");
const pokemons4 = new pokemons("Estrella guerras", 666, "lorem ipsum", "muchos", "no");
const pokemons5 = new pokemons("Matrixulado", 01, "lorem ipsum", "011010010010", "depende");
const pokemons6 = new pokemons("Your ass is park", 1, "lorem ipsum", "*Sonidos de dinosaurios*", "A A AAAAA no dijiste la palabra mágica");
const pokemons7 = new pokemons();


const bichos = [pokemons1,pokemons2,pokemons3,pokemons4,pokemons5,pokemons6];

let cantpelis = bichos.length;

let titulo = "pokemons" + (cantpelis + 1);

function listapelis(){
    let lista = []
    for(i=0;i<cantpelis;i++){
        lista.push(bichos[i].nombre);
    }
    alert("Actualmente tenemos éstas películas en stock:\n" + lista.join("\n"));
}



function infopelis(){
    $(document).ready(() => {
        $("#pokeicono").slideUp(2000)
        .slideDown(2000);
    })
    const lista = [];
    for(i=0;i<cantpelis;i++){
        lista.push("("+(i+1)+") " + bichos[i].nombre);
    }
    let info = prompt("Sobre quepelícula le gustaría saber más?\n"+ lista.join("\n"));
    if(info<1 || info>cantpelis || isNaN(info)){
        alert("ERROR! Indique correctamente el número de la pelícual sobre la cual desea saber");
    }else{
    alert("Nombre: " + bichos[info-1].nombre + "\n" + "Cantidad en Stock: " + bichos[info-1].stock + "\n" + "Tipo: " + bichos[info-1].tipo + "\n" + "Ataque Especial: " + bichos[info-1].ataqueespecial + "\n" + "Peso: " + bichos[info-1].peso)
}}




function nombrepagina(){
    $(document).ready(() => {
        $("#pokeicono").slideUp(2000)
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
total += bichos[i].stock}


const pokeurl = `https://pokeapi.co/api/v2/pokemon/`;



$(document).ready(() => {
    $("#cambiarnombrepagina").on('click',nombrepagina);
    $("#totalbtn").on('click',()=> {
        $("#pokeicono").slideUp(2000)
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
    $("#pokeicono").click(()=>{
        pokesongintro.play();
    })
    $("#infobtn").click(infopelis);
    $("#stockbtn").click(listapelis);



    $("#pokeboton").click(()=>{
            let caja=(document.getElementById('caja').value).toLowerCase();
            let img=document.getElementById('img');
            let name=document.getElementById('name');
            let id=document.getElementById('id');
            let peso=document.getElementById('peso');
            let xhttp=new XMLHttpRequest();
            xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${caja}`);
            xhttp.send();

            xhttp.onreadystatechange=function () {
                if(this.readyState==4 && this.status==200)
                {
                let datoPokemon=JSON.parse(this.responseText);
                console.log(datoPokemon);
                img.setAttribute("src",datoPokemon.sprites.front_default);
                name.textContent=datoPokemon.name;
                id.textContent=datoPokemon.id;
                peso.textContent=datoPokemon.weight+" gramitos";
                }
            }
    })
 })
 
 window.addEventListener('load', function() {
    
});
