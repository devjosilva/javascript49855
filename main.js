

var nombre = "";
var anioNac = 0;
const anioActual = new Date().getFullYear(); //Obtiene año actual

while (true){
    if (nombre=="")
    {
        nombre = nombrePersona();
        if (nombre!="")
        {
            //alert("Bienvenido " + nombre + "!");
            document.write("<h3>Bienvenido <bold>" + nombre + "!</bold></h3>")
        }
        continue;
    }

    if (anioNac == 0)
    {
        anioNac = parseInt(anioNacimiento())

        if (isNaN(anioNac) || anioNac == null || anioNac < 1 || anioNac > anioActual)
        {
            alert("Año de nacimiento incorrecto");
            anioNac=0;
            continue;
        }
        document.write("<h3>Año nacimiento: <bold>" + anioNac.toString() + "</bold></h3>")
    }

    break;
}

let edad = CalcularEdad(anioNac, anioActual)
//alert("Usted tiene " + edad.toString() + " años");
document.write("<h3>Edad: <bold>" + edad.toString() + " años.</bold></h3>")

function nombrePersona (){
    return prompt("Para continuar ingrese su nombre:");
}

function anioNacimiento (){
    return prompt("Ingrese su año de nacimiento:");
}

function CalcularEdad(anio1, anio2)
{
    return anio2 - anio1;
}