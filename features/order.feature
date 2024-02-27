Feature: Order

  @tc1
  Scenario: User can't make an order before creating an account.
    Given I am on the home page
    When I open first item
    And I Add it to the cart
    And I press "Proceed to checkout"
    And I press "Proceed to checkout" one more time
    Then I've been asked to create an account
