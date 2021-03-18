@Component
Feature: Auth Service Component Features

  @A1 @A1_Scenario1
  Scenario Outline: Give token upon login with username and password
    #Set up mock repository or real database
    Given there is an admin such as "<admin>"
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"

    Examples:
      | admin                         | endpoint | request_body                         | expected_response                         |
      | A1_Scenario1_Variation1.admin | Login    | A1_Scenario1_Variation1.request_body | A1_Scenario1_Variation1.expected_response |
