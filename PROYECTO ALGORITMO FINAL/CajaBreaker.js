var potenciatotal = 0;
var Cajabreaker = 0;
var Cmonofasico = 0;
var Cbifasico = 0;
var Ctrifasico = 0;
var tipocaja = 0;
var Cramales=0;
var Tensionramales=0;
var Medidor=0

Cramales=voltaje1+voltaje2+voltaje3+voltaje4+voltaje5// 
Tensionramales=Cramales/5 //promedio de tensiones de circuitos ramales para que sea igual 120v

potenciatotal=WaT1+WaT2+Wat3+tW4+tW5+potenciaEs1+potenciaEs2+potenciaEs3;
document.write("TABLERO DE DISTRIBUCION ELECTRICA<br>")

Cmonofasico=monofasico1+monofasico2+monofasico3
Cbifasico=bifasico1+bifasico2+bifasico3
Ctrifasico=trifasico1+trifasico2+trifasico3


if(potenciatotal>=45720.5){document.write("<br><br><br><br><br>has superado el limite del SOFTWARE<br><br><br><br> ")}




if (Ctrifasico || potenciatotal>9500){document.write("<br>caja trifasica")
tipocaja=3;Medidor=3;}

else if (Cbifasico||potenciatotal>7000&&potenciatotal<9500){document.write("<br>caja bifasica")
tipocaja=2;Medidor=2;} 

else if(Cmonofasico||Cramales){document.write("<br>caja monofasica")
tipocaja=1;Medidor=1;} 




Cajabreaker = C1 + C2 + C3 + C4 + C5 + monofasico1 + bifasico1 + trifasico1 + monofasico2 + bifasico2 + trifasico2 + monofasico3 + bifasico3 + trifasico3

if(Cajabreaker==0){
    document.write("<br> no ingreso valores por ende no existe una caja")
} else if (Cajabreaker>0&&Cajabreaker<=2){
    document.write("<br>su caja debe ser de 2 circuitos <br> sus circuitos totales son:"+Cajabreaker)
} else if (Cajabreaker>2&&Cajabreaker<=4){
    document.write("<br>sus caja debe ser de 4 circuitos  <br> sus circuitos totales son:"+Cajabreaker)
} else if (Cajabreaker>4&&Cajabreaker<=6){
    document.write("<br>sus caja debe ser de 6 circuitos <br> sus circuitos totales son: "+Cajabreaker)
} else if (Cajabreaker>6&&Cajabreaker<=8){
    document.write("<br>sus caja debe ser de 8 circuitos  <br> sus circuitos totales son:"+Cajabreaker)
} else if (Cajabreaker>8&&Cajabreaker<=12){
    document.write("<br>sus caja debe ser de 12 circuitos <br> sus circuitos totales son: "+Cajabreaker)
} else if (Cajabreaker>12&&Cajabreaker<=16){
    document.write("<br>sus caja debe ser de 16 circuitos <br> sus circuitos totales son: "+Cajabreaker)
} else if (Cajabreaker>16&&Cajabreaker<=18){
    document.write("<br>sus caja debe ser de 18 circuitos <br> sus circuitos totales son: "+Cajabreaker)
}else if (Cajabreaker>18&&Cajabreaker<=20){
    document.write("<br>sus caja debe ser de 20 circuitos <br> sus circuitos totales son: "+Cajabreaker)
}else if (Cajabreaker>20&&Cajabreaker<=24){
    document.write("<br>sus caja debe ser de 24 circuitos <br> sus circuitos totales son: "+Cajabreaker)
}

else {
    document.write("<br> debe rediseñar los circuitos")
}





//ACOMETIDA PARCIAL

var corrienteacometida = 0;
var proteccionacometida = 0;
var cableacometida = 0;

if (tipocaja==1){
    corrienteacometida = potenciatotal/TensionEs1    
} else if (tipocaja==2){
    corrienteacometida = potenciatotal/(TensionEs2*1.414214*0.9998766325);
} else if (tipocaja==3){
    corrienteacometida = potenciatotal/(TensionEs3*1.732050808*0.9998766325); 
}

proteccionacometida = corrienteacometida*1.15;
cableacometida = corrienteacometida*1.25;



if(potenciatotal>=45720.5){document.write("<br><br><br><br><br>has superado el limite del SOFTWARE<br><br><br><br> ")}
// conductor monofasico

document.write("<br> <br> <br> <br><br><center>ACOMETIDA PARCIAL (cable del medidor al tablero de protecciones)<br>")

if (cableacometida>0 && cableacometida<=55 && tipocaja==1) {
    document.write("<br> Numero de conductor por fase,neutro : calibre 8 awg")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==1) {
    document.write("<br> Numero de conductor por fase,neutro: calibre 6awg")

} else if (cableacometida>75 && cableacometida<=95&&tipocaja==1)
{document.write("<br>Numero de conductor por fase,neutro: calibre 4awg ")} 
else if (cableacometida>95 && cableacometida<=130&&tipocaja==1)
{document.write("<br>Numero de conductor por fase,neutro : calibre 2awg ")}
else if (cableacometida>130 && cableacometida<=150&&tipocaja==1)
{document.write("<br>Numero de conductor por fase,neutro : calibre 1awg ")}
else
{}

// ducto monofasico
if (cableacometida>0 && cableacometida<=55 && tipocaja==1) {
    document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>55 &&cableacometida<=75 && tipocaja==1){
    document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>75&& cableacometida<=95 && tipocaja==1){
        document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>95&& cableacometida<=130 && tipocaja==1){
        document.write("<br>Diametro de ducto: 1 in")
} else if (cableacometida>130&& cableacometida<=150 && tipocaja==1){
        document.write("<br>Diametro de ducto: 1 1/4 in")

} else {}


// conductor bifasico

if (cableacometida>0 && cableacometida<=55 && tipocaja==2) {
    document.write("<br> Numero de conductor por fases,neutro : calibre 8awg")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==2) {
    document.write("<br> Numero de conductor por fases,neutro : calibre 6awg")
}else if (cableacometida>75 && cableacometida<=95&&tipocaja==2)
{document.write("<br>Numero de conductor por fases,neutro: calibre 4awg ")
} else if (cableacometida>95 && cableacometida<=130&&tipocaja==2)
{document.write("<br>Numero de conductor por fases,neutro: calibre 2awg ")}
else if (cableacometida>130 && cableacometida<=150&&tipocaja==2)
{document.write("<br>Numero de conductor por fases,neutro : calibre 1awg ")}
else 
{}


// ducto bifasico
if (cableacometida>0 && cableacometida<=55 && tipocaja==2) {
    document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==2){
    document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>75&& cableacometida<=95 && tipocaja==2){
    document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>95&& cableacometida<=130 && tipocaja==2){
    document.write("<br>Diametro de ducto: 1 in")
} else if (cableacometida>130&& cableacometida<=150 && tipocaja==2){
    document.write("<br>Diametro de ducto: 1 1/4 in")
}else {}

// conductor trifasico

if (cableacometida>0 && cableacometida<=55 && tipocaja==3) {
    document.write("<br> Numero de conductor por fases,neutro : calibre 8awg")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==3) {
    document.write("<br> Numero de conductor por fases,neutro : calibre 6awg")
} else if (cableacometida>75 && cableacometida<=95&&tipocaja==3)
{document.write("<br>Numero de conductor por fases,neutro: calibre 4awg ")} 
else if (cableacometida>95 && cableacometida<=130&&tipocaja==3)
{document.write("<br>Numero de conductor por fases,neutro  : calibre 2awg ")}
else if (cableacometida>130 && cableacometida<=150&&tipocaja==3)
{document.write("<br>Numero de conductor por fases,neutro : calibre 1awg ")}
else{}


// ducto trifasico
if (cableacometida>0 && cableacometida<=55 && tipocaja==3) {
    document.write("<br>Diametro de ducto: 3/4 in")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==3){
    document.write("<br>Diametro de ducto: 3/4 in")

}else if (cableacometida>75&& cableacometida<=95 && tipocaja==3){
        document.write("<br>Diametro de ducto: 1 in")
} else if (cableacometida>95&& cableacometida<=130 && tipocaja==3){
        document.write("<br>Diametro de ducto: 1 1/4 in")
} else if (cableacometida>130&& cableacometida<=150 && tipocaja==3){
        document.write("<br>Diametro de ducto: 1 1/2 in")
}else{}


// tierra parcial

if (cableacometida>0 && cableacometida<=55) {
    document.write("<br> Numero de conductor de la tierra  parcial es: 8awg (color: verde, desnudo)")
} else if (cableacometida>55 && cableacometida<=75) {
    document.write("<br> Numero de conductor de la tierra parcial es: 8awg (color: verde, desnudo)")
} else if (cableacometida>75 && cableacometida<=95)
{document.write("<br>Numero de conductor  de la tierra parcial es: 8awg (color: verde, desnudo) ")} 
else if (cableacometida>95 && cableacometida<=130)
{document.write("<br> Numero de conductor  de la tierra parcial es: 8awg (color: verde, desnudo)")}
else if (cableacometida>130 && cableacometida<=150)
{document.write("<br>Numero de conductor de la tierra parcial es: 4awg (color: verde, desnudo)")}
else {}


//medidor



document.write("<br> <br> <br> <br><br><center>MEDIDOR(gabinete de medida electrica)<br>")

if (Medidor==3){ document.write("<br>Su medidor electrico es: trifasico")} 
 else if (Medidor==2){document.write("<br>Su medidor electrico es: bifasico")
    
} else if (Medidor==1){document.write("<br>Su medidor electrico es: monofasico")
     
}


if(potenciatotal>=45720.5){document.write("<br><br><br><br><br>has superado el limite del SOFTWARE<br><br><br><br> ")}


