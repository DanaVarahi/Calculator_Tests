// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('the number buttons update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

  it('Has working operator buttons', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('Chains multiple operations together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number8').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('Displays negative numbers correctly', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-3')
  })

  it('Displays decimals correctly', () => {
    cy.get('#number6').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('Displays very large numbers correctly', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '997002999000')
  })

  it('should display Not a Number when number is divided by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Not a Number')
  })

})
