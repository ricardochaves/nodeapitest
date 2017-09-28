import BooksController from '../../../controllers/books';

describe('Controllers: Books', () => {
  describe('Get all books: getALL()', () => {
    it('Deve retornar uma lista de livros.', () => {
      const Books = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.6922Z',
        updated_at: '2016-08-06T23:55:36.6922Z',
      }];

      td.when(Books.findAll({})).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getAll()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Get a book: getById()', () => {
    it('Deve retornar um livro.', () => {
      const Books = {
        findOne: td.function(),
      };

      const expectedResponse = {
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.6922Z',
        updated_at: '2016-08-06T23:55:36.6922Z',
      };

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Create a book: create()', () => {
    it('Deve criar um livro.', () => {
      const Books = {
        create: td.function(),
      };

      const requestBody = {
        name: 'Test Book',
      };

      const expectedResponse = {
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:55:36.6922Z',
        updated_at: '2016-08-06T23:55:36.6922Z',
      };

      td.when(Books.create(requestBody)).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.create(requestBody)
        .then((response) => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('Update a book: update()', () => {
    it('Deve atualizar um livro existente.', () => {
      const Books = {
        update: td.function(),
      };

      const requestBody = {
        id: 1,
        name: 'Test Book Updated',
      };

      const expectedResponse = {
        id: 1,
        name: 'Test Book Updated',
        created_at: '2016-08-06T23:55:36.6922Z',
        updated_at: '2016-08-06T23:55:36.6922Z',
      };

      td.when(Books.update(requestBody, { where: { id: 1 } })).thenResolve(expectedResponse);

      const booksController = new BooksController(Books);
      return booksController.update(requestBody, { id: 1 })
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('Delete a book: update()', () => {
    it('Deve deletar um livro existente.', () => {
      const Books = {
        destroy: td.function(),
      };

      td.when(Books.destroy({ where: { id: 1 } })).thenResolve({});

      const booksController = new BooksController(Books);
      return booksController.delete({ id: 1 })
        .then((response) => {
          expect(response.statusCode).to.be.eql(204);
        });
    });
  });
});
