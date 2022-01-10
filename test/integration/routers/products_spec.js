describe('Routes: Products', () => {
    const defaultProduct = {
        name: 'Default product',
        description: 'product description',
        price: 100
    };

    describe('GET /products', () => {
        it('Isso deve retornar uma lista de produtos', done => {
            request
                .get('/products')
                .end((err, res) => {
                    expect(res.body[0]).to.eql(defaultProduct);
                    done(err);
                });
        });
    });
});