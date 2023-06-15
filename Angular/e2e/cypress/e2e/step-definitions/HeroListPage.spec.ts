import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the hero details after selecting a hero$/, () => {
	cy.contains('nav', 'Heroes').children().last().click();
	cy.get('.heroes').children().first().invoke('text').then((text) => {
		cy.get('.heroes').children().first().click();
		cy.contains(text.trim().toUpperCase() + ' Details');
	});
});

Then(/^the user shall see the hero list decrease$/, () => {
	cy.contains('nav', 'Heroes').children().last().click();
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.heroes').children().last().find('button').click();
		cy.get('.heroes').children().should('have.length', length - 1);
	});
});

Then(/^the user shall see the hero list increase$/, () => {
	cy.contains('nav', 'Heroes').children().last().click();
	cy.get('#new-hero').type('TestName');
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.add-button').click();
		cy.get('.heroes').children().should('have.length', length + 1);
	});
});

Then(/^the user shall see the hero list remain the same$/, () => {
	cy.contains('nav', 'Heroes').children().last().click();
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.add-button').click();
		cy.get('.heroes').children().should('have.length', length);
	});
});

Then(/^the user shall see meassages cleared$/, () => {
    cy.get('.clear').click();
    cy.get('app-messages').should('be.hidden');
});
