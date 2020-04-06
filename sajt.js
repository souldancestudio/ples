function Izracunaj(){
	var racun=0;
	if(document.cenovnik.moderan.checked==true){
		if(document.cenovnik.izbor1.checked==true)
			racun+=1200;
		else if(document.cenovnik.izbor2.checked==true)
			racun+=1700;
		else if (document.cenovnik.izbor3.checked==true)
			racun+=2200;
	}
    if(document.cenovnik.gimnastika.checked==true){
		if(document.cenovnik.izbor4.checked==true)
			racun+=1000;
		else if(document.cenovnik.izbor5.checked==true)
			racun+=1500;
		else if (document.cenovnik.izbor6.checked==true)
			racun+=2000;
	}
    if(document.cenovnik.rekreacija.checked==true){
		if(document.cenovnik.izbor7.checked==true)
			racun+=800;
		else if(document.cenovnik.izbor8.checked==true)
			racun+=1300;
	}
		alert(" Članarina iznosi " + racun + " dinara. ");
	}
	

