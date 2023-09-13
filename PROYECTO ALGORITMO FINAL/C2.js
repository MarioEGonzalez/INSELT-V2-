document.write("<center>CIRCUITO ZONA DE PATIO<br>")



tomacorriente2 = prompt ("circuito zona de patio\ningrese numero de tomacorriente que no superen 8");
tomacorriente2 = parseInt(tomacorriente2);

var WaT2 = 1500;
var Proteccion2 = 0;
var corriente2 = 0;
var NCable2 = 0;
var Nducto2 = "1/2 in";
var voltaje2 = 120;
var C2 = 0;

corriente2 = WaT2 / voltaje2;
Proteccion2 = corriente2 * 1.15;
NCable2 = corriente2 * 1.25;

if(tomacorriente2==0){
WaT2=0;
}

if(tomacorriente2>8){document.write("no puedes ingresar mas de 8 tomacorrientes ya superaste la potencia total que es de 1500 watts<br> debes rediseñar el circuito<br>ya que su potencia calculada es " +tomacorriente2*180+"W")}


document.write ("<br><center>Los watts totales son: " +WaT2 +"W")

if (tomacorriente2==0){ 
} else {
    document.write ("<br>La corriente es: " +corriente2.toFixed(2)+"A") 
}


if (tomacorriente2==0){ 
} else {
    document.write ("<br>La tension es:"+voltaje2+"v") 
}


if (tomacorriente2==0){
}else if (NCable2>0&&NCable2<=30){
    document.write ("<br>Numero de conductor : calibre 12awg")
} else if (NCable2>30) {
    document.write ("<br>debes rediseñar ya que los tomacorrientes tienen una corriente nominal de 20A")
} 

    

if (tomacorriente2==0){
} else if (Proteccion2>0 && Proteccion2<=20) {
    document.write ("<br>proteccion indicada es : 1*20A")

} else if (Proteccion2>20) {
    document.write("<br>Se recomienda rediseñar el circuito")
}


if (tomacorriente2==0){ 
} else {
    document.write ("<br>Diametro ducto indicado: " +Nducto2) 
}
 

if (tomacorriente2 == 0){
    C2= 0;
    } else { 
    C2=1;
    }