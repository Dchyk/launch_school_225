var account = {
  balance: 0,
  transactions: [],

  deposit: function(amount) {
    this.balance += amount;
    this.transactions.push({type: 'deposit', amount: amount});
    return amount;
  },

  withdraw: function(amount) {
    if (this.balance < amount) {
      amount = this.balance;
    } 

    this.balance -= amount;
    this.transactions.push({type: 'withdrawal', amount: amount});
    return amount;
  }
}

function makeAccount(number) {
  var balance = 0;
  var transactions = [];
  return {
    number: function() {
      return number;
    },
    balance: function() {
      return balance;
    },
    transactions: function() {
      return transactions;
    },
    deposit: function(amount) {
      this.balance += amount;
      transactions.push({type: "deposit", amount: amount});
      return amount;
    },

    withdraw: function(amount) {
      if (amount > balance) {
        amount = balance;
      }

      balance -= amount;
      transactions.push({type: "withdraw", amount: amount});
      return amount;
    }
  };
}

function makeBank() {
  var accounts = [];
  return {
    openAccount: function() {
      var number = accounts.length + 101;
      var account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}