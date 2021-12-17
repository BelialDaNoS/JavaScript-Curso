
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

// Ésto se va a conectar con una base de datos para que muestre lo que hay en stock --> 

const pokemons1 = new pokemons("Pikachu", 13, "Eléctrico", "Electricidad Estática", "6,0 Kg");
const pokemons2 = new pokemons("Voltorb",200, "Eléctrico", "Electricidad Estática / Insonorizar", "10,4 Kg");
const pokemons3 = new pokemons("Charmeleon", 20, "Fuego", "Mar Llamas", "19,0 Kg");
const pokemons4 = new pokemons("Blastoise", 6, "Agua", "Torrente", "85.5 Kg");
const pokemons5 = new pokemons("Ekans", 5, "Veneno", "Mudar / Intimidación", "6,9 Kg");
const pokemons6 = new pokemons("Nidoqueen", 10, "Veneno / Tierra", "Punto Tóxico / Rivalidad", "60,0 Kg");


const bichos = [pokemons1,pokemons2,pokemons3,pokemons4,pokemons5,pokemons6];

let cantpokess = bichos.length;


function listapokess(){

    $("#tarjetita").hide();
    setTimeout(() => {
        $("#pokeload").fadeOut(1000);
    }, 2000);

    setTimeout(() => {
        $("#tarjetita").fadeIn(1000);
    }, 3000);

    for(i=0;i<cantpokess;i++){
         $("#modal-cards-inner").append(`
            <h2 id="pockenstock"> ${(bichos[i].nombre)} </h2>
            `)
    }
}




function infopokess(){
    $(document).ready(() => {
        $("#pokeicono").slideUp(2000)
        .slideDown(2000);
    })
    const lista = [];
    for(i=0;i<cantpokess;i++){
        lista.push("("+(i+1)+") " + bichos[i].nombre);
    }
    let info = prompt("Sobre quepelícula le gustaría saber más?\n"+ lista.join("\n"));
    if(info<1 || info>cantpokess || isNaN(info)){
        alert("ERROR! Indique correctamente el número de la pokemon en stock sobre la cual desea saber");
    }else{
    alert("Nombre: " + bichos[info-1].nombre + "\n" + "Cantidad en Stock: " + bichos[info-1].stock + "\n" + "Tipo: " + bichos[info-1].tipo + "\n" + "Ataque Especial: " + bichos[info-1].ataqueespecial + "\n" + "Peso: " + bichos[info-1].peso)
}}



let total= 0;
for(i=0;i<cantpokess;i++){
total += bichos[i].stock}


const pokeurl = `https://pokeapi.co/api/v2/pokemon/`;



$(document).ready(() => {
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
        $("#totalstock--").text(`El total de Pokémons en stock es de: ${total}`).fadeIn(1400)
        .delay(4000)
        .fadeOut();
    });
    $("#pokeicono").click(()=>{
        pokesongintro.play();
    })
    $("#infobtn").click(infopokess);

    $("#stockbtn").click(listapokess);



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
                peso.textContent=datoPokemon.weight+" decagramitos";
                }
            }
    })
 })
 
 window.addEventListener('load', function() {
    
});





const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    $("#pokeload").fadeIn(2000);  
    for(i=0;i<cantpokess;i++){
        $("#pockenstock").remove();
      };
  });

}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    $("#pokeload").fadeIn(2000);  
    for(i=0;i<cantpokess;i++){
        $("#pockenstock").remove();
      };
  }

});

document.addEventListener("keyup", e => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
    $("#pokeload").fadeIn(2000);  
    for(i=0;i<cantpokess;i++){
      $("#pockenstock").remove();
    };
  }
});