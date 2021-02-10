//takes in a 00.00

//once you click the button, calculates 15% and 20% of the input number.

function calculateTips(event) {
  event.preventDefault();
  let number = document.getElementById("billAmount").value;

  let fifteen = number * 1.15;
  let twenty = number * 1.2;

  //if button is clicked, display 15% and 20% amount.

  // cool comment
  //   event.target.innerHTML = "You owe $" + fifteen.toFixed(2);

  //create what we want inside the div
  const display = document.createElement("h1");
  display.innerText = "You owe: $" + fifteen.toFixed(2);

  //get the div showAmount from html
  const targetDiv = document.getElementById("showAmount");

  //put it together: put it inside the div using appendChild

  targetDiv.innerHTML = "";
  targetDiv.appendChild(display);
  console.log(targetDiv);

  //   'ways to get the value of an input into the function'
  //   console.log(number.value);
  //   console.log(event.target[0].value);
}
