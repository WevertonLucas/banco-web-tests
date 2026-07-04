Cypress.Commands.add('verificarMensagemNoToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoSelect', (label, opcao) => {
    cy.get(`label[for="${label}"]`).parent().as(`campo-${label}`)
    cy.get(`@campo-${label}`).click()
    cy.get(`@campo-${label}`).contains(opcao).click()
})