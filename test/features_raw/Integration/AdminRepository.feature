@Integration @Repository @AdminRepository
Feature: Admin Repository Integration Feature

  #SUCCESS SCENARIOS
  @Unit_Repository_Scenario1 @A1
  Scenario Outline: Get admin from repository.
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is an admin such as "<admin>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<invocation_data>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | admin                                | repository_function  | invocation_data                                | expected_data                                |
      | Unit_AdminRepository_Scenario1.admin | getAdminWithUsername | Unit_AdminRepository_Scenario1.invocation_data | Unit_AdminRepository_Scenario1.expected_data |

  #SUCCESS SCENARIOS
  @Unit_Repository_Scenario1_Faulty @A1
  Scenario Outline: Fail to get non-existent admin from repository.
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is an admin such as "<admin>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<invocation_data>"
    #Check
    Then returned data is as "<expected_data>"

    Examples:
      | admin                                                  | repository_function  | invocation_data                                                  | expected_data                                                  |
      | Unit_AdminRepository_Scenario1_Faulty_Variation1.admin | getAdminWithUsername | Unit_AdminRepository_Scenario1_Faulty_Variation1.invocation_data | Unit_AdminRepository_Scenario1_Faulty_Variation1.expected_data |
      | Unit_AdminRepository_Scenario1_Faulty_Variation2.admin | getAdminWithUsername | Unit_AdminRepository_Scenario1_Faulty_Variation2.invocation_data | Unit_AdminRepository_Scenario1_Faulty_Variation2.expected_data |
