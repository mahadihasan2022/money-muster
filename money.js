
document.getElementById('calculation').addEventListener('click', function () {
//   console.log('button-clicked');

const incomeField = document.getElementById('income-field');
  const incometext = incomeField.value;
  const incomeMoney = parseInt(incometext);
console.log(incomeMoney);

  // foodExpenseMoney
  const foodExpenseMoney = document.getElementById('food-field').value;
  console.log(foodExpenseMoney);

  // rentExpensesMoney
  const rentExpenseMoney = document.getElementById('rent-field').value;
  console.log(rentExpenseMoney);

  // colthesExpensesMoney
  const clothesExpenseMoney = document.getElementById('clothes-field').value;
  console.log(clothesExpenseMoney);

  // totalExpenseMoney
  const totalExpenseMoney =
    parseInt(foodExpenseMoney) +
    parseInt(rentExpenseMoney) +
    parseInt(clothesExpenseMoney);

console.log(totalExpenseMoney);
const expenseText = document.getElementById('total-expenses');
expenseText.innerText = totalExpenseMoney;


    //---------------total balance calculation --------------------------
    const balance = incomeMoney - totalExpenseMoney;
    //console.log(balance);

    //------------------------balance show -----------------------------------
    const balancecalculatetext = document.getElementById('balance');
    balancecalculatetext.innerText = balance;
});
// saving percentice


document.getElementById('calculate').addEventListener('click', function () {
    const percentinputvalue = document.getElementById('input-field');
    percentinput = percentinputvalue.value;
    //console.log(percentinput);


    //-------------------------------- % calculation -------------------------------------
    const incomeField = document.getElementById('income-field');
  const incometext = incomeField.value;
  const incomeMoney = parseInt(incometext);
   

    const saving = (percentinput * incomeMoney) / 100;
    //console.log(saving);

    // saving show 
    const savingcalculatetext = document.getElementById('save');
    savingcalculatetext.innerText = saving;


    // Remaining balance show

    const rebalancetext = document.getElementById('balance');
    const rebalance = rebalancetext.innerText;
    //console.log(rebalance);

    const remainingbalance = (rebalance - saving);
    //console.log(remainingbalance);

    // emaining balance show -----------------------------------
    const remainbaltext = document.getElementById('remain');
    remainbaltext.innerText = remainingbalance;

})