export function problem (lines) {
  let X = lines.shift();
  let Y = lines.shift();

  console.log(X)
  console.log(Y)
  const resolved = X/Y

  console.log(resolved.toFixed(3) + ' km/l')
}