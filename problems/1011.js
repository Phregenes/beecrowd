export function problem(lines) {
  var value = lines.shift();

  const pi = 3.14159;
  let calculatedValue = Math.pow(value, 3);
  let result = (4 / 3) * pi * calculatedValue;

  console.log("VOLUME = " + result.toFixed(3));
}
