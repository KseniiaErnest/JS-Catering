'use strict'

const btn = document.querySelector('#btn');

btn.addEventListener('click', calc);

function calc(e) {
  e.preventDefault();

  const numberInput = document.querySelector('#number').value;
  const plan = document.querySelector('#plan').value;
  let discount;

if (numberInput === '' || plan === '0' || numberInput < 1) {
  alert('Please select a plan and enter a valid number of people.')
  return
}

// To dispaly per person price: we get a string so first change it to a number value and then use .toFixed() method
  let perPerson = Number(plan).toFixed(2);
  document.querySelector('#perPerson').textContent = `$ ${perPerson}`;

  // Discounts conditions
  if (numberInput > 10 && numberInput <= 50) {
    discount = perPerson * 0.05;
  } else if (numberInput > 50 && numberInput <= 150) {
    discount = perPerson * 0.10;
  } else if (numberInput > 150 && numberInput <= 300) {
    discount = perPerson * 0.20;
  } else if (numberInput <= 10) {
    discount = 0;
  } else {
    discount = perPerson * 0.30;
  }

  // To display discounts
  let discountPerPerson = perPerson - discount;
  document.querySelector('#discountPerPerson').textContent = `$ ${discountPerPerson.toFixed(2)}`;

  // To display total amount
  let totalAmount = discountPerPerson * numberInput;
  document.querySelector('#total').textContent = `$ ${totalAmount.toFixed(2)}`;

}

