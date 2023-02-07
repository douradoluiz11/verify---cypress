

const el = require ('./elements').ELEMENTS;

class Home {


    acessarUrl () {

    

        cy.visit('/');
        cy.xpath(el.contato).click();
        cy.wait(10000);
        cy.scrollTo(0, 900); 
        cy.scrollTo('bottom'); // Scroll the window 500px down
        


        


    }

}

export default new Home();

