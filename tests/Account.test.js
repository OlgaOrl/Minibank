import Account from '../src/Account.js';

describe('Account', () => {
  describe('constructor', () => {
    test('should create account with initial balance', () => {
      const account = new Account(100);
      expect(account.getBalance()).toBe(100);
    });

    test('should create account with zero balance by default', () => {
      const account = new Account();
      expect(account.getBalance()).toBe(0);
    });
  });

  describe('deposit', () => {
    test('should increase balance when depositing positive amount', () => {
      const account = new Account(50);
      account.deposit(30);
      expect(account.getBalance()).toBe(80);
    });

    test('should handle multiple deposits', () => {
      const account = new Account(0);
      account.deposit(50);
      account.deposit(30);
      account.deposit(20);
      expect(account.getBalance()).toBe(100);
    });

    test('should throw error when depositing negative amount', () => {
      const account = new Account(100);
      expect(() => account.deposit(-50)).toThrow('Amount must be positive');
    });

    test('should throw error when depositing zero', () => {
      const account = new Account(100);
      expect(() => account.deposit(0)).toThrow('Amount must be positive');
    });

    test('should not change balance when deposit fails', () => {
      const account = new Account(100);
      try {
        account.deposit(-50);
      } catch (e) {
        // Expected error
      }
      expect(account.getBalance()).toBe(100);
    });
  });

  describe('withdraw', () => {
    test('should decrease balance when withdrawing valid amount', () => {
      const account = new Account(100);
      account.withdraw(30);
      expect(account.getBalance()).toBe(70);
    });

    test('should allow withdrawing entire balance', () => {
      const account = new Account(100);
      account.withdraw(100);
      expect(account.getBalance()).toBe(0);
    });

    test('should throw error when withdrawing more than balance', () => {
      const account = new Account(50);
      expect(() => account.withdraw(100)).toThrow('Insufficient funds');
    });

    test('should throw error when withdrawing negative amount', () => {
      const account = new Account(100);
      expect(() => account.withdraw(-20)).toThrow('Amount must be positive');
    });

    test('should throw error when withdrawing zero', () => {
      const account = new Account(100);
      expect(() => account.withdraw(0)).toThrow('Amount must be positive');
    });

    test('should not change balance when withdrawal fails', () => {
      const account = new Account(50);
      try {
        account.withdraw(100);
      } catch (e) {
        // Expected error
      }
      expect(account.getBalance()).toBe(50);
    });
  });

  describe('getBalance', () => {
    test('should return current balance', () => {
      const account = new Account(100);
      expect(account.getBalance()).toBe(100);
    });

    test('should return updated balance after operations', () => {
      const account = new Account(100);
      account.deposit(50);
      account.withdraw(30);
      expect(account.getBalance()).toBe(120);
    });
  });
});

