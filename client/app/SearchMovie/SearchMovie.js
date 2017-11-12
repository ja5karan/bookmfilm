'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/SearchMovie', {
        template: '<search-movie></search-movie>'
      });
  });
