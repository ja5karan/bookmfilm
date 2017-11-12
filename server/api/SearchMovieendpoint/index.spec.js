'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var SearchMovieendpointCtrlStub = {
  index: 'SearchMovieendpointCtrl.index',
  show: 'SearchMovieendpointCtrl.show',
  create: 'SearchMovieendpointCtrl.create',
  update: 'SearchMovieendpointCtrl.update',
  destroy: 'SearchMovieendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var SearchMovieendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './SearchMovieendpoint.controller': SearchMovieendpointCtrlStub
});

describe('SearchMovieendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(SearchMovieendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/SearchMovieendpoints', function() {

    it('should route to SearchMovieendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'SearchMovieendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/SearchMovieendpoints/:id', function() {

    it('should route to SearchMovieendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'SearchMovieendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/SearchMovieendpoints', function() {

    it('should route to SearchMovieendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'SearchMovieendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/SearchMovieendpoints/:id', function() {

    it('should route to SearchMovieendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'SearchMovieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/SearchMovieendpoints/:id', function() {

    it('should route to SearchMovieendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'SearchMovieendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/SearchMovieendpoints/:id', function() {

    it('should route to SearchMovieendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'SearchMovieendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
