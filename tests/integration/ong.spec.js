const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });
      
    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ONG Huriel Lopes",
	            email: "contato@ongbsb.com.br",
	            whatsapp: "61982990477",
	            city: "Brasília",
	            uf: "DF"
            })

            expect(response.body).toHaveProperty('id')
            expect(response.body.id).toHaveLength(8)
    })
})