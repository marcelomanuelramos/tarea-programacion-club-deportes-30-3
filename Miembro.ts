import Persona from "./Persona";

 abstract class MiembroClub implements Persona{
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    dni: number;
    telefono: number;
    miembroDesde: string;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, dni: number, telefono: number,
        miembroDesde: string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.fechaNacimiento = new Date(fechaNacimiento).toLocaleDateString();
            this.dni = dni;
            this.telefono = telefono;
            this.miembroDesde = new Date(miembroDesde).toLocaleDateString();
        }
}
export default MiembroClub;