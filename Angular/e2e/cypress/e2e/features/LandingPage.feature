Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard

    Scenario: As a toh user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Then the user shall see the top 4 Heroes

    Scenario: As a toh user, I want to select a hero from the dashboard in order to see the hero details displayed
        Then the user shall see the hero details from dashboard

    Scenario: As a toh user, I want to navigate to heroes page in order to see all heroes
        Then the user shall see all heroes

    Scenario: As a toh user, I want clear messages 
        Then the user shall see meassages cleared