/// <reference types="cypress" />

let payloadAddLogin = require('../payloads/add-login.payload.json')

function entrar(email, password) {

    


    return cy.request({
        method: 'POST',
        url: "login",
        headers: {
            accept: "application/json"
        },
        failOnStatusCode: false,
       body: payloadAddLogin
      /* body: {email, password} */
    })

}

export {entrar};