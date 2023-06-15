import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the hero list page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
	cy.contains('nav', 'Heroes').children().last().click();
});

Then(/^the user shall see the hero details after selecting a hero$/, () => {
	cy.get('.heroes').children().children().first().invoke('text').then((text) => {
		cy.get('.heroes').children().first().click();
		cy.get('#hero-name').then(($select) => {
			expect(text).to.contain($select.val())
		  });
	});
});

Then(/^the user shall see the hero list decrease$/, () => {
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.heroes').children().last().find('button').click();
		cy.get('.heroes').children().should('have.length', length - 1);
	});
});

Then(/^the user shall see the hero list increase$/, () => {
	cy.get('#new-hero').type('TestName');
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.add-button').click();
		cy.get('.heroes').children().should('have.length', length + 1);
	});
});

Then(/^the user shall see the hero list remain the same$/, () => {
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.add-button').click();
		cy.get('.heroes').children().should('have.length', length);
	});
});

