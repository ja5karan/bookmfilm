'use strict';

var app = require('../..');
import request from 'supertest';

var newRateendpoint;

describe('Rateendpoint API:', function() {

  describe('GET /api/rateendpoints', function() {
    var rateendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/rateendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          rateendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(rateendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/rateendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/rateendpoints')
        .send({
          name: 'New Rateendpoint',
          info: 'This is the brand new rateendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRateendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created rateendpoint', function() {
      expect(newRateendpoint.name).to.equal('New Rateendpoint');
      expect(newRateendpoint.info).to.equal('This is the brand new rateendpoint!!!');
    });

  });

  describe('GET /api/rateendpoints/:id', function() {
    var rateendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/rateendpoints/' + newRateendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          rateendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      rateendpoint = {};
    });

    it('should respond with the requested rateendpoint', function() {
      expect(rateendpoint.name).to.equal('New Rateendpoint');
      expect(rateendpoint.info).to.equal('This is the brand new rateendpoint!!!');
    });

  });

  describe('PUT /api/rateendpoints/:id', function() {
    var updatedRateendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/rateendpoints/' + newRateendpoint._id)
        .send({
          name: 'Updated Rateendpoint',
          info: 'This is the updated rateendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRateendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRateendpoint = {};
    });

    it('should respond with the updated rateendpoint', function() {
      expect(updatedRateendpoint.name).to.equal('Updated Rateendpoint');
      expect(updatedRateendpoint.info).to.equal('This is the updated rateendpoint!!!');
    });

  });

  describe('DELETE /api/rateendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/rateendpoints/' + newRateendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when rateendpoint does not exist', function(done) {
      request(app)
        .delete('/api/rateendpoints/' + newRateendpoint._id)
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
