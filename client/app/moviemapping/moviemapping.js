'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/moviemapping', {
        template: '<moviemapping></moviemapping>'
      });
  });
