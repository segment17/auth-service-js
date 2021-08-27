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

  @A1 @Faulty @A1_Scenario1_Faulty
  Scenario Outline: Do not give token upon login with incorrect username and/or incorrect password
    #Set up mock repository or real database
    Given there is an admin such as "<admin>"
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"

    Examples:
      | admin                                | endpoint | request_body                                | expected_response                                |
      | A1_Scenario1_Faulty_Variation1.admin | Login    | A1_Scenario1_Faulty_Variation1.request_body | A1_Scenario1_Faulty_Variation1.expected_response |
      | A1_Scenario1_Faulty_Variation2.admin | Login    | A1_Scenario1_Faulty_Variation2.request_body | A1_Scenario1_Faulty_Variation2.expected_response |

  @A0 @A0_Scenario1 @B2 @B3 @B4 @M1 @M2 @M3
  Scenario Outline: Verify token
    #Set up mock repository or real database
    Given there is an admin such as "<admin>"
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"

    Examples:
      | admin                         | endpoint | request_body                         | expected_response                         |
      | A0_Scenario1_Variation1.admin | Validate | A0_Scenario1_Variation1.request_body | A0_Scenario1_Variation1.expected_response |

  @A0 @A0_Scenario1 @B2 @B3 @B4 @M1 @M2 @M3
  Scenario Outline: Reject invalid token
    #Set up mock repository or real database
    Given there is an admin such as "<admin>"
    When "<endpoint>" is called with "<request_body>"
    #Check
    Then response is as "<expected_response>"

    Examples:
      | admin                                | endpoint | request_body                                | expected_response                                |
      | A0_Scenario1_Faulty_Variation1.admin | Validate | A0_Scenario1_Faulty_Variation1.request_body | A0_Scenario1_Faulty_Variation1.expected_response |
      | A0_Scenario1_Faulty_Variation2.admin | Validate | A0_Scenario1_Faulty_Variation2.request_body | A0_Scenario1_Faulty_Variation2.expected_response |
