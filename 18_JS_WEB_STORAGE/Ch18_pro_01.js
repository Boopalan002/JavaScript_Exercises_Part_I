// Sample data
const firstName = 'Anne';
const age = 20;
const country = 'India';
const city = 'Chennai';


localStorage.setItem('Name', firstName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);


const student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 25,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'Canada',
    enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));


function createPersonAccount(firstName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
        localStorage.setItem('incomes', JSON.stringify(incomes)); // Store incomes in localStorage
    }


    function addExpense(description, amount) {
        expenses.push({ description, amount });
        localStorage.setItem('expenses', JSON.stringify(expenses)); // Store expenses in localStorage
    }


    function totalIncome() {
        return incomes.reduce((total, item) => total + item.amount, 0);
    }


    function totalExpense() {
        return expenses.reduce((total, item) => total + item.amount, 0);
    }

    function accountInfo() {
        return `${firstName} ${lastName}'s account:\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`;
    }


    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return { firstName, incomes, expenses, addIncome, addExpense, totalIncome, totalExpense, accountInfo, accountBalance };
}


const maxAccount = createPersonAccount('Max');


maxAccount.addIncome('Salary', 3000);
maxAccount.addIncome('Petrol', 1000);
maxAccount.addExpense('Rent', 1200);
maxAccount.addExpense('Food', 300);


localStorage.setItem('maxAccount', JSON.stringify(maxAccount));