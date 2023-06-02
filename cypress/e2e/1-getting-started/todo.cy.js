/// <reference types="cypress" />

describe('Git hub', () => {
  beforeEach(() => {
    cy.visit('https://github.com/')
  });

  it('mostrar pagina git hub', () => {
   cy.get('a.d-inline-block.d-lg-none.flex-order-1.f5.no-underline.border.color-border-default.rounded-2.px-2.py-1.color-fg-inherit').should('be.visible');
  });
  it('buscar cypress en github', () => {
    cy.get(".Button-content span.Button-label .my-1").first().click({force: true});
    cy.wait(1000);
    cy.get(".js-site-search-form input").first().should('be.visible');
    cy.get(".js-site-search-form input").first().focus().type("cypress");
    cy.get(".js-site-search-form input").first().type('{enter}');
    cy.contains('repository results').should('be.visible');
    cy.get('[href="/cypress-io/cypress"]').first().should('be.visible');
    cy.get('[href="/cypress-io/cypress"]').first().should('have.text', 'cypress-io/cypress');
    cy.get('[href="/cypress-io/cypress"]').first().click({force: true});
    cy.get('[href="/cypress-io"]').should('have.text', '\n        cypress-io\n');
   });

   it('buscar calidad en github', () => {
    cy.get(".Button-content span.Button-label .my-1").first().click({force: true});
    cy.wait(1000);
    cy.get(".js-site-search-form input").first().should('be.visible');
    cy.get(".js-site-search-form input").first().focus().type("calidad");
    cy.get(".js-site-search-form input").first().type('{enter}');
    cy.contains('repository results').should('be.visible');
    cy.get('[href="/MOOC-tutorials/ImageJ"]').first().should('be.visible');
    cy.get('[href="/MOOC-tutorials/ImageJ"]').first().should('have.text', 'MOOC-tutorials/ImageJ');
    cy.get('[href="/MOOC-tutorials/ImageJ"]').first().click({force: true});
    cy.get('[href="/MOOC-tutorials"]').should('have.text', '\n        MOOC-tutorials\n');
   });

  it('buscar python en github', () => {
    cy.get(".Button-content span.Button-label .my-1").first().click({force: true});
    cy.wait(1000);
    cy.get(".js-site-search-form input").first().should('be.visible');
    cy.get(".js-site-search-form input").first().focus().type("python");
    cy.get(".js-site-search-form input").first().type('{enter}');
    cy.contains('repository results').should('be.visible');
    cy.get(".Box  img.d-block").should('be.visible');
    cy.get(".menu").find('a').should('have.length', 10);
    cy.get(".menu").find('a').eq(3).click({force: true});
    cy.get('[href="/dthibau/kafka-solutions/pull/1"]').find('em').should('have.text', 'Python');
    cy.get(".menu").find('a').eq(5).click({force: true});
    cy.wait(500);
    cy.get(".menu").find('a').eq(6).click({force: true});
    cy.get(".select-menu-modal div.select-menu-list").find('a').should('have.length', 7);
    cy.get(".select-menu-modal div.select-menu-list").find('a').eq(3).click({force: true});//newest
    cy.get('[data-view-component="true"]').find('span').should('have.text','\n      \n            \n            \n    \n            \n            Newest');
   });

})