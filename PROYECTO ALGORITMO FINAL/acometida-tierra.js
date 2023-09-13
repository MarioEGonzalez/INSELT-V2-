var corrienteacometida = 0;
var proteccionacometida = 0;
var cableacometida = 0;




document.write("<br><br>ACOMETIDA ELECTRICA(cable del medidor al poste)<br>")



if(potenciatotal>=45720.5){document.write("<br><br><br><br><br>has superado el limite del SOFTWARE<br><br><br><br> ")}
if (tipocaja==1){
    corrienteacometida = potenciatotal/TensionEs1    
} else if (tipocaja==2){
    corrienteacometida = potenciatotal/(TensionEs2*1.414214*0.9998766325);
} else if (tipocaja==3){
    corrienteacometida = potenciatotal/(TensionEs3*1.732050808*0.9998766325);
}

proteccionacometida = corrienteacometida*1.15;
cableacometida = corrienteacometida*1.25;


document.write("<br><br> su potencia total es: "+potenciatotal+"W")
document.write("<br>su corriente de acometida es: "+corrienteacometida.toFixed(2)+"A")



if (corrienteacometida==0){}
else if(tipocaja==1){
    document.write("<br>La tension es: "+TensionEs1+"V")
}else {
    document.write("<br>La tension es: "+TensionEs2+"V")
}


// proteccion monofasico

if (proteccionacometida>0 && proteccionacometida<=50 && tipocaja==1) {
    document.write ("<br>proteccion indicada es : 1*50A")
} else if (proteccionacometida>50 && proteccionacometida<=63 && tipocaja==1){
    document.write("<br>proteccion indicada es :1*63A")
} else if (proteccionacometida>63 && proteccionacometida<=70 && tipocaja==1){
    document.write("<br>proteccion indicada es :1*70A")
} else if (proteccionacometida>70 && proteccionacometida<=80 && tipocaja==1){
    document.write("<br>proteccion indicada es : 1*80A")
} else{} 


// conductor monofasico

if (cableacometida>0 && cableacometida<=55 && tipocaja==1) {
    document.write("<br> Numero de conductor : calibre 1*8+8awg antifraude")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==1) {
    document.write("<br> Numero de conductor : calibre 1*6+6awg antifraude")

} else if (cableacometida>75 && cableacometida<=95&&tipocaja==1)
{document.write("<br>Numero de conductor : calibre 1*4+4awg antifraude")} 
else if (cableacometida>95 && cableacometida<=130&&tipocaja==1)
{document.write("<br>Numero de conductor : calibre 1*2+2awg antifraude")}
else if (cableacometida>130 && cableacometida<=150&&tipocaja==1)
{document.write("<br>Numero de conductor : calibre 1*1+1awg antifraude")}
else
{}

// ducto monofasico
if (cableacometida>0 && cableacometida<=55 && tipocaja==1) {
    document.write("<br>Diametro de ducto: 3/4 in CONDUIT METALICA" )
} else if (cableacometida>55 &&cableacometida<=75 && tipocaja==1){
    document.write("<br>Diametro de ducto: 3/4 in CONDUIT METALICA")
} else if (cableacometida>75&& cableacometida<=95 && tipocaja==1){
        document.write("<br>Diametro de ducto: 1 in CONDUIT METALICA")
} else if (cableacometida>95&& cableacometida<=130 && tipocaja==1){
        document.write("<br>Diametro de ducto: 1 in CONDUIT METALICA")
} else if (cableacometida>130&& cableacometida<=150 && tipocaja==1){
        document.write("<br>Diametro de ducto: 1 1/4 in CONDUIT METALICA")

} else {}




// proteccion bifasico

if (proteccionacometida>0 && proteccionacometida<=50 && tipocaja==2) {
    document.write ("<br>proteccion indicada es : 2*50A")
} else if (proteccionacometida>50 && proteccionacometida<=63 && tipocaja==2){
    document.write("<br>proteccion indicada es :2*63A")
} else if (proteccionacometida>63 && proteccionacometida<=70 && tipocaja==2){
    document.write("<br>proteccion indicada es :2*70A")
} else if (proteccionacometida>70 && proteccionacometida<=80 && tipocaja==2){
    document.write("<br>proteccion indicada es : 2*80A")
} else if (proteccionacometida>80 && proteccionacometida<=100 && tipocaja==2){
    document.write("<br>proteccion indicada es : 2*100A")
}
else{} 

// conductor bifasico

if (cableacometida>0 && cableacometida<=55 && tipocaja==2) {
    document.write("<br> Numero de conductor : calibre 2*8+8awg antifraude")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==2) {
    document.write("<br> Numero de conductor : calibre 2*6+6awg antifraude")
}else if (cableacometida>75 && cableacometida<=95&&tipocaja==2)
{document.write("<br>Numero de conductor : calibre 2*4+4awg antifraude")
} else if (cableacometida>95 && cableacometida<=130&&tipocaja==2)
{document.write("<br>Numero de conductor : calibre 2*2+2awg antifraude")}
else if (cableacometida>130 && cableacometida<=150&&tipocaja==2)
{document.write("<br>Numero de conductor : calibre 2*1+1awg antifraude")}
else 
{}


// ducto bifasico
if (cableacometida>0 && cableacometida<=55 && tipocaja==2) {
    document.write("<br>Diametro de ducto: 3/4 in CONDUIT METALICA")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==2){
    document.write("<br>Diametro de ducto: 3/4 in CONDUIT METALICA")
} else if (cableacometida>75&& cableacometida<=95 && tipocaja==2){
    document.write("<br>Diametro de ducto: 1 in CONDUIT METALICA")
} else if (cableacometida>95&& cableacometida<=130 && tipocaja==2){
    document.write("<br>Diametro de ducto: 1 1/4 in CONDUIT METALICA")
} else if (cableacometida>130&& cableacometida<=150 && tipocaja==2){
    document.write("<br>Diametro de ducto: 1 1/4 in CONDUIT METALICA")
}else {}


// proteccion trifasico

if (proteccionacometida>0 && proteccionacometida<=50 && tipocaja==3) {
    document.write ("<br>proteccion indicada es : 3*50A")
} else if (proteccionacometida>50 && proteccionacometida<=63 && tipocaja==3){
    document.write("<br>proteccion indicada es : 3*63A")
} else if (proteccionacometida>63 && proteccionacometida<=70 && tipocaja==3){
    document.write("<br>proteccion indicada es : 3*70A")
} else if (proteccionacometida>70 && proteccionacometida<=80 && tipocaja==3){
    document.write("<br>proteccion indicada es : 3*80A")
}else if (proteccionacometida>80 && proteccionacometida<=100 && tipocaja==3){
    document.write("<br>proteccion indicada es : 3*100A TOTALIZADOR REGULABLE ")
}else if (proteccionacometida>100 && proteccionacometida<=125 && tipocaja==3){
    document.write("<br>proteccion indicada es : 3*125A TOTALIZADOR REGULABLE")
}else if (proteccionacometida>125 && proteccionacometida<=150 && tipocaja==3){
    document.write("<br>proteccion indicada es : 3*150A TOTALIZADOR REGULABLE")
}

else{} 

// conductor trifasico

if (cableacometida>0 && cableacometida<=55 && tipocaja==3) {
    document.write("<br> Numero de conductor : calibre 3*8+8awg antifraude")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==3) {
    document.write("<br> Numero de conductor : calibre 3*6+6awg antifraude")
} else if (cableacometida>75 && cableacometida<=95&&tipocaja==3)
{document.write("<br>Numero de conductor : calibre 3*4+4awg antifraude")} 
else if (cableacometida>95 && cableacometida<=130&&tipocaja==3)
{document.write("<br>Numero de conductor : calibre 3*2+2awg antifraude")}
else if (cableacometida>130 && cableacometida<=150&&tipocaja==3)
{document.write("<br>Numero de conductor : calibre 3*1+1awg antifraude")}
else{}


// ducto trifasico
if (cableacometida>0 && cableacometida<=55 && tipocaja==3) {
    document.write("<br>Diametro de ducto: 3/4 in CONDUIT METALICA")
} else if (cableacometida>55 && cableacometida<=75 && tipocaja==3){
    document.write("<br>Diametro de ducto: 1 in CONDUIT METALICA")

}else if (cableacometida>75&& cableacometida<=95 && tipocaja==3){
        document.write("<br>Diametro de ducto: 1 1/4 in CONDUIT METALICA")
} else if (cableacometida>95&& cableacometida<=130 && tipocaja==3){
        document.write("<br>Diametro de ducto: 1 1/4 in CONDUIT METALICA")
} else if (cableacometida>130&& cableacometida<=150 && tipocaja==3){
        document.write("<br>Diametro de ducto: 1 1/2 in")
}else{}



// tierra 

if (cableacometida>0 && cableacometida<=55) {
    document.write("<br> Numero de conductor del electrodo de la tierra almedidor es: 8awg (color: verde, desnudo)")
} else if (cableacometida>55 && cableacometida<=75) {
    document.write("<br> Numero de conductor del electrodo de la tierra almedidor es: 8awg (color: verde, desnudo)")
} else if (cableacometida>75 && cableacometida<=95)
{document.write("<br>Numero de conductor del electrodo de la tierra almedidor es: 8awg (color: verde, desnudo) ")} 
else if (cableacometida>95 && cableacometida<=130)
{document.write("<br> Numero de conductor del electrodo de la tierra almedidor es: 8awg (color: verde, desnudo)")}
else if (cableacometida>130 && cableacometida<=150)
{document.write("<br>Numero de conductor del electrodo de la tierra almedidor es: 4awg (color: verde, desnudo)")}
else {}


if(potenciatotal>=45720.5){document.write("<br><br><br><br><br>has superado el limite del SOFTWARE<br><br><br><br> ")}
