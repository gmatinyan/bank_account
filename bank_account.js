var accounts = [];

function createAccount(account) {
    accounts.push(account);
    return account;
}

function getAccount(username){
    var matchedAccount; 

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === username){
            matchedAccount = accounts[i];
        }
    }
    // accounts.forEach(function(account){
    //     if (account.username === username){
    //         matchedAccount = account;
    //     }
    // });

    return matchedAccount;
}

function deposit (account, amount){
    if (typeof amount === 'number'){
        account.balance += amount;
    } else {
        console.log('Amount is not a number.');
    }
    
}

function withdraw (account, amount){
    if (typeof amount === 'number'){
        account.balance -= amount;
    } else {
        console.log('Amount is not a number.');
    }
}

function getBalance (account){
    return account.balance;
}

function createBalanceGetter(account) {
    return function () {
        return account.balance;
    }
}

var gohar = createAccount({
    username: 'Gohar',
    balance: 1000
});

deposit(gohar, 5000);
withdraw(gohar, 'mystring');

var gohar2 = getAccount('Gohar');

var getGohar2Balance = createBalanceGetter(gohar2);


console.log(getGohar2Balance());