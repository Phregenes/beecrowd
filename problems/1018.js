export function problem(lines) {
  const celulas = [100, 50, 20, 10, 5, 2, 1];
  let valor = lines[0];
  console.log(valor)

  for (let i = 0; i < celulas.length; i++) {
    if (valor >= celulas[i]) {
      let quantidadeNotas = Math.floor(valor / celulas[i]);
      valor -= quantidadeNotas * celulas[i] ;
      console.log(`${quantidadeNotas} nota(s) de R$ ${celulas[i]},00`);
    } else {
      console.log(`0 nota(s) de R$ ${celulas[i]},00`);
    }
  }
}