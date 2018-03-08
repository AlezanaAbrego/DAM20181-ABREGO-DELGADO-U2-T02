/**
 * Created by alezana on 8/03/18.
 */
"use strict";
var Alumnos = Array();
var Alumno = (function () {
    function Alumno() {
    }
    Alumno.prototype.createAlumno = function (control, nombre, apellidos, promedio, genero, fecha_nacimiento, activo) {
        var newAlumno;
        newAlumno = {
            no_control: control,
            nombre: nombre,
            apellidos: apellidos,
            promedio: promedio,
            genero: genero,
            fecha_nacimiento: fecha_nacimiento,
            activo: activo
        };
        Alumnos.push(newAlumno);
    };
    Alumno.prototype.mostrarAlumnos = function () {
        console.log(Alumnos);
    };
    Alumno.prototype.deleteAlumno = function (control) {
        Alumnos.forEach(function (elemento) {
            var index = elemento.no_control.indexOf(control);
            if (index > -1) {
                Alumnos.splice(index, 1);
            }
        });
    };
    Alumno.prototype.updateAlumno = function (control, nombre, apellidos, promedio, genero, fecha_nacimiento, activo) {
        Alumnos.forEach(function (elemento) {
            var index = elemento.no_control.indexOf(control);
            console.log(index);
            if (index > -1) {
                Alumnos[index] = {
                    no_control: control,
                    nombre: nombre,
                    apellidos: apellidos,
                    promedio: promedio,
                    genero: genero,
                    fecha_nacimiento: fecha_nacimiento,
                    activo: activo
                };
            }
        });
    };
    return Alumno;
}());
exports.Alumno = Alumno;
//# sourceMappingURL=alumno.js.map