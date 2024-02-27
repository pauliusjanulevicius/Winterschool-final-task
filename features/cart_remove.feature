Feature: Removing item from cart

  @tc4
  Scenario: User able to remove an item from the cart
    Given I am on the home page
    When I open first item
    And I Add it to the cart
    And I press "Proceed to checkout"
    And There is one item in cart
    And I remove it from the cart
    Then I see the cart is empty
