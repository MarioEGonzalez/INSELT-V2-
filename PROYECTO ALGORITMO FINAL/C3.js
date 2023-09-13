document.write("<center>CIRCUITO ZONA DE COCINA<br>")



tomacorriente3 = prompt ("circuito zona de cocina\ningrese numero de tomacorriente que no superen 8");
tomacorriente3 = parseFloat(tomacorriente3);

var Wat3 = 1500;
var Proteccion3 = 0;
var corriente3 = 0;
var NCable3 = 0;
var Nducto3 = "1/2 in";
var voltaje3 = 120;
var C3 = 0;

corriente3 = Wat3 / voltaje3;
Proteccion3 = corriente3 * 1.15;
NCable3 = corriente3 * 1.25;
if(tomacorriente3==0){
    Wat3=0;
}

if(tomacorriente3>8){document.write("no puedes ingresar mas de 8 tomacorrientes ya superaste la potencia total que es de 1500 watts<br> debes rediseñar el circuito<br>ya que su potencia calculada es " +tomacorriente3*180+"W")}

document.write ("<br><center>Los watts totales son: " +Wat3 +"W")

if(tomacorriente3==0){}
else{document.write ("<br>La corriete es: " +corriente3.toFixed(1)+"A")}


if(tomacorriente3==0){}
else{document.write("<br>La tension es: "+voltaje3+"v")}

 


if(tomacorriente3==0){}

else if (NCable3<=30){
    document.write ("<br>Numero de conductor : calibre 12awg")
} else if (NCable3>30) {
    document.write ("<br>debes rediseñar ya que los tomacorrientes tienen una corriente nominal de 20A")
}
    



if(tomacorriente3==0){}

 else if (Proteccion3>0 && Proteccion3<=20) {
    document.write ("<br>proteccion indicada es: 1*20A")

} else if (Proteccion3>20) {
    document.write("<br>Se recomienda rediseñar el circuito")
}


if(tomacorriente3==0){}
else{document.write ("<br>Diametro de ducto indicado es: " +Nducto3)}





if (tomacorriente3 == 0){
    C3= 0;
    } else { 
    C3=1;
    }