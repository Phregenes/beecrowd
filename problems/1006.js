export function problem(lines) {
  let notaA = lines.shift();
  let notaB = lines.shift();
  let notaC = lines.shift();

  // Defina os pesos de cada nota
  const pesoA = 2;
  const pesoB = 3;
  const pesoC = 5;

  const somaPesos = pesoA + pesoB + pesoC;
  const media = (notaA * pesoA + notaB * pesoB + notaC * pesoC) / somaPesos;
  const mediaTotal = media.toFixed(1);

  console.log(`MEDIA = ${mediaTotal}`);
}
