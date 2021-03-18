@Component @Component
Feature: Auth Service Component Features


  @A1 @A1_Scenario1
  Scenario Outline: Give token upon login with username and password (1) (<hiptest-uid>)
    Given there is an admin such as "<admin>"
    When "<endpoint>" is called with "<request_body>"
    Then response is as "<expected_response>"

    Examples:
      | admin | endpoint | request_body | expected_response | hiptest-uid |
      | A1_Scenario1_Variation1.admin | Login | A1_Scenario1_Variation1.request_body | A1_Scenario1_Variation1.expected_response | uid:84bf9a0f-ac3e-4e5b-a5eb-025540999d79 |
