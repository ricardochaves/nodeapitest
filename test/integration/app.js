describe('Rotas de Livros', () => {
  const Books = app.datasource.models.Books;
  const defaultBook = {
    id: 1,
    name: 'Default Book',
  };

  beforeEach((done) => {
    Books
      .destroy({ where: {} })
      .then(() => Books.create(defaultBook))
      .then(() => {
        done();
      });
  });

  describe('Rota GET /books', () => {
    it('Deve retornar uma lista de livros', (done) => {
      request
        .get('/books')
        .end((err, res) => {
          expect(res.body[0].id).to.be.eql(defaultBook.id);
          expect(res.body[0].name).to.be.eql(defaultBook.name);

          done(err);
        });
    });
  });

  describe('Rota GET /books/{id}', () => {
    it('Deve retornar um livro', (done) => {
      request
        .get('/books/1')
        .end((err, res) => {
          expect(res.body.id).to.be.eql(defaultBook.id);
          expect(res.body.name).to.be.eql(defaultBook.name);

          done(err);
        });
    });
  });

  describe('Rota POST /books', () => {
    it('Deve criar um livro', (done) => {
      const newBook = {
        id: 2,
        name: 'newBook',
      };

      request
        .post('/books')
        .send(newBook)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(newBook.id);
          expect(res.body.name).to.be.eql(newBook.name);

          done(err);
        });
    });
  });

  describe('Rota PUT /books/{id}', () => {
    it('Deve atualizar um livro', (done) => {
      const updatedBook = {
        id: 1,
        name: 'updated book',
      };

      request
        .put('/books/1')
        .send(updatedBook)
        .end((err, res) => {
          expect(res.body).to.be.eql([1]);

          done(err);
        });
    });
  });


  describe('Rota DELETE /books/{id}', () => {
    it('Deve deletar um livro', (done) => {
      request
        .delete('/books/1')
        .end((err, res) => {
          expect(res.statusCode).to.be.eql(204);

          done(err);
        });
    });
  });
});
