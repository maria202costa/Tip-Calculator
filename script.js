//For the calculation:
//tips per person: total bill * tips % / total of people
//bill per person: bill per person(bill / amount of people) + tip per person

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".person-input");
const tipsBtn = document.querySelectorAll(".btns");
const customInput = document.getElementById("custom-input");

const billForm = document.getElementById("bill-form");
const customForm = document.querySelector(".custom-form");
const peopleForm = document.getElementById("people-form");
const divForm = document.querySelector(".select-div");

const tipPerPerson = document.querySelector(".tip-per-person");
const totalPerPerson = document.querySelector(".total-per-person");

const resetBtn = document.querySelector(".reset-btn");
const textErrorBill = document.getElementById("error-text");

function textResults(tipResult, totalResult) {
  tipPerPerson.textContent = `$${tipResult.toFixed(2)}`;
  totalPerPerson.textContent = `$${totalResult.toFixed(2)}`;
}

//when the button of tips is clicked, the event happens and the result is shown:
tipsBtn.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    e.preventDefault();

    //get the values of the inputs and buttons:
    tipPercent = parseFloat(btns.innerText.replace("%", "") / 100);
    totalBill = parseFloat(billInput.value);
    amountOfPeople = peopleInput.value;

    if (amountOfPeople <= 0) {
      textErrorBill.textContent = "Can't be zero";
      peopleInput.classList.add("error");

      setTimeout(function () {
        textErrorBill.textContent = "";
        peopleInput.classList.remove("error");
      }, 2000);
    }

    const tipResult = (totalBill * tipPercent) / amountOfPeople;
    const totalResult = totalBill / amountOfPeople + tipPercent;

    textResults(tipResult, totalResult);
  });
});

//results with the custom input:
function customTipResults(tipAmount, totalBill) {
  tipPerPerson.textContent = `$${tipAmount.toFixed(2)}`;
  totalPerPerson.textContent = `$${totalBill.toFixed(2)}`;
}

divForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const billValue = billInput.value;
  const peopleValue = peopleInput.value;
  const customValue = customInput.value / 100;

  if (peopleValue == 0 || peopleValue == "") {
    textErrorBill.textContent = "Can't be zero";
    peopleInput.classList.add("error");

    setTimeout(function () {
      textErrorBill.textContent = "";
      peopleInput.classList.remove("error");
    }, 2000);
  } else {
    const tipAmount = (billValue * customValue) / peopleValue;
    const totalBill = billValue / peopleValue + customValue;

    customTipResults(tipAmount, totalBill);
  }
});

//reset button:
resetBtn.addEventListener("click", () => {
  tipPerPerson.textContent = "$0.00";
  totalPerPerson.textContent = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";
});
