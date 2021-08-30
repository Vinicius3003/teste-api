import * as PostProdutos from '../requests/postProdutos.request';
import * as PostLogin from '../../login/requests/postLogin.request';

describe('Post Produtos', () => {
    it('Adicionar um novo produto', () => {
        PostLogin.entrar().should((resEntrar) => {
            expect(resEntrar.status).to.eq(200)
            PostProdutos.adicionar(resEntrar.body.authorization).should((resProdutos) => {
                expect(resProdutos.status).to.eq(201)
                expect(resProdutos.body.message).to.eq("Cadastro realizado com sucesso")
            })

        })
    });
});