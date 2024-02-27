Feature: "http://www.automationpractice.pl/" Website

  @tc1
  Scenario: User can't make an order before creating an account.
    Given I am on the home page
    When I open first item
    And I Add it to the cart
    And I press "Proceed to checkout"
    And I press "Proceed to checkout" one more time
    Then I've been asked to create an account

  @tc2
  Scenario: User is able to search a product
    Given I am on the home page
    When I enter "Blouse" in the search box
    And I press search button
    Then I see results only containing "Blouse"

  @tc3
  Scenario: User see correct number of items in cart
    Given I am on the home page
    When I open first item
    And I Add it to the cart
    And I press "Proceed to checkout"
    Then There is one item in cart

  @tc4
  Scenario: User able to remove an item from the cart
    Given I am on the home page
    When I open first item
    And I Add it to the cart
    And I press "Proceed to checkout"
    And There is one item in cart
    And I remove it from the cart
    Then I see the cart is empty
