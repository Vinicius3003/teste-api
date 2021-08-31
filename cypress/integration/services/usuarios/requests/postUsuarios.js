/// <reference types="cypress" />

let payloadAddUsusarios = require('../payloads/add-usuarios.payload.json');
let faker = require('faker');

function criarUsuario(email, password) {
   
    payloadAddUsusarios.nome = faker.name.findName()
    payloadAddUsusarios.email = email
    payloadAddUsusarios.password = password
    

    return cy.request({
        method: "POST",
        url: "usuarios",
        headers: {
            accept: "application/json",
            

        },
        failOnStatusCode: false,
        body: payloadAddUsusarios
    })

}

export {criarUsuario};