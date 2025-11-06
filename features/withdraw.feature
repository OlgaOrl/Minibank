# language: en
Feature: Withdraw money from account
  As a bank customer
  I want to withdraw money from my account
  So that I can use my funds

  Scenario: Successful withdrawal
    Given I have an account with balance 100
    When I withdraw 30 euros
    Then my balance should be 70

  Scenario: Withdraw more than balance should fail
    Given I have an account with balance 50
    When I try to withdraw 100 euros
    Then I should get an error "Insufficient funds"
    And my balance should be 50

  Scenario: Withdraw negative amount should fail
    Given I have an account with balance 100
    When I try to withdraw -20 euros
    Then I should get an error "Amount must be positive"
    And my balance should be 100

