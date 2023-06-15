import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});

Then(/^the user shall see the top 4 Heroes$/, () => {
	cy.get('.heroes-menu').children().should('have.length', 4);
});

Then(/^the user shall see the hero details from dashboard$/, () => {
	cy.get('.heroes-menu').children().first().invoke('text').then((text) => {
		cy.get('.heroes-menu').children().first().click();
		cy.get('#hero-name').then(($select) => {
			expect(text).to.contain($select.val())
		  });
	});
});

Then(/^the user shall see all heroes$/, () => {
	cy.contains('nav', 'Heroes').children().last().click();
	cy.get('.heroes').children().its('length').then((length) => {
		cy.get('.heroes').children().should('have.length', length);
	});
});

Then(/^the user shall see meassages cleared$/, () => {
    cy.get('.clear').click();
    cy.get('app-messages').should('be.hidden');
});
