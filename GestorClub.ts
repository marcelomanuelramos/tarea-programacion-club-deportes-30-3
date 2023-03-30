import {Jugador, Deporte} from "./Jugador";

const fs = require('fs');
const readlineSync = require('readline-sync');

class GestorClub{
    constructor(){
        fs.writeFileSync('./socios.json', '[]')
    }

    data(){
        return JSON.parse(fs.readFileSync('./socios.json'))
    }

    agregarSocio(){
        let nombre = readlineSync.question('Nombre del socio: ');
        let apellido = readlineSync.question('Apellido del socio: ');
        let fechaNacimiento = readlineSync.question('Fecha de nacimiento del socio: ');
        let dni = readlineSync.question('DNI del socio: ');
        let telefono = readlineSync.question('Telefono del socio: ');
        let miembroDesde = readlineSync.question('Miembro desde del socio: ');

        let deportes = [ 'futbol', 'basket', 'tenis', 'voley', 'natacion', 'gym'];

        let deporte = readlineSync.keyInSelect(deportes, 'Seleccionar deporte del socio: ');
       
        let nuevoSocio = new Jugador(nombre, apellido, fechaNacimiento,
             dni, telefono, miembroDesde, deporte)

        let socios = [...this.data(), nuevoSocio];     
        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 3))
    }

    buscarPorNombre(nombre: string){
        let socioNombre = this.data().find((socio: { nombre: string; }) => socio.nombre === nombre)
          console.log(socioNombre);
          return socioNombre;
    }
    buscarPorApellido(apellido: string){
        let socioApellido= this.data().find((socio: { apellido: string; }) => socio.apellido === apellido)
          console.log(socioApellido);
          return socioApellido;
    }

    buscarPorDni(dni: string){
        let socioDni = this.data().find((socio: { dni: string; }) => socio.dni === dni)
        console.log(socioDni);
        return socioDni;
    }

    buscarPorDeporte(deporte: Deporte){
        let socioDeporte = this.data().find((socio: { deporte: Deporte; }) => socio.deporte === deporte)
        console.log(socioDeporte);
        return socioDeporte;
    }

}
export default GestorClub;