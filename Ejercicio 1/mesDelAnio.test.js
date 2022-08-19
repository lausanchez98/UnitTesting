const mesAnio = require("./mesDelAnio");

test ("Imprimir mes del año correcto - 2 = Febrero",() => {
    expect (mesAnio.mesAnio(2)).toBe("Febrero"); // passed
});

test ("Imprime mes del año incorrecto - 5 != Junio", () => {
    expect (mesAnio.mesAnio(5)).toBe(Junio); // failed
})

test ("Imprime mes del año como undefined - 13 / undefined", () => {
    expect (mesAnio.mesAnio(13)).toBe(undefined) // passed
}) 