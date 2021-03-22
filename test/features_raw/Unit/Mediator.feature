@Unit @Repository @Mediator
Feature: Mediator Unit Features

  #SUCCESS SCENARIOS
  @Unit_Repository_Scenario1
  Scenario Outline: Create token for given username.
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<invocation_data>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | repository_function | invocation_data                         | expected_data                         |
      | createToken         | Unit_Mediator_Scenario1.invocation_data | Unit_Mediator_Scenario1.expected_data |

  #SUCCESS SCENARIOS
  @Unit_Repository_Scenario2
  Scenario Outline: Validate given token
    Given there is an admin such as "<admin>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<invocation_data>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | admin                           | repository_function | invocation_data                           | expected_data                           |
      | Unit_Repository_Scenario2.admin | validate            | Unit_Repository_Scenario2.invocation_data | Unit_Repository_Scenario2.expected_data |