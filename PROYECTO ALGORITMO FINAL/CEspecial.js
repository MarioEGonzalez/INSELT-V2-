Opciones = prompt ("Seleccione cuantos circuitos especiales quiere agregar\ntenga en cuenta que no debe superar los 3");
Opciones = parseInt(Opciones);

 
//circuito especial 1
tipoCircuito1 = 0;
potenciaEs1 = 0;
TensionEs1 = 120;
corrienteEs1 = 0;
NcableEs1 = 0;
NductoEs1 = 0;
ProteccionEs1 = 0;
monofasico1 = 0;
bifasico1 = 0;
trifasico1 = 0;

//circuito especial 2
tipoCircuito2 = 0;
potenciaEs2 = 0;
TensionEs2 = 220;
corrienteEs2 = 0;
NcableEs2 = 0;
NductoEs2 = 0;
ProteccionEs2 = 0;
monofasico2 = 0;
bifasico2 = 0;
trifasico2 = 0;

// circuito especial 3
tipoCircuito3 = 0;
potenciaEs3 = 0;
TensionEs3 = 220;
corrienteEs3 = 0;
NcableEs3 = 0;
NductoEs3 = 0;
ProteccionEs3 = 0;
monofasico3 = 0;
bifasico3 = 0;
trifasico3 = 0;

switch (Opciones){
case 0: alert("no escogiste ninguna opcion")
break;

     //circuito especial 1
case 1: tipoCircuito1 = prompt("que tipo de circuito es su equipo\n1-monofasico\n2-bifasico\n3-trifasico")
        tipoCircuito1 = parseInt(tipoCircuito1);
        document.write("CIRCUITO ESPECIAL 1<br>")
       

        if (tipoCircuito1==1){
            monofasico1 = 1;
            potenciaEs1 = prompt ("ingrese la potencia electrica de su equipo")
            potenciaEs1 = parseInt(potenciaEs1);
            corrienteEs1 = potenciaEs1 / TensionEs1;
            ProteccionEs1 = corrienteEs1 * 1.15;
            NcableEs1 = corrienteEs1 * 1.25;

            document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
            document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
            document.write("<br>la tension es: " +TensionEs1+"V")

            if (ProteccionEs1>0 && ProteccionEs1<=20) {
                document.write ("<br>proteccion indicada es : 1*20A")
            } else if (ProteccionEs1>20 && ProteccionEs1<=25){
                document.write("<br>proteccion indicada es : 1*25A")
            } else if (ProteccionEs1>25 && ProteccionEs1<=32){
                document.write("<br>proteccion indicada es : 1*32A")
            } else if (ProteccionEs1>32 && ProteccionEs1<=40){
                document.write("<br>proteccion indicada es : 1*40A")
            } else if (ProteccionEs1>40 && ProteccionEs1<=50){
                document.write("<br>proteccion indicada es : 1*50A")
            } else if (ProteccionEs1>50 && ProteccionEs1<=63){
                document.write("<br>proteccion indicada es :1*63A")
            } else if (ProteccionEs1>63 && ProteccionEs1<=70){
                document.write("<br>proteccion indicada es :1*70A")
            } else if (ProteccionEs1>70 && ProteccionEs1<=80){
                document.write("<br>proteccion indicada es : 1*80A")
            } else if (ProteccionEs1>80){
                document.write("<br> Debe rediseñar el circuito")
            } 


            if (NcableEs1>0&&NcableEs1<=30){
                document.write ("<br>Numero de conductor : calibre 12awg")
            } else if (NcableEs1>30 && NcableEs1<=40){ 
                document.write("<br>Numero de conductor : calibre 10awg")
            } else if (NcableEs1>40 && NcableEs1<=55) {
                document.write("<br> Numero de conductor : calibre 8awg")
            } else if (NcableEs1>55 && NcableEs1<=75) {
                document.write("<br> Numero de conductor : calibre 6awg")
            } else if (NcableEs1>75) {
                document.write("<br> Debe rediseñar el circuito")
            } 
            if (NcableEs1>0 && NcableEs1<=40) {
                document.write("<br>Diametro de ducto: 1/2 in")
            } else if (NcableEs1>40 && NcableEs1<=75){
                document.write("<br>Diametro de ducto: 3/4 in")
            } else (document.write("<br> Debe rediseñar el circuito"))

        } else if (tipoCircuito1==2){
            bifasico1 = 2;
            potenciaEs1 = prompt ("ingrese la potencia electrica de su equipo")
            potenciaEs1 = parseInt(potenciaEs1);
            corrienteEs1 = potenciaEs1 / (TensionEs2*1.414214*0.999902524) ;
            ProteccionEs1 = corrienteEs1 * 1.15;
            NcableEs1 = corrienteEs1 * 1.25;

            document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
            document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
            document.write("<br>la tension es: " +TensionEs2+"V")

            if (ProteccionEs1>0 && ProteccionEs1<=20) {
                document.write ("<br>proteccion indicada es : 2*20A")
            } else if (ProteccionEs1>20 && ProteccionEs1<=25){
                document.write("<br>proteccion indicada es : 2*25A")
            } else if (ProteccionEs1>25 && ProteccionEs1<=32){
                document.write("<br>proteccion indicada es : 2*32A")
            } else if (ProteccionEs1>32 && ProteccionEs1<=40){
                document.write("<br>proteccion indicada es : 2*40A")
            } else if (ProteccionEs1>40 && ProteccionEs1<=50){
                document.write("<br>proteccion indicada es : 2*50A")
            } else if (ProteccionEs1>50 && ProteccionEs1<=63){
                document.write("<br>proteccion indicada es : 2*63A")
            } else if (ProteccionEs1>63 && ProteccionEs1<=70){
                document.write("<br>proteccion indicada es : 2*70A")
            } else if (ProteccionEs1>70 && ProteccionEs1<=80){
                document.write("<br>proteccion indicada es : 2*80A")
            } else if (ProteccionEs1>80){
                document.write("<br> Debe rediseñar el circuito")
            } 


            if (NcableEs1>0&&NcableEs1<=30){
                document.write ("<br>Numero de conductor : calibre 12awg")
            } else if (NcableEs1>30 && NcableEs1<=40){ 
                document.write("<br>Numero de conductor : calibre 10awg")
            } else if (NcableEs1>40 && NcableEs1<=55) {
                document.write("<br> Numero de conductor : calibre 8awg")
            } else if (NcableEs1>55 && NcableEs1<=75) {
                document.write("<br> Numero de conductor : calibre 6awg")
            } else if (NcableEs1>75) {
                document.write("<br> Debe rediseñar el circuito")
            } 
            if (NcableEs1>0 && NcableEs1<=40) {
                document.write("<br>Diametro de ducto: 1/2 in")
            } else if (NcableEs1>40 && NcableEs1<=75){
                document.write("<br>Diametro de ducto: 3/4 in")
            } else (document.write("<br> Debe rediseñar el circuito"))

        } else if (tipoCircuito1==3){
            trifasico1 = 3;
            potenciaEs1 = prompt ("ingrese la potencia electrica de su equipo")
            potenciaEs1 = parseInt(potenciaEs1);
            corrienteEs1 = potenciaEs1 / (TensionEs3*1.732050808*0.999902524) ;
            ProteccionEs1 = corrienteEs1 * 1.15;
            NcableEs1 = corrienteEs1 * 1.25;

            document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
            document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
            document.write("<br>la tension es: " +TensionEs2+"V")

            
            if (ProteccionEs1>0 && ProteccionEs1<=20) {
                document.write ("<br>proteccion indicada es : 3*20A")
            } else if (ProteccionEs1>20 && ProteccionEs1<=25){
                document.write("<br>proteccion indicada es : 3*25A")
            } else if (ProteccionEs1>25 && ProteccionEs1<=32){
                document.write("<br>proteccion indicada es : 3*32A")
            } else if (ProteccionEs1>32 && ProteccionEs1<=40){
                document.write("<br>proteccion indicada es : 3*40A")
            } else if (ProteccionEs1>40 && ProteccionEs1<=50){
                document.write("<br>proteccion indicada es : 3*50A")
            } else if (ProteccionEs1>50 && ProteccionEs1<=63){
                document.write("<br>proteccion indicada es : 3*63A")
            } else if (ProteccionEs1>63 && ProteccionEs1<=70){
                document.write("<br>proteccion indicada es : 3*70A")
            } else if (ProteccionEs1>70 && ProteccionEs1<=80){
                document.write("<br>proteccion indicada es : 3*80A")
            } else if (ProteccionEs1>80){
                document.write("<br> Debe rediseñar el circuito")
            } 


            if (NcableEs1>0&&NcableEs1<=30){
                document.write ("<br>Numero de conductor : calibre 12awg")
            } else if (NcableEs1>30 && NcableEs1<=40){ 
                document.write("<br>Numero de conductor : calibre 10awg")
            } else if (NcableEs1>40 && NcableEs1<=55) {
                document.write("<br> Numero de conductor : calibre 8awg")
            } else if (NcableEs1>55 && NcableEs1<=75) {
                document.write("<br> Numero de conductor : calibre 6awg")
            } else if (NcableEs1>75) {
                document.write("<br> Debe rediseñar el circuito")
            } 
            if (NcableEs1>0 && NcableEs1<=40) {
                document.write("<br>Diametro de ducto: 1/2 in")
            } else if (NcableEs1>40 && NcableEs1<=75){
                document.write("<br>Diametro de ducto: 3/4 in")
            } else (document.write("<br> Debe rediseñar el circuito"))
        }
        break;


//ingresar dos circuitos especiales 

case 2: 
        // circuito especial 1

            tipoCircuito1 = prompt("que tipo de circuito es su primer equipo\n1-monofasico\n2-bifasico\n3-trifasico")
            tipoCircuito1 = parseInt(tipoCircuito1);
            if (tipoCircuito1==1){
            monofasico1 = 1;
            potenciaEs1 = prompt ("ingrese la potencia electrica de su primer equipo")
            potenciaEs1 = parseInt(potenciaEs1);
            corrienteEs1 = potenciaEs1 / TensionEs1;
            ProteccionEs1 = corrienteEs1 * 1.15;
            NcableEs1 = corrienteEs1 * 1.25;

            document.write("CIRCUITO ESPECIAL 1<br>")
            document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
            document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
            document.write("<br>la tension es: " +TensionEs1+"V")

            if (ProteccionEs1>0 && ProteccionEs1<=20) {
                document.write ("<br>proteccion indicada es : 1*20A")
            } else if (ProteccionEs1>20 && ProteccionEs1<=25){
                document.write("<br>proteccion indicada es : 1*25A")
            } else if (ProteccionEs1>25 && ProteccionEs1<=32){
                document.write("<br>proteccion indicada es : 1*32A")
            } else if (ProteccionEs1>32 && ProteccionEs1<=40){
                document.write("<br>proteccion indicada es : 1*40A")
            } else if (ProteccionEs1>40 && ProteccionEs1<=50){
                document.write("<br>proteccion indicada es : 1*50A")
            } else if (ProteccionEs1>50 && ProteccionEs1<=63){
                document.write("<br>proteccion indicada es :1*63A")
            } else if (ProteccionEs1>63 && ProteccionEs1<=70){
                document.write("<br>proteccion indicada es :1*70A")
            } else if (ProteccionEs1>70 && ProteccionEs1<=80){
                document.write("<br>proteccion indicada es : 1*80A")
            } else if (ProteccionEs1>80){
                document.write("<br> Debe rediseñar el circuito")
            } 


            if (NcableEs1>0&&NcableEs1<=30){
                document.write ("<br>Numero de conductor : calibre 12awg")
            } else if (NcableEs1>30 && NcableEs1<=40){ 
                document.write("<br>Numero de conductor : calibre 10awg")
            } else if (NcableEs1>40 && NcableEs1<=55) {
                document.write("<br> Numero de conductor : calibre 8awg")
            } else if (NcableEs1>55 && NcableEs1<=75) {
                document.write("<br> Numero de conductor : calibre 6awg")
            } else if (NcableEs1>75) {
                document.write("<br> Debe rediseñar el circuito")
            } 
            if (NcableEs1>0 && NcableEs1<=40) {
                document.write("<br>Diametro de ducto: 1/2 in")
            } else if (NcableEs1>40 && NcableEs1<=75){
                document.write("<br>Diametro de ducto: 3/4 in")
            } else (document.write("<br> Debe rediseñar el circuito"))

        } else if (tipoCircuito1==2){
            bifasico1 = 2;
            potenciaEs1 = prompt ("ingrese la potencia electrica de su primer equipo")
            potenciaEs1 = parseInt(potenciaEs1);
            corrienteEs1 = potenciaEs1 / (TensionEs2*1.414214*0.999902524) ;
            ProteccionEs1 = corrienteEs1 * 1.15;
            NcableEs1 = corrienteEs1 * 1.25;

            document.write("CIRCUITO ESPECIAL 1<br>")
            document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
            document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
            document.write("<br>la tension es: " +TensionEs2+"V")

            if (ProteccionEs1>0 && ProteccionEs1<=20) {
                document.write ("<br>proteccion indicada es : 2*20A")
            } else if (ProteccionEs1>20 && ProteccionEs1<=25){
                document.write("<br>proteccion indicada es : 2*25A")
            } else if (ProteccionEs1>25 && ProteccionEs1<=32){
                document.write("<br>proteccion indicada es : 2*32A")
            } else if (ProteccionEs1>32 && ProteccionEs1<=40){
                document.write("<br>proteccion indicada es : 2*40A")
            } else if (ProteccionEs1>40 && ProteccionEs1<=50){
                document.write("<br>proteccion indicada es : 2*50A")
            } else if (ProteccionEs1>50 && ProteccionEs1<=63){
                document.write("<br>proteccion indicada es : 2*63A")
            } else if (ProteccionEs1>63 && ProteccionEs1<=70){
                document.write("<br>proteccion indicada es : 2*70A")
            } else if (ProteccionEs1>70 && ProteccionEs1<=80){
                document.write("<br>proteccion indicada es : 2*80A")
            } else if (ProteccionEs1>80){
                document.write("<br> Debe rediseñar el circuito")
            } 


            if (NcableEs1>0&&NcableEs1<=30){
                document.write ("<br>Numero de conductor : calibre 12awg")
            } else if (NcableEs1>30 && NcableEs1<=40){ 
                document.write("<br>Numero de conductor : calibre 10awg")
            } else if (NcableEs1>40 && NcableEs1<=55) {
                document.write("<br> Numero de conductor : calibre 8awg")
            } else if (NcableEs1>55 && NcableEs1<=75) {
                document.write("<br> Numero de conductor : calibre 6awg")
            } else if (NcableEs1>75) {
                document.write("<br> Debe rediseñar el circuito")
            } 
            if (NcableEs1>0 && NcableEs1<=40) {
                document.write("<br>Diametro de ducto: 1/2 in")
            } else if (NcableEs1>40 && NcableEs1<=75){
                document.write("<br>Diametro de ducto: 3/4 in")
            } else (document.write("<br> Debe rediseñar el circuito"))

        } else if (tipoCircuito1==3){
            trifasico1 = 3;
            potenciaEs1 = prompt ("ingrese la potencia electrica de su primer equipo")
            potenciaEs1 = parseInt(potenciaEs1);
            corrienteEs1 = potenciaEs1 / (TensionEs3*1.732050808*0.999902524) ;
            ProteccionEs1 = corrienteEs1 * 1.15;
            NcableEs1 = corrienteEs1 * 1.25;
            
            document.write("CIRCUITO ESPECIAL 1<br>")
            document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
            document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
            document.write("<br>la tension es: " +TensionEs2+"V")

            
            if (ProteccionEs1>0 && ProteccionEs1<=20) {
                document.write ("<br>proteccion indicada es : 3*20A")
            } else if (ProteccionEs1>20 && ProteccionEs1<=25){
                document.write("<br>proteccion indicada es : 3*25A")
            } else if (ProteccionEs1>25 && ProteccionEs1<=32){
                document.write("<br>proteccion indicada es : 3*32A")
            } else if (ProteccionEs1>32 && ProteccionEs1<=40){
                document.write("<br>proteccion indicada es : 3*40A")
            } else if (ProteccionEs1>40 && ProteccionEs1<=50){
                document.write("<br>proteccion indicada es : 3*50A")
            } else if (ProteccionEs1>50 && ProteccionEs1<=63){
                document.write("<br>proteccion indicada es : 3*63A")
            } else if (ProteccionEs1>63 && ProteccionEs1<=70){
                document.write("<br>proteccion indicada es : 3*70A")
            } else if (ProteccionEs1>70 && ProteccionEs1<=80){
                document.write("<br>proteccion indicada es : 3*80A")
            } else if (ProteccionEs1>80){
                document.write("<br> Debe rediseñar el circuito")
            } 


            if (NcableEs1>0&&NcableEs1<=30){
                document.write ("<br>Numero de conductor : calibre 12awg")
            } else if (NcableEs1>30 && NcableEs1<=40){ 
                document.write("<br>Numero de conductor : calibre 10awg")
            } else if (NcableEs1>40 && NcableEs1<=55) {
                document.write("<br> Numero de conductor : calibre 8awg")
            } else if (NcableEs1>55 && NcableEs1<=75) {
                document.write("<br> Numero de conductor : calibre 6awg")
            } else if (NcableEs1>75) {
                document.write("<br> Debe rediseñar el circuito")
            } 
            if (NcableEs1>0 && NcableEs1<=40) {
                document.write("<br>Diametro de ducto: 1/2 in")
            } else if (NcableEs1>40 && NcableEs1<=75){
                document.write("<br>Diametro de ducto: 3/4 in")
            } else (document.write("<br> Debe rediseñar el circuito"))
        }

        // circuito especial 2

        tipoCircuito2 = prompt("que tipo de circuito es su segundo equipo\n1-monofasico\n2-bifasico\n3-trifasico")
        tipoCircuito2 = parseInt(tipoCircuito2);
        
        if (tipoCircuito2==1){
        monofasico2 = 1;
        potenciaEs2 = prompt ("ingrese la potencia electrica de su segundo equipo")
        potenciaEs2 = parseInt(potenciaEs2);
        corrienteEs2 = potenciaEs2 / TensionEs1;
        ProteccionEs2 = corrienteEs2 * 1.15;
        NcableEs2 = corrienteEs2 * 1.25;

        document.write("<br><br>CIRCUITO ESPECIAL 2<br>")
        document.write("<br>potencia del equipo 2: " +potenciaEs2+ "W")
        document.write("<br>corriente nominal es: " +corrienteEs2.toFixed(2)+"A")
        document.write("<br>la tension es: " +TensionEs1+"V")

        if (ProteccionEs2>0 && ProteccionEs2<=20) {
            document.write ("<br>proteccion indicada es : 1*20A")
        } else if (ProteccionEs2>20 && ProteccionEs2<=25){
            document.write("<br>proteccion indicada es : 1*25A")
        } else if (ProteccionEs2>25 && ProteccionEs2<=32){
            document.write("<br>proteccion indicada es : 1*32A")
        } else if (ProteccionEs2>32 && ProteccionEs2<=40){
            document.write("<br>proteccion indicada es : 1*40A")
        } else if (ProteccionEs2>40 && ProteccionEs2<=50){
            document.write("<br>proteccion indicada es : 1*50A")
        } else if (ProteccionEs2>50 && ProteccionEs2<=63){
            document.write("<br>proteccion indicada es :1*63A")
        } else if (ProteccionEs2>63 && ProteccionEs2<=70){
            document.write("<br>proteccion indicada es :1*70A")
        } else if (ProteccionEs2>70 && ProteccionEs2<=80){
            document.write("<br>proteccion indicada es : 1*80A")
        } else if (ProteccionEs2>80){
            document.write("<br> Debe rediseñar el circuito")
        } 


        if (NcableEs2>0&&NcableEs2<=30){
            document.write ("<br>Numero de conductor : calibre 12awg")
        } else if (NcableEs2>30 && NcableEs2<=40){ 
            document.write("<br>Numero de conductor : calibre 10awg")
        } else if (NcableEs2>40 && NcableEs2<=55) {
            document.write("<br> Numero de conductor : calibre 8awg")
        } else if (NcableEs2>55 && NcableEs2<=75) {
            document.write("<br> Numero de conductor : calibre 6awg")
        } else if (NcableEs2>75) {
            document.write("<br> Debe rediseñar el circuito")
        } 
        if (NcableEs2>0 && NcableEs2<=40) {
            document.write("<br>Diametro de ducto: 1/2 in")
        } else if (NcableEs2>40 && NcableEs2<=75){
            document.write("<br>Diametro de ducto: 3/4 in")
        } else (document.write("<br> Debe rediseñar el circuito"))

    } else if (tipoCircuito2==2){
        bifasico2 = 2;
        potenciaEs2 = prompt ("ingrese la potencia electrica de su segundo equipo")
        potenciaEs2 = parseInt(potenciaEs2);
        corrienteEs2 = potenciaEs2 / (TensionEs2*1.414214*0.999902524);
        ProteccionEs2 = corrienteEs2 * 1.15;
        NcableEs2 = corrienteEs2 * 1.25;

        document.write("<br><br>CIRCUITO ESPECIAL 2<br>")
        document.write("<br>potencia del equipo: " +potenciaEs2+ "W")
        document.write("<br>corriente nominal es: " +corrienteEs2.toFixed(2)+"A")
        document.write("<br>la tension es: " +TensionEs2+"V")

        if (ProteccionEs2>0 && ProteccionEs2<=20) {
            document.write ("<br>proteccion indicada es : 2*20A")
        } else if (ProteccionEs2>20 && ProteccionEs2<=25){
            document.write("<br>proteccion indicada es : 2*25A")
        } else if (ProteccionEs2>25 && ProteccionEs2<=32){
            document.write("<br>proteccion indicada es : 2*32A")
        } else if (ProteccionEs2>32 && ProteccionEs2<=40){
            document.write("<br>proteccion indicada es : 2*40A")
        } else if (ProteccionEs2>40 && ProteccionEs2<=50){
            document.write("<br>proteccion indicada es : 2*50A")
        } else if (ProteccionEs2>50 && ProteccionEs2<=63){
            document.write("<br>proteccion indicada es : 2*63A")
        } else if (ProteccionEs2>63 && ProteccionEs2<=70){
            document.write("<br>proteccion indicada es : 2*70A")
        } else if (ProteccionEs2>70 && ProteccionEs2<=80){
            document.write("<br>proteccion indicada es : 2*80A")
        } else if (ProteccionEs2>80){
            document.write("<br> Debe rediseñar el circuito")
        } 


        if (NcableEs2>0&&NcableEs2<=30){
            document.write ("<br>Numero de conductor : calibre 12awg")
        } else if (NcableEs2>30 && NcableEs2<=40){ 
            document.write("<br>Numero de conductor : calibre 10awg")
        } else if (NcableEs2>40 && NcableEs2<=55) {
            document.write("<br> Numero de conductor : calibre 8awg")
        } else if (NcableEs2>55 && NcableEs2<=75) {
            document.write("<br> Numero de conductor : calibre 6awg")
        } else if (NcableEs2>75) {
            document.write("<br> Debe rediseñar el circuito")
        } 
        if (NcableEs2>0 && NcableEs2<=40) {
            document.write("<br>Diametro de ducto: 1/2 in")
        } else if (NcableEs2>40 && NcableEs2<=75){
            document.write("<br>Diametro de ducto: 3/4 in")
        } else (document.write("<br> Debe rediseñar el circuito"))

    } else if (tipoCircuito2==3){
        trifasico2 = 3;
        potenciaEs2 = prompt ("ingrese la potencia electrica de su segundo equipo")
        potenciaEs2 = parseInt(potenciaEs2);
        corrienteEs2 = potenciaEs2 / (TensionEs3*1.732050808*0.999902524) ;
        ProteccionEs2 = corrienteEs2 * 1.15;
        NcableEs2 = corrienteEs2* 1.25;

        document.write("<br><br>CIRCUITO ESPECIAL 2<br>")
        document.write("<br>potencia del equipo: " +potenciaEs2+ "W")
        document.write("<br>corriente nominal es: " +corrienteEs2.toFixed(2)+"A")
        document.write("<br>la tension es: " +TensionEs3+"V")

        if (ProteccionEs2>0 && ProteccionEs2<=20) {
            document.write ("<br>proteccion indicada es : 3*20A")
        } else if (ProteccionEs2>20 && ProteccionEs2<=25){
            document.write("<br>proteccion indicada es : 3*25A")
        } else if (ProteccionEs2>25 && ProteccionEs2<=32){
            document.write("<br>proteccion indicada es : 3*32A")
        } else if (ProteccionEs2>32 && ProteccionEs2<=40){
            document.write("<br>proteccion indicada es : 3*40A")
        } else if (ProteccionEs2>40 && ProteccionEs2<=50){
            document.write("<br>proteccion indicada es : 3*50A")
        } else if (ProteccionEs2>50 && ProteccionEs2<=63){
            document.write("<br>proteccion indicada es : 3*63A")
        } else if (ProteccionEs2>63 && ProteccionEs2<=70){
            document.write("<br>proteccion indicada es : 3*70A")
        } else if (ProteccionEs2>70 && ProteccionEs2<=80){
            document.write("<br>proteccion indicada es : 3*80A")
        } else if (ProteccionEs2>80){
            document.write("<br> Debe rediseñar el circuito")
        } 


        if (NcableEs2>0&&NcableEs2<=30){
            document.write ("<br>Numero de conductor : calibre 12awg")
        } else if (NcableEs2>30 && NcableEs2<=40){ 
            document.write("<br>Numero de conductor : calibre 10awg")
        } else if (NcableEs2>40 && NcableEs2<=55) {
            document.write("<br> Numero de conductor : calibre 8awg")
        } else if (NcableEs2>55 && NcableEs2<=75) {
            document.write("<br> Numero de conductor : calibre 6awg")
        } else if (NcableEs2>75) {
            document.write("<br> Debe rediseñar el circuito")
        } 
        if (NcableEs2>0 && NcableEs2<=40) {
            document.write("<br>Diametro de ducto: 1/2 in")
        } else if (NcableEs2>40 && NcableEs2<=75){
            document.write("<br>Diametro de ducto: 3/4 in")
        } else (document.write("<br> Debe rediseñar el circuito"))        
    
    }  break;


//ingresar tres circuitos especiales 

case 3:

        // circuito especial 1

        tipoCircuito1 = prompt("que tipo de circuito es su primer equipo\n1-monofasico\n2-bifasico\n3-trifasico")
        tipoCircuito1 = parseInt(tipoCircuito1);
        if (tipoCircuito1==1){
        monofasico1 = 1;
        potenciaEs1 = prompt ("ingrese la potencia electrica de su primer equipo")
        potenciaEs1 = parseInt(potenciaEs1);
        corrienteEs1 = potenciaEs1 / TensionEs1;
        ProteccionEs1 = corrienteEs1 * 1.15;
        NcableEs1 = corrienteEs1 * 1.25;

        document.write("CIRCUITO ESPECIAL 1<br>")
        document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
        document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
        document.write("<br>la tension es: " +TensionEs1+"V")

        if (ProteccionEs1>0 && ProteccionEs1<=20) {
            document.write ("<br>proteccion indicada es : 1*20A")
        } else if (ProteccionEs1>20 && ProteccionEs1<=25){
            document.write("<br>proteccion indicada es : 1*25A")
        } else if (ProteccionEs1>25 && ProteccionEs1<=32){
            document.write("<br>proteccion indicada es : 1*32A")
        } else if (ProteccionEs1>32 && ProteccionEs1<=40){
            document.write("<br>proteccion indicada es : 1*40A")
        } else if (ProteccionEs1>40 && ProteccionEs1<=50){
            document.write("<br>proteccion indicada es : 1*50A")
        } else if (ProteccionEs1>50 && ProteccionEs1<=63){
            document.write("<br>proteccion indicada es :1*63A")
        } else if (ProteccionEs1>63 && ProteccionEs1<=70){
            document.write("<br>proteccion indicada es :1*70A")
        } else if (ProteccionEs1>70 && ProteccionEs1<=80){
            document.write("<br>proteccion indicada es : 1*80A")
        } else if (ProteccionEs1>80){
            document.write("<br> Debe rediseñar el circuito")
        } 


        if (NcableEs1>0&&NcableEs1<=30){
            document.write ("<br>Numero de conductor : calibre 12awg")
        } else if (NcableEs1>30 && NcableEs1<=40){ 
            document.write("<br>Numero de conductor : calibre 10awg")
        } else if (NcableEs1>40 && NcableEs1<=55) {
            document.write("<br> Numero de conductor : calibre 8awg")
        } else if (NcableEs1>55 && NcableEs1<=75) {
            document.write("<br> Numero de conductor : calibre 6awg")
        } else if (NcableEs1>75) {
            document.write("<br> Debe rediseñar el circuito")
        } 
        if (NcableEs1>0 && NcableEs1<=40) {
            document.write("<br>Diametro de ducto: 1/2 in")
        } else if (NcableEs1>40 && NcableEs1<=75){
            document.write("<br>Diametro de ducto: 3/4 in")
        } else (document.write("<br> Debe rediseñar el circuito"))

    } else if (tipoCircuito1==2){
        bifasico1 = 2;
        potenciaEs1 = prompt ("ingrese la potencia electrica de su primer equipo")
        potenciaEs1 = parseInt(potenciaEs1);
        corrienteEs1 = potenciaEs1 / (TensionEs2*1.414214*0.999902524) ;
        ProteccionEs1 = corrienteEs1 * 1.15;
        NcableEs1 = corrienteEs1 * 1.25;

        document.write("CIRCUITO ESPECIAL 1<br>")
        document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
        document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
        document.write("<br>la tension es: " +TensionEs2+"V")

        if (ProteccionEs1>0 && ProteccionEs1<=20) {
            document.write ("<br>proteccion indicada es : 2*20A")
        } else if (ProteccionEs1>20 && ProteccionEs1<=25){
            document.write("<br>proteccion indicada es : 2*25A")
        } else if (ProteccionEs1>25 && ProteccionEs1<=32){
            document.write("<br>proteccion indicada es : 2*32A")
        } else if (ProteccionEs1>32 && ProteccionEs1<=40){
            document.write("<br>proteccion indicada es : 2*40A")
        } else if (ProteccionEs1>40 && ProteccionEs1<=50){
            document.write("<br>proteccion indicada es : 2*50A")
        } else if (ProteccionEs1>50 && ProteccionEs1<=63){
            document.write("<br>proteccion indicada es : 2*63A")
        } else if (ProteccionEs1>63 && ProteccionEs1<=70){
            document.write("<br>proteccion indicada es : 2*70A")
        } else if (ProteccionEs1>70 && ProteccionEs1<=80){
            document.write("<br>proteccion indicada es : 2*80A")
        } else if (ProteccionEs1>80){
            document.write("<br> Debe rediseñar el circuito")
        } 


        if (NcableEs1>0&&NcableEs1<=30){
            document.write ("<br>Numero de conductor : calibre 12awg")
        } else if (NcableEs1>30 && NcableEs1<=40){ 
            document.write("<br>Numero de conductor : calibre 10awg")
        } else if (NcableEs1>40 && NcableEs1<=55) {
            document.write("<br> Numero de conductor : calibre 8awg")
        } else if (NcableEs1>55 && NcableEs1<=75) {
            document.write("<br> Numero de conductor : calibre 6awg")
        } else if (NcableEs1>75) {
            document.write("<br> Debe rediseñar el circuito")
        } 
        if (NcableEs1>0 && NcableEs1<=40) {
            document.write("<br>Diametro de ducto: 1/2 in")
        } else if (NcableEs1>40 && NcableEs1<=75){
            document.write("<br>Diametro de ducto: 3/4 in")
        } else (document.write("<br> Debe rediseñar el circuito"))

    } else if (tipoCircuito1==3){
        trifasico1 = 3;
        potenciaEs1 = prompt ("ingrese la potencia electrica de su primer equipo")
        potenciaEs1 = parseInt(potenciaEs1);
        corrienteEs1 = potenciaEs1 / (TensionEs3*1.732050808*0.999902524) ;
        ProteccionEs1 = corrienteEs1 * 1.15;
        NcableEs1 = corrienteEs1 * 1.25;
        
        document.write("CIRCUITO ESPECIAL 1<br>")
        document.write("<br>potencia del equipo: " +potenciaEs1+ "W")
        document.write("<br>corriente nominal es: " +corrienteEs1.toFixed(2)+"A")
        document.write("<br>la tension es: " +TensionEs2+"V")

        
        if (ProteccionEs1>0 && ProteccionEs1<=20) {
            document.write ("<br>proteccion indicada es : 3*20A")
        } else if (ProteccionEs1>20 && ProteccionEs1<=25){
            document.write("<br>proteccion indicada es : 3*25A")
        } else if (ProteccionEs1>25 && ProteccionEs1<=32){
            document.write("<br>proteccion indicada es : 3*32A")
        } else if (ProteccionEs1>32 && ProteccionEs1<=40){
            document.write("<br>proteccion indicada es : 3*40A")
        } else if (ProteccionEs1>40 && ProteccionEs1<=50){
            document.write("<br>proteccion indicada es : 3*50A")
        } else if (ProteccionEs1>50 && ProteccionEs1<=63){
            document.write("<br>proteccion indicada es : 3*63A")
        } else if (ProteccionEs1>63 && ProteccionEs1<=70){
            document.write("<br>proteccion indicada es : 3*70A")
        } else if (ProteccionEs1>70 && ProteccionEs1<=80){
            document.write("<br>proteccion indicada es : 3*80A")
        } else if (ProteccionEs1>80){
            document.write("<br> Debe rediseñar el circuito")
        } 


        if (NcableEs1>0&&NcableEs1<=30){
            document.write ("<br>Numero de conductor : calibre 12awg")
        } else if (NcableEs1>30 && NcableEs1<=40){ 
            document.write("<br>Numero de conductor : calibre 10awg")
        } else if (NcableEs1>40 && NcableEs1<=55) {
            document.write("<br> Numero de conductor : calibre 8awg")
        } else if (NcableEs1>55 && NcableEs1<=75) {
            document.write("<br> Numero de conductor : calibre 6awg")
        } else if (NcableEs1>75) {
            document.write("<br> Debe rediseñar el circuito")
        } 
        if (NcableEs1>0 && NcableEs1<=40) {
            document.write("<br>Diametro de ducto: 1/2 in")
        } else if (NcableEs1>40 && NcableEs1<=75){
            document.write("<br>Diametro de ducto: 3/4 in")
        } else (document.write("<br> Debe rediseñar el circuito"))
    }

    // circuito especial 2

    tipoCircuito2 = prompt("que tipo de circuito es su segundo equipo\n1-monofasico\n2-bifasico\n3-trifasico")
    tipoCircuito2 = parseInt(tipoCircuito2);
    
    if (tipoCircuito2==1){
    monofasico2 = 1;
    potenciaEs2 = prompt ("ingrese la potencia electrica de su segundo equipo")
    potenciaEs2 = parseInt(potenciaEs2);
    corrienteEs2 = potenciaEs2 / TensionEs1;
    ProteccionEs2 = corrienteEs2 * 1.15;
    NcableEs2 = corrienteEs2 * 1.25;

    document.write("<br><br>CIRCUITO ESPECIAL 2<br>")
    document.write("<br>potencia del equipo 2: " +potenciaEs2+ "W")
    document.write("<br>corriente nominal es: " +corrienteEs2.toFixed(2)+"A")
    document.write("<br>la tension es: " +TensionEs1+"V")

    if (ProteccionEs2>0 && ProteccionEs2<=20) {
        document.write ("<br>proteccion indicada es : 1*20A")
    } else if (ProteccionEs2>20 && ProteccionEs2<=25){
        document.write("<br>proteccion indicada es : 1*25A")
    } else if (ProteccionEs2>25 && ProteccionEs2<=32){
        document.write("<br>proteccion indicada es : 1*32A")
    } else if (ProteccionEs2>32 && ProteccionEs2<=40){
        document.write("<br>proteccion indicada es : 1*40A")
    } else if (ProteccionEs2>40 && ProteccionEs2<=50){
        document.write("<br>proteccion indicada es : 1*50A")
    } else if (ProteccionEs2>50 && ProteccionEs2<=63){
        document.write("<br>proteccion indicada es :1*63A")
    } else if (ProteccionEs2>63 && ProteccionEs2<=70){
        document.write("<br>proteccion indicada es :1*70A")
    } else if (ProteccionEs2>70 && ProteccionEs2<=80){
        document.write("<br>proteccion indicada es : 1*80A")
    } else if (ProteccionEs2>80){
        document.write("<br> Debe rediseñar el circuito")
    } 


    if (NcableEs2>0&&NcableEs2<=30){
        document.write ("<br>Numero de conductor : calibre 12awg")
    } else if (NcableEs2>30 && NcableEs2<=40){ 
        document.write("<br>Numero de conductor : calibre 10awg")
    } else if (NcableEs2>40 && NcableEs2<=55) {
        document.write("<br> Numero de conductor : calibre 8awg")
    } else if (NcableEs2>55 && NcableEs2<=75) {
        document.write("<br> Numero de conductor : calibre 6awg")
    } else if (NcableEs2>75) {
        document.write("<br> Debe rediseñar el circuito")
    } 
    if (NcableEs2>0 && NcableEs2<=40) {
        document.write("<br>Diametro de ducto: 1/2 in")
    } else if (NcableEs2>40 && NcableEs2<=75){
        document.write("<br>Diametro de ducto: 3/4 in")
    } else (document.write("<br> Debe rediseñar el circuito"))

} else if (tipoCircuito2==2){
    bifasico2 = 2;
    potenciaEs2 = prompt ("ingrese la potencia electrica de su segundo equipo")
    potenciaEs2 = parseInt(potenciaEs2);
    corrienteEs2 = potenciaEs2 / (TensionEs2*1.414214*0.999902524);
    ProteccionEs2 = corrienteEs2 * 1.15;
    NcableEs2 = corrienteEs2 * 1.25;

    document.write("<br><br>CIRCUITO ESPECIAL 2<br>")
    document.write("<br>potencia del equipo: " +potenciaEs2+ "W")
    document.write("<br>corriente nominal es: " +corrienteEs2.toFixed(2)+"A")
    document.write("<br>la tension es: " +TensionEs2+"V")

    if (ProteccionEs2>0 && ProteccionEs2<=20) {
        document.write ("<br>proteccion indicada es : 2*20A")
    } else if (ProteccionEs2>20 && ProteccionEs2<=25){
        document.write("<br>proteccion indicada es : 2*25A")
    } else if (ProteccionEs2>25 && ProteccionEs2<=32){
        document.write("<br>proteccion indicada es : 2*32A")
    } else if (ProteccionEs2>32 && ProteccionEs2<=40){
        document.write("<br>proteccion indicada es : 2*40A")
    } else if (ProteccionEs2>40 && ProteccionEs2<=50){
        document.write("<br>proteccion indicada es : 2*50A")
    } else if (ProteccionEs2>50 && ProteccionEs2<=63){
        document.write("<br>proteccion indicada es : 2*63A")
    } else if (ProteccionEs2>63 && ProteccionEs2<=70){
        document.write("<br>proteccion indicada es : 2*70A")
    } else if (ProteccionEs2>70 && ProteccionEs2<=80){
        document.write("<br>proteccion indicada es : 2*80A")
    } else if (ProteccionEs2>80){
        document.write("<br> Debe rediseñar el circuito")
    } 


    if (NcableEs2>0&&NcableEs2<=30){
        document.write ("<br>Numero de conductor : calibre 12awg")
    } else if (NcableEs2>30 && NcableEs2<=40){ 
        document.write("<br>Numero de conductor : calibre 10awg")
    } else if (NcableEs2>40 && NcableEs2<=55) {
        document.write("<br> Numero de conductor : calibre 8awg")
    } else if (NcableEs2>55 && NcableEs2<=75) {
        document.write("<br> Numero de conductor : calibre 6awg")
    } else if (NcableEs2>75) {
        document.write("<br> Debe rediseñar el circuito")
    } 
    if (NcableEs2>0 && NcableEs2<=40) {
        document.write("<br>Diametro de ducto: 1/2 in")
    } else if (NcableEs2>40 && NcableEs2<=75){
        document.write("<br>Diametro de ducto: 3/4 in")
    } else (document.write("<br> Debe rediseñar el circuito"))

} else if (tipoCircuito2==3){
    trifasico2 = 3;
    potenciaEs2 = prompt ("ingrese la potencia electrica de su segundo equipo")
    potenciaEs2 = parseInt(potenciaEs2);
    corrienteEs2 = potenciaEs2 / (TensionEs3*1.732050808*0.999902524) ;
    ProteccionEs2 = corrienteEs2 * 1.15;
    NcableEs2 = corrienteEs2* 1.25;

    document.write("<br><br>CIRCUITO ESPECIAL 2<br>")
    document.write("<br>potencia del equipo: " +potenciaEs2+ "W")
    document.write("<br>corriente nominal es: " +corrienteEs2.toFixed(2)+"A")
    document.write("<br>la tension es: " +TensionEs3+"V")

    if (ProteccionEs2>0 && ProteccionEs2<=20) {
        document.write ("<br>proteccion indicada es : 3*20A")
    } else if (ProteccionEs2>20 && ProteccionEs2<=25){
        document.write("<br>proteccion indicada es : 3*25A")
    } else if (ProteccionEs2>25 && ProteccionEs2<=32){
        document.write("<br>proteccion indicada es : 3*32A")
    } else if (ProteccionEs2>32 && ProteccionEs2<=40){
        document.write("<br>proteccion indicada es : 3*40A")
    } else if (ProteccionEs2>40 && ProteccionEs2<=50){
        document.write("<br>proteccion indicada es : 3*50A")
    } else if (ProteccionEs2>50 && ProteccionEs2<=63){
        document.write("<br>proteccion indicada es : 3*63A")
    } else if (ProteccionEs2>63 && ProteccionEs2<=70){
        document.write("<br>proteccion indicada es : 3*70A")
    } else if (ProteccionEs2>70 && ProteccionEs2<=80){
        document.write("<br>proteccion indicada es : 3*80A")
    } else if (ProteccionEs2>80){
        document.write("<br> Debe rediseñar el circuito")
    } 


    if (NcableEs2>0&&NcableEs2<=30){
        document.write ("<br>Numero de conductor : calibre 12awg")
    } else if (NcableEs2>30 && NcableEs2<=40){ 
        document.write("<br>Numero de conductor : calibre 10awg")
    } else if (NcableEs2>40 && NcableEs2<=55) {
        document.write("<br> Numero de conductor : calibre 8awg")
    } else if (NcableEs2>55 && NcableEs2<=75) {
        document.write("<br> Numero de conductor : calibre 6awg")
    } else if (NcableEs2>75) {
        document.write("<br> Debe rediseñar el circuito")
    } 
    if (NcableEs2>0 && NcableEs2<=40) {
        document.write("<br>Diametro de ducto: 1/2 in")
    } else if (NcableEs2>40 && NcableEs2<=75){
        document.write("<br>Diametro de ducto: 3/4 in")
    } else (document.write("<br> Debe rediseñar el circuito"))        

}

// circuito especial 3

tipoCircuito3 = prompt("que tipo de circuito es su tercer equipo\n1-monofasico\n2-bifasico\n3-trifasico")
tipoCircuito3 = parseInt(tipoCircuito3);
document.write("<br><br>CIRCUITO ESPECIAL 3<br>")

if (tipoCircuito3==1){
    monofasico3 = 1;
    potenciaEs3 = prompt ("ingrese la potencia electrica de su tercer equipo")
    potenciaEs3 = parseInt(potenciaEs3);
    corrienteEs3 = potenciaEs3 / TensionEs1;
    ProteccionEs3 = corrienteEs3 * 1.15;
    NcableEs3 = corrienteEs3 * 1.25;

    document.write("<br>potencia del tercer equipo: " +potenciaEs3+ "W")
    document.write("<br>corriente nominal es: " +corrienteEs3.toFixed(2)+"A")
    document.write("<br>la tension es: " +TensionEs1+"V")

    if (ProteccionEs3>0 && ProteccionEs3<=20) {
        document.write ("<br>proteccion indicada es : 1*20A")
    } else if (ProteccionEs3>20 && ProteccionEs3<=25){
        document.write("<br>proteccion indicada es : 1*25A")
    } else if (ProteccionEs3>25 && ProteccionEs3<=32){
        document.write("<br>proteccion indicada es : 1*32A")
    } else if (ProteccionEs3>32 && ProteccionEs3<=40){
        document.write("<br>proteccion indicada es : 1*40A")
    } else if (ProteccionEs3>40 && ProteccionEs3<=50){
        document.write("<br>proteccion indicada es : 1*50A")
    } else if (ProteccionEs3>50 && ProteccionEs3<=63){
        document.write("<br>proteccion indicada es :1*63A")
    } else if (ProteccionEs3>63 && ProteccionEs3<=70){
        document.write("<br>proteccion indicada es :1*70A")
    } else if (ProteccionEs3>70 && ProteccionEs3<=80){
        document.write("<br>proteccion indicada es : 1*80A")
    } else if (ProteccionEs3>80){
        document.write("<br> Debe rediseñar el circuito")
    } 


    if (NcableEs3>0&&NcableEs3<=30){
        document.write ("<br>Numero de conductor : calibre 12awg")
    } else if (NcableEs3>30 && NcableEs3<=40){ 
        document.write("<br>Numero de conductor : calibre 10awg")
    } else if (NcableEs3>40 && NcableEs3<=55) {
        document.write("<br> Numero de conductor : calibre 8awg")
    } else if (NcableEs3>55 && NcableEs3<=75) {
        document.write("<br> Numero de conductor : calibre 6awg")
    } else if (NcableEs3>75) {
        document.write("<br> Debe rediseñar el circuito")
    } 
    if (NcableEs3>0 && NcableEs3<=40) {
        document.write("<br>Diametro de ducto: 1/2 in")
    } else if (NcableEs3>40 && NcableEs3<=75){
        document.write("<br>Diametro de ducto: 3/4 in")
    } else (document.write("<br> Debe rediseñar el circuito"))

} else if (tipoCircuito3==2){
    bifasico3 = 2;
    potenciaEs3 = prompt ("ingrese la potencia electrica de su tercer equipo")
    potenciaEs3 = parseInt(potenciaEs3);
    corrienteEs3 = potenciaEs3 / (TensionEs2*1.414214*0.999902524) ;
    ProteccionEs3 = corrienteEs3 * 1.15;
    NcableEs3 = corrienteEs3 * 1.25;

    document.write("<br>potencia del equipo: " +potenciaEs3+ "W")
    document.write("<br>corriente nominal es: " +corrienteEs3.toFixed(2)+"A")
    document.write("<br>la tension es: " +TensionEs2+"V")

    if (ProteccionEs3>0 && ProteccionEs3<=20) {
        document.write ("<br>proteccion indicada es : 2*20A")
    } else if (ProteccionEs3>20 && ProteccionEs3<=25){
        document.write("<br>proteccion indicada es : 2*25A")
    } else if (ProteccionEs3>25 && ProteccionEs3<=32){
        document.write("<br>proteccion indicada es : 2*32A")
    } else if (ProteccionEs3>32 && ProteccionEs3<=40){
        document.write("<br>proteccion indicada es : 2*40A")
    } else if (ProteccionEs3>40 && ProteccionEs3<=50){
        document.write("<br>proteccion indicada es : 2*50A")
    } else if (ProteccionEs3>50 && ProteccionEs3<=63){
        document.write("<br>proteccion indicada es : 2*63A")
    } else if (ProteccionEs3>63 && ProteccionEs3<=70){
        document.write("<br>proteccion indicada es : 2*70A")
    } else if (ProteccionEs3>70 && ProteccionEs3<=80){
        document.write("<br>proteccion indicada es : 2*80A")
    } else if (ProteccionEs3>80){
        document.write("<br> Debe rediseñar el circuito")
    } 


    if (NcableEs3>0&&NcableEs3<=30){
        document.write ("<br>Numero de conductor : calibre 12awg")
    } else if (NcableEs3>30 && NcableEs3<=40){ 
        document.write("<br>Numero de conductor : calibre 10awg")
    } else if (NcableEs3>40 && NcableEs3<=55) {
        document.write("<br> Numero de conductor : calibre 8awg")
    } else if (NcableEs3>55 && NcableEs3<=75) {
        document.write("<br> Numero de conductor : calibre 6awg")
    } else if (NcableEs3>75) {
        document.write("<br> Debe rediseñar el circuito")
    } 
    if (NcableEs3>0 && NcableEs3<=40) {
        document.write("<br>Diametro de ducto: 1/2 in")
    } else if (NcableEs3>40 && NcableEs3<=75){
        document.write("<br>Diametro de ducto: 3/4 in")
    } else (document.write("<br> Debe rediseñar el circuito"))

} else if (tipoCircuito3==3){
    trifasico3 = 3;
    potenciaEs3 = prompt ("ingrese la potencia electrica de su tercer equipo")
    potenciaEs3 = parseInt(potenciaEs3);
    corrienteEs3 = potenciaEs3 / (TensionEs3*1.732050808*0.999902524) ;
    ProteccionEs3 = corrienteEs3 * 1.15;
    NcableEs3 = corrienteEs3 * 1.25;

    document.write("<br>potencia del equipo: " +potenciaEs3+ "W")
    document.write("<br>corriente nominal es: " +corrienteEs3.toFixed(2)+"A")
    document.write("<br>la tension es: " +TensionEs2+"V")

    if (ProteccionEs3>0 && ProteccionEs3<=20) {
        document.write ("<br>proteccion indicada es : 3*20A")
    } else if (ProteccionEs3>20 && ProteccionEs3<=25){
        document.write("<br>proteccion indicada es : 3*25A")
    } else if (ProteccionEs3>25 && ProteccionEs3<=32){
        document.write("<br>proteccion indicada es : 3*32A")
    } else if (ProteccionEs3>32 && ProteccionEs3<=40){
        document.write("<br>proteccion indicada es : 3*40A")
    } else if (ProteccionEs3>40 && ProteccionEs3<=50){
        document.write("<br>proteccion indicada es : 3*50A")
    } else if (ProteccionEs3>50 && ProteccionEs3<=63){
        document.write("<br>proteccion indicada es : 3*63A")
    } else if (ProteccionEs3>63 && ProteccionEs3<=70){
        document.write("<br>proteccion indicada es : 3*70A")
    } else if (ProteccionEs3>70 && ProteccionEs3<=80){
        document.write("<br>proteccion indicada es : 3*80A")
    } else if (ProteccionEs3>80){
        document.write("<br> Debe rediseñar el circuito")
    } 


    if (NcableEs3>0&&NcableEs3<=30){
        document.write ("<br>Numero de conductor : calibre 12awg")
    } else if (NcableEs3>30 && NcableEs3<=40){ 
        document.write("<br>Numero de conductor : calibre 10awg")
    } else if (NcableEs3>40 && NcableEs3<=55) {
        document.write("<br> Numero de conductor : calibre 8awg")
    } else if (NcableEs3>55 && NcableEs3<=75) {
        document.write("<br> Numero de conductor : calibre 6awg")
    } else if (NcableEs3>75) {
        document.write("<br> Debe rediseñar el circuito")
    } 
    if (NcableEs3>0 && NcableEs3<=40) {
        document.write("<br>Diametro de ducto: 1/2 in")
    } else if (NcableEs3>40 && NcableEs3<=75){
        document.write("<br>Diametro de ducto: 3/4 in")
    } else (document.write("<br> Debe rediseñar el circuito"))



}break;


}
