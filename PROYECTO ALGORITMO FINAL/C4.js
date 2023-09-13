document.write("<center>CIRCUITO DE ZONA DE SALA,COMEDOR Y BAÑO<br>")



tomacorriente4 = prompt ("circuito zona de sala,comedor y baño \ningrese numero de tomacorriente que no superen 8");
tomacorriente4 = parseInt(tomacorriente4);


var tW4=0
var Wat4 = 0;
var Proteccion4 = 0;
var corriente4 = 0;
var NCable4 = 0;
var Nducto4 = "1/2 in";
var voltaje4 = 120;
var C4 = 0;

tW4 = 180 * tomacorriente4;
corriente4 = tW4 / voltaje4;
Proteccion4 = corriente4 * 1.15;
NCable4 = corriente4 * 1.25;

if(tomacorriente4==0){
    Wat4=0;
}

if(tomacorriente4>8){document.write("no puedes ingresar mas de 8 tomacorrientes ya superaste la potencia total que es de 1500 watts<br> debes rediseñar el circuito<br>ya que su potencia calculada es " +tomacorriente4*180+"W")}

document.write ("<br><center>Los watts totales son: " +tW4 +"W")

if(tomacorriente4==0){}
else{document.write ("<br>La corriete es: " +corriente4.toFixed(1)+"A")}

if(tomacorriente4==0){}
else{document.write("<br>La tension es: "+voltaje4+"v")}




if(tomacorriente4==0){} 
else if (NCable4<=30){
    document.write ("<br>Numero de conductor : calibre 12awg")
} else if (NCable4>30) {
    document.write ("<br>debes rediseñar ya que los tomacorrientes tienen una corriente nominal de 20A")
}
    


if(tomacorriente4==0){}
else if (Proteccion4>0 && Proteccion4<=20) {
    document.write ("<br>proteccion indicada es: 1*20A")

} else if (Proteccion4>20) {
    document.write("<br>Se recomienda rediseñar el circuito")
}

if(tomacorriente4==0){}
else{document.write ("<br>Diametro de ducto indicado es: " +Nducto4)}



if (tomacorriente4 == 0){
    C4= 0;
    } else { 
    C4=1;
    }