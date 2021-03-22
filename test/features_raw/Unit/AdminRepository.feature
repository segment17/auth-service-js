@Unit @Repository @AdminRepository
Feature: Admin Repository Unit Feature

  #SUCCESS SCENARIOS
  @Unit_Repository_Scenario1
  Scenario Outline: Get admin from repository.
    #Set up mock Repository or real user service -> Mock if @Unit, real if @Integration
    Given there is an admin such as "<admin>"
    #Repository.repository_function()
    When "<repository_function>" is invoked with "<invocation_data>"
    #Check
    Then returned data is as "<expected_data>"
 d
    Examples:
      | admin                                | repository_function  | invocation_data                                | expected_data                                |
      | Unit_AdminRepository_Scenario1.admin | getAdminWithUsername | Unit_AdminRepository_Scenario1.invocation_data | Unit_AdminRepository_Scenario1.expected_data |
