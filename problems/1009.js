export function problem (lines) {
  console.log("lines", lines)
  let name = lines.shift();
  let salary = lines.shift();
  let bonus = lines.shift();

  const resolvedBonus = 15 * bonus / 100;
  //Para somar numeros com "." devemos utilizar o parseFloat
  let sum = parseFloat(resolvedBonus) + parseFloat(salary);

  
  console.log("TOTAL = R$ " + sum.toFixed(2))
}