function createClosureExample1() {
    let outerVar = 'I am outer';
    
    function innerFunction() {
        console.log(`Inner function accessing outer variable: ${outerVar}`);
    }

    return innerFunction;
}

const innerFunc = createClosureExample1();
innerFunc(); 


function createClosureExample2() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count incremented: ${count}`);
    }

    function decrement() {
        count--;
        console.log(`Count decremented: ${count}`);
    }

    function getCount() {
        console.log(`Current count: ${count}`);
    }

    return { increment, decrement, getCount };
}

const counter = createClosureExample2();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.getCount();   


function createPersonAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        let total = 0;
        incomes.forEach(item => {
            total += item.amount;
        });
        return total;
    }

    function totalExpense() {
        let total = 0;
        expenses.forEach(item => {
            total += item.amount;
        });
        return total;
    }

    function accountInfo() {
        return `${firstName} ${lastName}'s account:\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`;
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return { addIncome, addExpense, accountInfo, accountBalance };
}


const anandKumarAccount = createPersonAccount('Anand', 'Kumar');
anandKumarAccount.addIncome('Salary', 3000);
anandKumarAccount.addIncome('Petrol', 1000);
anandKumarAccount.addExpense('Rent', 1200);
anandKumarAccount.addExpense('Food', 300);

console.log(anandKumarAccount.accountInfo());



console.log(`Current Balance: ${anandKumarAccount.accountBalance()}`);
