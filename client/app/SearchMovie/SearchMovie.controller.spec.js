'use strict';

describe('Component: SearchMovieComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var SearchMovieComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SearchMovieComponent = $componentController('SearchMovie', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
