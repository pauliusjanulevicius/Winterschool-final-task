Feature: Search

  @tc2
  Scenario: User is able to search a product
    Given I am on the home page
    When I enter "Blouse" in the search box
    And I press search button
    Then I see results only containing "Blouse"