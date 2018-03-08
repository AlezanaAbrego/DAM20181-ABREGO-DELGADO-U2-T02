/**
 * Created by alezana on 8/03/18.
 */



interface alumno {
    no_control: string;
    nombre: string;
    apellidos: string;
    promedio: number;
    genero: string;
    fecha_nacimiento: string;
    activo: boolean;
}

var Alumnos = Array<alumno>();

export class Alumno{

    createAlumno(control,nombre,apellidos,promedio,genero,fecha_nacimiento,activo):void{
    let newAlumno:any;

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
    }


    mostrarAlumnos(){
        console.log(Alumnos);
    }

    deleteAlumno(control):void{
        let i = 0;
        Alumnos.forEach(function(elemento){
            let index = elemento.no_control.indexOf(control);
            i++;

            if (index > -1) {
                Alumnos.splice(i-1, 1);
            };


        });
    }

    updateAlumno(control,nombre,apellidos,promedio,genero,fecha_nacimiento,activo):void{
        let i =0;

        Alumnos.forEach(function(elemento){
            let index = elemento.no_control.indexOf(control);
            i++;
            if(index> -1){
                Alumnos[i-1] = {
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
    }

}

