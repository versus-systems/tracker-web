Feature: Create a Task

  Background:
    Given I view the project

  Scenario: Creating a task starts in To Do
    When I add a task 'Test Task'
    Then I see the task 'Test Task' under 'To Do'
