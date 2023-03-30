Feature: New User Registration
Background:
    Given Visit to the localhost
    
Scenario: Check the Hamburger Menu 
    When User click on the Hamburger icon
    Then All menu item should be displayed

Scenario: User registration by happy path
    
      When user insert username and valid email
      And user insert a phone number
      And user insert a zipcode
      And user checked the checkbox
      And user click on the Create Account button
      Then user will navigate to the verify page

