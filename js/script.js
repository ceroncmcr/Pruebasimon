var nom;
var materia;
var i,j;
arreglo = new Array();
var suma=0, prom;
var apro=0,repro=0;
var notameno,notamayo;
var mosprom,mosapro,mosrepro;


function enviar(){
	nom=document.getElementById("nombre").value;
	materia= document.getElementById("materia").value;
	alert("Bienvenido "+nom+ " a la Materia " +materia);
}

function notas(){
	for(i=0;i<6;i++){
		arreglo[i]=document.getElementById(i+1).value;
	}
	creartabla();
}
function creartabla(){
	document.write("<table>");
	for(i=0;i<6;i++){
	document.write("<tr>");
	document.write("<td>");
	document.write("Nota "+(i+1)+":");
	document.write("</td>");
	document.write("<td>");
	document.write(arreglo[i]);
	document.write("</td>");
	document.write("</tr>");
	}
	document.write("</table>")
	mosprom=promedio();
	document.write("El promedio es: "+ mosprom);
	document.write("<br>La nota mayor es: "+ notamayor());
	document.write("<br>La nota menor es: "+ notamenor());
	mosapro=notasaprovadas()
	document.write("<br>Cantidad de notas aprovadas: "+ mosapro);
	mosrepro=notasreprovadas();
	document.write("<br>Cantidad de notas reprovadas: "+ mosrepro);
	mensa(mosprom);
	mensa2(mosapro,mosrepro);
	image(mosprom);
}
function promedio(){
	for(i=0;i<6;i++){
		suma = parseInt(suma)+ parseInt(arreglo[i]);
	}
	prom= suma/6;
	return prom;
}
function notamenor(){
	notameno=arreglo[0];
	for(i=0;i<6;i++){
		if(notameno>parseInt(arreglo[i])){
			notameno=arreglo[i];
		}
	}
	return notameno;
}
function notamayor(){
	notamayo=arreglo[0];
	for(i=0;i<6;i++){
		if(notamayo<parseInt(arreglo[i])){
			notamayo=arreglo[i];
		}
	}
	return notamayo;
}
function notasaprovadas(){
	for(i=0;i<6;i++){
		if(arreglo[i]>=7){
			apro++;
		}
	}
	return apro;
}
function notasreprovadas(){
	for(i=0;i<6;i++){
		if(arreglo[i]<7){
			repro++;
		}
	}
	return repro;
}
function mensa(mosprom){
	if(mosprom>=7){
		alert("Felicidades aprovo la materia");
	}
	else{
		alert("Lastimosamente tendras que graduarte el proximo ano");
	}
}
function mensa2(mosapro,mosrepro){
	if(mosrepro>mosapro){
		alert("Tu rendimiento es ineficiente");
	}
	else{
		alert("Tienes un buen rendimiento academico");
	}
}
function image(mosprom){
	if(mosprom<5){
		var texto="<br><img src='img/carita.jpg'/>";
   		document.writeln(texto);
	}
}

