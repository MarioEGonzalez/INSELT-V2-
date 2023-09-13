document.write("<center>CIRCUITO DE ILUMNACION<br>")

alert("BIENVENIDO A CALCULOS\nen cada cuadro igresaras los datos que te pidan presiona\nENTER o ACEPTAR para EMPEZAR.")

luminarias = prompt ("circuito de iluminacion\ningrese numero de luminarias");
luminarias = parseFloat(luminarias);

LW = prompt ("ingrese los watts de las luminarias");
LW = parseFloat(LW);


var WaT1 = 0;
var Proteccion1 = 0;
var corriente1 = 0;
var NCable1 = 0;
var Nducto1 = "1/2 in";
var voltaje1 = 120;
var C1 = 0;
WaT1 = luminarias*LW;
corriente1 = WaT1 / voltaje1;

if(WaT1>1500){document.write("se recomienda rediseñar circuito ya que la potencia maxima es 1500w")}

Proteccion1 = corriente1 * 1.15;
NCable1 = corriente1 * 1.25;

document.write ("<br><center>Los watts totales son: " +WaT1 +"W")

if (WaT1==0){ 
} else {
    document.write ("<br>La corriente es: " +corriente1.toFixed(2)+"A") 
}


if (WaT1==0){ 
} else {
    document.write ("<br>La tension es:"+voltaje1+"v") 
}

 

 if (NCable1>0 && NCable1<=25) {
    document.write ("<br>Numero de conductor : calibre 14awg")
} else if (NCable1>25 && NCable1<=30) {
    document.write ("<br>Numero de conductor : calibre 12awg")
} else if (corriente1>31) {
    document.write("<br>Se recomienda rediseñar el circuito")
}

if (Proteccion1>0 && Proteccion1<=15){
    document.write ("<br>Proteccion indicada: 1*15A")
} else if (Proteccion1>15 && Proteccion1<=20){
    document.write ("<br>Proteccion indicada: 1*20A")
}
else if (corriente1>20 ){document.write ("<br>debes rediseñar el circuito")
} else if(Proteccion1==0){
}

if (WaT1==0){ 
} else {
    document.write ("<br>Diametro ducto indicado: " +Nducto1) 
}
 

if (luminarias == 0 || LW == 0){
C1= 0;
} else { 
C1=1;
}