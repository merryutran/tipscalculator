//takes in a 00.00

//once you click the button, calculates 15% and 20% of the input number.

function calculateTips(event) {
  //refreshes the text after button is clicked
  event.preventDefault();
  let number = parseInt(document.getElementById("billAmount").value);
  let percentOfBill = parseInt(document.getElementById("percentOfBill").value);

  let calculation = number * (percentOfBill / 100) + number;

  //create what we want inside the div
  const display = document.createElement("h1");
  display.innerText = "You owe: $" + calculation.toFixed(2);

  //get the div showAmount from html
  const targetDiv = document.getElementById("showAmount");

  //put it together: put it inside the div using appendChild

  targetDiv.innerHTML = "";
  targetDiv.appendChild(display);
  console.log(targetDiv);
}
