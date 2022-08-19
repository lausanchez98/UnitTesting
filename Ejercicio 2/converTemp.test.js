const converTemp = require("./converTemp");

test ("Que convierta correctamente de Celsius a Kelvin - 35° C = 308.15° K", () => {
    expect (converTemp.celToKel(35)).toBe(308.15); // passed
})

test ("Que convierta incorrectamente de Celsius a Kelvin - -8° C != 265° K", () => {
    expect (converTemp.celToKel(-8)).toBe(265); // failed
})

test ("Que convierta correctamente de Kelvin a Celsius - 368° K = 94.85° C", () => {
    expect (converTemp.kelToCel(368)).toBeCloseTo(94.85,-2); // passed
})

test ("Que convierta incorrectamente de Kelvin a Celsius - 283° K != 23° C", () => {
    expect (converTemp.kelToCel(283)).toBe(23); // failed
})