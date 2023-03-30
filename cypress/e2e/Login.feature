Feature: User Login
Background:
    Given Visit to the localhost home page

Scenario: Login Feature test with valid creds    
      When user insert a valid Phone number
      And user clicks on the Login Btn
      And user insert a valid verification code
      And user click on the submit button
      Then user will land on the May Garage page