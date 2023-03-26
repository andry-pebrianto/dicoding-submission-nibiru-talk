/**
 * - Login spec
 *   - should display login page correctly
 *   - should display toast when email is empty
 *   - should display toast when password is empty
 *   - should display toast when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it(
    "should display login page correctly",
    {
      defaultCommandTimeout: 20000,
    },
    () => {
      cy.get('input[placeholder="Email"]').should("be.visible");
      cy.get('input[placeholder="Password"]').should("be.visible");
      cy.get("button")
        .contains(/^Login$/)
        .should("be.visible");
    }
  );

  it(
    "should display toast when email is empty",
    {
      defaultCommandTimeout: 20000,
    },
    () => {
      cy.get('input[placeholder="Email"]').type("example@mail.com");

      cy.get("button")
        .contains(/^Login$/)
        .click();

      cy.get(".Toastify").children().its("length").should("be.gt", 0);
    }
  );

  it(
    "should display toast when password is empty",
    {
      defaultCommandTimeout: 20000,
    },
    () => {
      cy.get('input[placeholder="Password"]').type("secretpassword");

      cy.get("button")
        .contains(/^Login$/)
        .click();

      cy.get(".Toastify").children().its("length").should("be.gt", 0);
    }
  );

  it(
    "should display toast when email and password are wrong",
    {
      defaultCommandTimeout: 20000,
    },
    () => {
      cy.get('input[placeholder="Email"]').type("uyjcciie@gmail.com");
      cy.get('input[placeholder="Password"]').type("cajuacbkghj");

      cy.get("button")
        .contains(/^Login$/)
        .click();

      cy.get(".Toastify").children().its("length").should("be.gt", 0);
    }
  );

  it(
    "should display homepage when email and password are correct",
    {
      defaultCommandTimeout: 20000,
    },
    () => {
      cy.get('input[placeholder="Email"]').type("aswassaw@gmail.com");
      cy.get('input[placeholder="Password"]').type("aswassaw");

      cy.get("button")
        .contains(/^Login$/)
        .click();

      cy.get(".nav-link").children().should("have.length", 3);
    }
  );
});
