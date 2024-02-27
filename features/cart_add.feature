Feature: Adding item to cart

  @tc3
  Scenario: User see correct number of items in cart
    Given I am on the home page
    When I open first item
    And I Add it to the cart
    And I press "Proceed to checkout"
    Then There is one item in cart