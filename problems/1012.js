export function problem(lines) {
  let valueA = parseFloat(lines.shift());
  let valueB = parseFloat(lines.shift());
  let valueC = parseFloat(lines.shift());

  const valuePi = 3.14159;

  console.log(lines)

  console.log(`TRIANGULO: ${((valueA * valueC) / 2).toFixed(3)}`);
  console.log(`CIRCULO: ${(valuePi * Math.pow(valueC, 2)).toFixed(3)}`);
  console.log(`TRAPEZIO: ${(((valueA + valueB) * valueC) / 2).toFixed(3)}`);
  console.log(`QUADRADO: ${(valueB * 4).toFixed(3)}`);
  console.log(`RETANGULO: ${(valueA * valueB).toFixed(3)}`);
}
