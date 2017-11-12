'use strict';

var app = require('../..');
import request from 'supertest';

var newSearchMovieendpoint;

describe('SearchMovieendpoint API:', function() {

  describe('GET /api/SearchMovieendpoints', function() {
    var SearchMovieendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/SearchMovieendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          SearchMovieendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(SearchMovieendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/SearchMovieendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/SearchMovieendpoints')
        .send({
          name: 'New SearchMovieendpoint',
          info: 'This is the brand new SearchMovieendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newSearchMovieendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created SearchMovieendpoint', function() {
      expect(newSearchMovieendpoint.name).to.equal('New SearchMovieendpoint');
      expect(newSearchMovieendpoint.info).to.equal('This is the brand new SearchMovieendpoint!!!');
    });

  });

  describe('GET /api/SearchMovieendpoints/:id', function() {
    var SearchMovieendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/SearchMovieendpoints/' + newSearchMovieendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          SearchMovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      SearchMovieendpoint = {};
    });

    it('should respond with the requested SearchMovieendpoint', function() {
      expect(SearchMovieendpoint.name).to.equal('New SearchMovieendpoint');
      expect(SearchMovieendpoint.info).to.equal('This is the brand new SearchMovieendpoint!!!');
    });

  });

  describe('PUT /api/SearchMovieendpoints/:id', function() {
    var updatedSearchMovieendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/SearchMovieendpoints/' + newSearchMovieendpoint._id)
        .send({
          name: 'Updated SearchMovieendpoint',
          info: 'This is the updated SearchMovieendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedSearchMovieendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSearchMovieendpoint = {};
    });

    it('should respond with the updated SearchMovieendpoint', function() {
      expect(updatedSearchMovieendpoint.name).to.equal('Updated SearchMovieendpoint');
      expect(updatedSearchMovieendpoint.info).to.equal('This is the updated SearchMovieendpoint!!!');
    });

  });

  describe('DELETE /api/SearchMovieendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/SearchMovieendpoints/' + newSearchMovieendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when SearchMovieendpoint does not exist', function(done) {
      request(app)
        .delete('/api/SearchMovieendpoints/' + newSearchMovieendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
