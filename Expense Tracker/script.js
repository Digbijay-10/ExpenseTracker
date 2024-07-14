const expenseForm = document.getElementById('expenseForm')

const expenseList = document.getElementById('expenseList')

expenseForm.addEventListener('submit', function (event){
  event.preventDefault();
  const description = document.getElementById('description').value

  const category = document.getElementById('Category').value

  const amount = document.getElementById('amount').value

  if(description && category && !isNaN(amount)){
    const expense = document.createElement('tr')

    expense.innerHTML = `<td>${description}</td>
    <td>${category}</td>
    <td>${amount}</td>
    <td><button class="btn btn-danger" onclick=deleteExpense(this)>Delete</button></td>`

    expenseList.appendChild(expense);
    expenseForm.reset(); 
  }
})

function clearAll(){
  expenseList.innerHTML = '';
}

// ----method 1 of deleting a specific row------

// function deleteExpense(button) {
//   const row = button.parentElement.parentElement;
//   expenseList.removeChild(row);
// }

// ----method 2 of deleting a specific row------

function deleteExpense(button) {
  const row = button.parentElement.parentElement;
  const rows = Array.from(expenseList.children);
  const filteredRows = rows.filter(r => r !== row);
  expenseList.innerHTML = '';
  filteredRows.forEach(r => expenseList.appendChild(r));
}

