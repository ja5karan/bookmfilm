'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var rateendpointCtrlStub = {
  index: 'rateendpointCtrl.index',
  show: 'rateendpointCtrl.show',
  create: 'rateendpointCtrl.create',
  update: 'rateendpointCtrl.update',
  destroy: 'rateendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var rateendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './rateendpoint.controller': rateendpointCtrlStub
});

describe('Rateendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(rateendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/rateendpoints', function() {

    it('should route to rateendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'rateendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/rateendpoints/:id', function() {

    it('should route to rateendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'rateendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/rateendpoints', function() {

    it('should route to rateendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'rateendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/rateendpoints/:id', function() {

    it('should route to rateendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'rateendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/rateendpoints/:id', function() {

    it('should route to rateendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'rateendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/rateendpoints/:id', function() {

    it('should route to rateendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'rateendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
