'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/confirmation', {
        template: '<confirmation></confirmation>'
      });
  });
