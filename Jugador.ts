import MiembroClub from "./Miembro";

export enum Deporte{
    futbol,
    basket,
    tenis,
    voley,
    natacion,
    gym
}

export class Jugador extends MiembroClub{
    deporte: Deporte;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, dni: number, telefono: number,
         miembroDesde: string, deporte: Deporte){
        super(nombre, apellido, fechaNacimiento, dni, telefono, miembroDesde)
        this.deporte = deporte;
    }
}