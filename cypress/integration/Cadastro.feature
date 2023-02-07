
Feature: Contato
   Como desenvolvedor quero testar os passos de contato 

    Scenario Outline: Cadastro com sucesso <Fluxo>

        Given Eu acesso o site
        And  cadastro meu contato "<Fluxo>"
       

    Examples:
    |  Fluxo         |
    | LOGIN_VALIDO   |
    


    
