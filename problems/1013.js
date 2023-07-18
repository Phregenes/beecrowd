export function problem(lines) {
  let valueA = parseFloat(lines.shift());
  let valueB = parseFloat(lines.shift());
  let valueC = parseFloat(lines.shift());

  if (valueA > valueB && valueA > valueC) {
    return console.log(`${valueA} eh o maior`)
  } else if(valueB > valueA && valueB > valueC){
    return console.log(`${valueB} eh o maior`)
  } else if(valueC > valueA && valueC > valueB){
    return console.log(`${valueC} eh o maior`)
  }
}