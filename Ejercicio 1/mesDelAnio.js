// Desarrolle un programa que reciba como entrada un número entre 1 y 12 e
// imprima el nombre del mes correspondiente. Tome en cuenta posibles
// valores erróneos en la entrada.

let mes;
const mesAnio = op => {
    switch (op) {
        case 1:
            mes = "Enero"; 
            return mes
            break;
        case 2:
            mes = "Febrero";
            return mes
            break;
        case 3:
            mes = "Marzo";
            return mes
            break;
        case 4:
            mes = "Abril";
            return mes
            break;
        case 5:
            mes = "Mayo";
            return mes
            break;
        case 6:
            mes = "Junio";
            return mes
            break;
        case 7:
            mes = "Julio";
            return mes
            break;
        case 8:
            mes = "Agosto";
            return mes
            break;
        case 9:
            mes = "Septiembre";
            return mes
            break;
        case 10:
            mes = "Octubre";
            return mes
            break;
        case 11:
            mes = "Noviembre";
            return mes
            break;
        case 12:
            mes = "Diciembre";
            return mes
            break;
        default:
            mes = undefined;
            break;
    }
}

const funMes = {
    mesAnio
}

module.exports = funMes;