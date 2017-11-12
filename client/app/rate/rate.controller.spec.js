'use strict';

describe('Component: RateComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var RateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RateComponent = $componentController('rate', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
