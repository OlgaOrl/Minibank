# language: en
Feature: Deposit money to account
  As a bank customer
  I want to deposit money to my account
  So that I can increase my balance

  Scenario: Successful deposit to new account
    Given I have a new account with balance 0
    When I deposit 100 euros
    Then my balance should be 100

  Scenario: Multiple deposits
    Given I have a new account with balance 0
    When I deposit 50 euros
    And I deposit 30 euros
    Then my balance should be 80

  Scenario: Deposit negative amount should fail
    Given I have a new account with balance 100
    When I try to deposit -50 euros
    Then I should get an error "Amount must be positive"
    And my balance should be 100

