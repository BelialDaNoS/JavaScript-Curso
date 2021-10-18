const iva = 0.21
const pais = 0.8
const ganancias = 0.35
alert("En éste simulador de impuestos, usted verá cuales son los impuestos que impactan en su compra de steam")
inicio()
function inicio(){
    consulta = prompt("Indique en número, cual de los impuestos desea calcular: \n(1) IVA total \n(2) Impuesto país \n(3) Impuesto a las ganancias \n(4) Total")
    if(consulta !=1 && consulta!=2 && consulta !=3 && consulta!=4){
        alert("Porfavor, elija una de las opciones correctamente, escribiendo solamente el número de ésta.");
        inicio();}
}












// alert("Argentina, un país.")
