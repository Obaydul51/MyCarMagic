import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("Visit to the localhost home page",()=>{
    cy.visit(Cypress.env('login_url')+"/auth/sign_in/");
})
When("user insert a valid Phone number",()=>{
    cy.get('#sign_in--index_phone_number').clear();
    cy.get('#sign_in--index_phone_number').type("781561-0206",{timeout: 6000})
    cy.wait(2000)

})
And("user clicks on the Login Btn",()=>{
    cy.get(".btn").click();

})
And("user insert a valid verification code",()=>{
    cy.get("#sign_in--verify_code_code").clear();
    cy.get("#sign_in--verify_code_code").type("1111111",{timeout: 6000})
    cy.wait(2000)
})
And("user click on the submit button",()=>{
    cy.get(".btn").click();

})
Then("user will land on the May Garage page",()=>{
    cy.get(".text-4xl.text-primary.font-bold.text-center.py-4.border-b-neutral-500.border-b").should("contain","My Garage");
})