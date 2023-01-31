export function problem (lines) {
  let A = lines.shift();
  let B = lines.shift();
  let C = lines.shift();
  let D = lines.shift();

  const resolved = A*B-C*D

  console.log("DIFERENCA = " + resolved)
}