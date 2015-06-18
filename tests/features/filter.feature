Feature: Text filter

  Scenario: Text uppercase
    When I browse to the "/"
    When I enter "Lorem ipsum dolor sit amet" into "inputs.tellMe" field
    Then the css element ".active" should contain the text "LOREM IPSUM DOLOR SIT AMET"
