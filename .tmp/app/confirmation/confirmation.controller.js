'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var ConfirmationComponent = function () {
    function ConfirmationComponent() {
      _classCallCheck(this, ConfirmationComponent);

      this.$http = $http;
      this.$scope = $scope;
      this.socket = socket;
      this.MovieData = [];
      this.confirmData = [];
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('paymentendpoint');
      });
    }

    _createClass(ConfirmationComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/paymentendpoints/').then(function (response) {
          _this.MovieData = response.data;
          _this.socket.syncUpdates('paymentendpoint', _this.MovieData);
        });
      }
    }]);

    return ConfirmationComponent;
  }();

  angular.module('yoTemplateApp').component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent,
    controllerAs: 'confirmationCtrl'
  });
})();
//# sourceMappingURL=confirmation.controller.js.map
