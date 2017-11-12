'use strict';

(function(){

class RateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoTemplateApp')
  .component('rate', {
    templateUrl: 'app/rate/rate.html',
    controller: RateComponent,
    controllerAs: 'rateCtrl'
  });

})();
