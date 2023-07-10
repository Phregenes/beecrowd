export function problem(lines) {
  // let value1 = lines.shift();
  // let value2 = lines.shift();
  
  function calcularTotal(lista) {
    debugger
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
      const valores = lista[i].split(' ');
      const quantidade = parseInt(valores[1]);
      const preco = parseFloat(valores[2]);
      const totalItem = quantidade * preco;
      total += totalItem;
    }
    return total;
  }

  const listaValores = ['16 2 3.50', '13 6 5.80'];
  console.log("VALOR A PAGAR: R$ ", calcularTotal(listaValores));
}