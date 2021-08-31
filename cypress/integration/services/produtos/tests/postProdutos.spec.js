import * as PostProdutos from '../requests/postProdutos.request';
import * as PostLogin from '../../login/requests/postLogin.request';

var faker = require('faker')

describe('Post Produtos', () => {
    it('Adicionar um novo produto', () => {
        var email = faker.internet.email()
        var password = faker.internet.password()


        PostLogin.entrar(email, password).should((resEntrar) => {
            expect(resEntrar.status).to.eq(200)
            PostProdutos.adicionar(resEntrar.body.authorization).should((resProdutos) => {
                expect(resProdutos.status).to.eq(201)
                expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")
            })

        })
    });
});