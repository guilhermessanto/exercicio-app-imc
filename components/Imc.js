const calculaImc = (peso, valor2) => {
  let altura = valor2 * valor2;
  let resultado = peso / altura;

  return resultado.toFixed(2);
};

export default calculaImc;
