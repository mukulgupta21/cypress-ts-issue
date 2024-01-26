import { utilA } from '../../src/utils/util.js';

describe('template spec', () => {
  it('passes', () => {
    utilA();
    cy.visit('https://example.cypress.io');
  })
})