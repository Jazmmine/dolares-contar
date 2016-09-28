var numeroFilas = parseInt(prompt("Ingrese número de filas"));
var contador = 0;
var caracter = "$";

function contar (){
	contador= contador+1;
}

function imprimir (){
	for (; contador <= numeroFilas; contar()) {
		for (var j = 0; j <contador; j++) {
			document.write(caracter);
		}
		document.write("<br>");
	}
}

imprimir();

/* no esta tan bien utilizar la funcion contar (), aunque tbn sale*/
