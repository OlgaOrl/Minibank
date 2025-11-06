import { Given, When, Then } from '@cucumber/cucumber';
import { strict as assert } from 'assert';
import Account from '../src/Account.js';

// Shared state
let account;
let error;

// Given steps
Given('I have a new account with balance {int}', function (initialBalance) {
  account = new Account(initialBalance);
});

Given('I have an account with balance {int}', function (initialBalance) {
  account = new Account(initialBalance);
});

// When steps - successful operations
When('I deposit {int} euros', function (amount) {
  account.deposit(amount);
});

When('I withdraw {int} euros', function (amount) {
  account.withdraw(amount);
});

// When steps - operations that should fail
When('I try to deposit {int} euros', function (amount) {
  try {
    account.deposit(amount);
  } catch (e) {
    error = e.message;
  }
});

When('I try to withdraw {int} euros', function (amount) {
  try {
    account.withdraw(amount);
  } catch (e) {
    error = e.message;
  }
});

// Then steps
Then('my balance should be {int}', function (expectedBalance) {
  assert.equal(account.getBalance(), expectedBalance);
});

Then('I should get an error {string}', function (expectedError) {
  assert.equal(error, expectedError);
  error = null; // Reset error for next scenario
});

