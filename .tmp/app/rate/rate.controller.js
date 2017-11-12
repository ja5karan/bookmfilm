'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RateComponent = function RateComponent() {
    _classCallCheck(this, RateComponent);

    this.message = 'Hello';
  };

  angular.module('yoTemplateApp').component('rate', {
    templateUrl: 'app/rate/rate.html',
    controller: RateComponent,
    controllerAs: 'rateCtrl'
  });
})();
//# sourceMappingURL=rate.controller.js.map
