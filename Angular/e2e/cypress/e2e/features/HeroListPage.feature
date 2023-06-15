Feature: HeroListPage Functionality

    This Feature tests hero list scenarios

    Background: 
        Given the user is on the hero list page

    Scenario: As a toh user, I want to select a hero from the list of heroes in order to see the hero details displayed
        Then the user shall see the hero details after selecting a hero

    Scenario: As a toh user, I want to remove a hero in order to see the hero list decrease
        Then the user shall see the hero list decrease

    Scenario: As a toh user, I want to add a hero in order to see the hero list increase 
        Then the user shall see the hero list increase 

    Scenario: As a toh user, I want to add a hero without a name in order to see the hero list remain the same
        Then the user shall see the hero list remain the same
        


        