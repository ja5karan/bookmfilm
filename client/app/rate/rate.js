'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rate', {
        template: '<rate></rate>'
      });
  });
