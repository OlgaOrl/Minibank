class Account {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

export default Account;

