/**
 * Created by alezana on 8/03/18.
 */
"use strict";
/**ALUMNOS
 * no_control,
 * nombre,
 * apellidos,
 * promedios,
 * genero,
 * fecha_nacimiento,
 * activo
 * *
 CRUD
 Funciones
 1.-Agregar
 2.-Borrar
 3.- Imprimir
 4.-Actualizar
 */
var alumno_1 = require("./alumno");
var nuevo = new alumno_1.Alumno();
nuevo.createAlumno("13400378", "Alexia", "Abrego Delgado", 80, "Femenino", "28-10-1995", true);
nuevo.createAlumno("12472278", "Jeremy", "Abrego Delgado", 70, "Masculino", "28-10-1990", false);
nuevo.createAlumno("13400404", "Juan", "Perez Dominguez", 71, "Masculino", "1-05-1994", true);
nuevo.mostrarAlumnos();
//nuevo.deleteAlumno("12472278");
//nuevo.mostrarAlumnos();
console.log("----------------------------------------------");
nuevo.updateAlumno("13400378", "Pablo", "Miralejos Miracerca", 78, "Masculino", "1-05-2000", false);
nuevo.mostrarAlumnos();
console.log("----------------------------------------------");
//# sourceMappingURL=index.js.map