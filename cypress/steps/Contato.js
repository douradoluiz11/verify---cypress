/* global Given, Then, When */
import Login from '../pages/Contato/actions';
import Home from '../pages/Home/actions';



Given(/^Eu acesso o site$/, () => {


   Home.acessarUrl();

   Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

});


And(/^cadastro meu contato "([^"]*)"$/, (tipoLogin) => {
	
   Login.realizarLogin(tipoLogin);
  
});


