document.write("<center>CIRCUITO ZONA HABITACIONES<br>")


tomacorriente5 = prompt ("\ncircuito zona habitaciones\ningrese numero de tomacorriente que no superen 8");
tomacorriente5 = parseInt(tomacorriente5);


var Wat5 = 0;
var tW5 = 0;
var Proteccion5 = 0;
var corriente5 = 0;
var NCable5 = 0;
var Nducto5 = "1/2 in";
var voltaje5 = 120;
var C5 = 0;

tW5 = 180 * tomacorriente5;
corriente5 = tW5 / voltaje5;
Proteccion5 = corriente5 * 1.15;
NCable4 = corriente5 * 1.25;

if(tomacorriente5==0){
    Wat5=0;
}

if(tomacorriente5>8){document.write("no puedes ingresar mas de 8 tomacorrientes ya superaste la potencia total que es de 1500 watts<br> debes rediseñar el circuito<br>ya que su potencia calculada es " +tomacorriente5*180+"W")}
document.write ("<br><center>Los watts totales son: " +tW5 +"W")
if(tomacorriente5==0){}
else{document.write ("<br>La corriete es: " +corriente5.toFixed(1)+"A")}

if(tomacorriente5==0){}
else{document.write("<br>La tension es: "+voltaje5+"v")}


if(tomacorriente5==0){}
else if (NCable5<=30){
    document.write ("<br>Numero de conductor : calibre 12awg")
} else if (NCable5>30) {
    document.write ("<br>debes rediseñar ya que los tomacorrientes tienen una corriente nominal de 20A")
}
    


if(tomacorriente5==0){}
 else if (Proteccion5>0 && Proteccion5<=20) {
    document.write ("<br>proteccion indicada es: 1*20A")

} else if (Proteccion5>20) {
    document.write("<br>Se recomienda rediseñar el circuito")
}

if(tomacorriente5==0){}
else{document.write ("<br>Diametro de ducto indicado es: " +Nducto5)}



if (tomacorriente5 == 0){
    C5 = 0;
    } else { 
    C5 = 1;
    }