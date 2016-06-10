Feature: Display a Project

  Scenario: The initial project page
    When I view the project
    Then I see 'Sample Project'
