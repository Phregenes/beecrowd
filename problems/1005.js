export function problem(lines) {
  var A = parseFloat(lines.shift()) * 3.5;
  var B = parseFloat(lines.shift()) * 7.5;

  var media = (A + B) / 11;

  console.log("MEDIA = " + media.toFixed(5));
}
