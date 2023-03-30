import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("Visit to the localhost",()=>{
    cy.visit("http://localhost:4000/auth/sign_up/");
})

When("user insert username and valid email",()=>{
    cy.get('#sign_up--about_me_name').clear();
    cy.get('#sign_up--about_me_name').type("Jhon Wicks3",{timeout:2000});
    cy.get('#sign_up--about_me_email_address').clear();
    cy.get('#sign_up--about_me_email_address').type("1283@gmail.com",{timeout:2000});
    cy.wait(1000);
})
And("user insert a phone number",()=>{
    cy.get('#sign_up--about_me_phone_number').clear();
    cy.get('#sign_up--about_me_phone_number').type("7815610203",{timeout:2000});
    cy.wait(1000);

})
And("user insert a zipcode",()=>{
    cy.get('#sign_up--about_me_zipcode').clear();
    cy.get('#sign_up--about_me_zipcode').type("10005",{timeout:5000});
    cy.wait(1000);
    
})
And("user checked the checkbox",()=>{
    cy.get('#sign_up--about_me_terms').check().should('be.checked',{timeout:5000});
    cy.wait(1000);
    
})
And("user click on the Create Account button",()=>{
    cy.get(".btn").should("be.visible")
    cy.get(".btn").click();
    cy.wait(1000);
})
Then("user will navigate to the verify page",()=>{
    cy.get('[data-phx-link="patch"]').contains("Change your personal info.")
    cy.get('#sign_up--verify_code_code').clear()
    cy.get('#sign_up--verify_code_code').type("1111111",{timeout:2000})
    cy.wait(1000);
    cy.get('.btn').should('be.visible');
    cy.get('.btn').click()
    cy.wait(1000);

})

//Scenario: Check the Hamburger Menu 
When("User click on the Hamburger icon",()=>{
    cy.get('.hamburger').click();
    cy.wait(5000)

})
Then("All menu item should be displayed",()=>{
    cy.get('[href="/auth/sign_in/edit"]').should("have.text","Log in")
})
// And("check the Menubar",()=>{
//     cy.get("#sign_up_frame > div > header > div > div > label > svg.menu.fill-primary-600 > path").click();
// })
