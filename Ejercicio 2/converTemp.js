// Conversor de temperatura Celsius a Kelvin
const celToKel = (ctemp) => {
  let ktemp = ctemp + 273.15;
  return ktemp;
};

// Conversor de temperatura Kelvin a Celsius
const kelToCel = (ktemp) => {
  let ctemp = ktemp - 273;
  return ctemp;
};

const convers = {
  celToKel,
  kelToCel,
};

module.exports = convers;
