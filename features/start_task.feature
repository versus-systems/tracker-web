Feature: Start a Task

  Background:
    Given I view the project
    And I add a task 'Test Task'

  Scenario: Starting the task moves to In Progress
    When I start the task
    Then I see the task 'Test Task' under 'In Progress'
