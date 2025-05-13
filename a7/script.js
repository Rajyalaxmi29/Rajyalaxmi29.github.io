const greet = () => {

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  function add(a, b) {
    return a + b;
  }
  let result1 = add(num1, num2);

  function sub(a, b) {
    return a - b;
  }
  let result2 = sub(num1, num2);

  function mul(a, b) {
    return a * b;
  }
  let result3 = mul(num1, num2);

  function div(a, b) {
    return a / b;
  }
  let result4 = div(num1, num2);

  const output = `Addition: ${result1}<br>Subtraction: ${result2}<br>Multiplication: ${result3}<br>Division: ${result4}`;
  document.getElementById("output").innerHTML = output;
};
