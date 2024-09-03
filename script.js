// Declaración de variables
let alumno = '';
let notasPorAlumno = '';
let mejorAlumno = '';
let mejoresNotas = 0;
let textoMejorAlumno = '';

alumno = prompt("Ingrese el nombre de un alumno o SALIR para terminar");

while (alumno != "SALIR") {
    
    // Función que valida que se ingrese un nro del 1 al 10
    function validar(nota) {
        while (isNaN(nota) || nota < 1 || nota == "" || nota > 10) {
            nota = parseFloat(prompt("Debe ingresar un número del 1 al 10. Por favor ingrese la nota nuevamente"));
        }
        return nota; 
    }

    // Pedidos de notas
    let nota = parseFloat(prompt("Ingrese la nota del primer trimestre"));
    const notaTrim1 = validar(nota);

    nota = parseFloat(prompt("Ingrese la nota del segundo trimestre"));
    const notaTrim2 = validar(nota);

    nota = parseFloat(prompt("Ingrese la nota del tercer trimestre"));
    const notaTrim3 = validar(nota);

    // Cálculo de promedio redondeado
    const promedio = Math.round((notaTrim1 + notaTrim2 + notaTrim3) / 3);

    // Cálculo para saber quien tiene mejor promedio
    if (promedio >= mejoresNotas) {
        
        // Si hay 2 alumnos con el mismo promedio
        if (promedio == mejoresNotas) {
            mejorAlumno = mejorAlumno + ", " + alumno;
            textoMejorAlumno = "Los mejores alumnos son: ";
        // Si hay un alumno con mejor promedio que los demás
        } else {
            mejoresNotas = promedio;
            mejorAlumno = alumno;
            textoMejorAlumno = "El mejor alumno es: ";
        }
    } 

    // Concatena los alumnos con las notas y el promedio
    notasPorAlumno = notasPorAlumno + "Alumno: " + alumno + ", Notas: " + notaTrim1 + ", " + notaTrim2 + ", " + notaTrim3 + ", Promedio: " + promedio + ". \n";
    
    // Vuelve a pedir un alumno 
    alumno = prompt("Ingrese el nombre de otro alumno o SALIR para terminar");    

}

// Muestra notas de alumnos con promedio en consola
console.log(notasPorAlumno);

// Muestra un alert con el mejor o los mejores alumnos
alert(textoMejorAlumno + mejorAlumno);