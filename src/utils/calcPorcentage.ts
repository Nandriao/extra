function CalcPorcentage(valorInicial: number, valorFinal: number) {
  const porcentage = (valorInicial / valorFinal) * 100;

  return porcentage.toFixed(2) + "%"
}

export default CalcPorcentage;