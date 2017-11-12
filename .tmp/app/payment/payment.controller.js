'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var PaymentComponent = function () {
    function PaymentComponent($http, $scope, socket) {
      _classCallCheck(this, PaymentComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.socket = socket;

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('paymentendpoint');
      });
    }

    _createClass(PaymentComponent, [{
      key: 'savePaymentDetails',
      value: function savePaymentDetails() {
        this.$http.post('/api/paymentendpoints', {
          MovieName: sessionStorage.getItem('MovieName'),
          Cinema: sessionStorage.getItem('Cinema'),
          CityName: sessionStorage.getItem('City'),
          Seats: JSON.parse(sessionStorage.getItem('JsonSeatNos')),
          SeatClass: sessionStorage.getItem('Class'),
          NoofTickets: sessionStorage.getItem('NoofSeats'),
          MovieDate: sessionStorage.getItem('Moviedate'),
          ShowTime: sessionStorage.getItem('ShowTime'),
          BookingDateTime: Date(),
          Email: this.Email,
          ContactNo: this.ContactNumber,
          AmountPaid: sessionStorage.getItem('Amt'),

          SEATS: this.seat
          // location.href = '/confirmation';
        });
      }
    }]);

    return PaymentComponent;
  }();

  angular.module('yoTemplateApp').component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });
})();
//# sourceMappingURL=payment.controller.js.map
