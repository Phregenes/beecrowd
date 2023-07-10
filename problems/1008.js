export function problem(lines) {
  let number = lines.shift();
  let workDays = lines.shift();
  let price = lines.shift();

  const total = workDays * price;

  console.log(`NUMBER = ${number}`);
  console.log(`SALARY = U$ ${total.toFixed(2)}`);
}
