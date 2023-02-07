
const el = require ('./elements').ELEMENTS;
const login = require('../../data/login.data.json');

class Login {

    

    realizarLogin (tipoLogin) {
        
        var dados = login.filter(a=>a.scenario == tipoLogin);
        var dado = dados[0];

        cy.xpath(el.nome).type(dado.data.user);
        cy.xpath(el.email).type(dado.data.email);
        cy.xpath(el.celular).type(dado.data.telefone);
        cy.xpath(el.desafio).click();
        cy.xpath(el.desafio).type(dado.data.desafio);
        cy.xpath(el.checkBox).click();
        cy.xpath(el.btnEnviar).click();
        cy.scrollTo('bottom');
        cy.xpath(el.txt,{ timeout: 10000 }).should('be.visible');
        
    
        if(tipoLogin.includes("INVALIDO")){


          // cy.intercept('@auth', (req) => {

             //   expect(req.statusCode).be.eq(400)
                cy.xpath(el.loginFail).should('have.text',dado.data.messageError);

           //  })
            
        
        }else{

            
            //  cy.intercept('@auth', (req) => {

                cy.xpath(el.loginSucesso, { timeout: 10000 }).should('be.visible');
                cy.xpath(el.loginSucesso).contains(dado.data.txtLogado);
             //   expect(req.statusCode).be.eq(200);


          //  })
        }


    }


}

export default new Login();