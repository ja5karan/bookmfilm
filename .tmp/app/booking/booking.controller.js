'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var BookingComponent = function () {
    function BookingComponent($http, $scope, socket) {
      var _this = this;

      _classCallCheck(this, BookingComponent);

      this.message = 'Hello';
      this.$http = $http;
      this.socket = socket;
      this.allDates = [];
      this.movDates = [];
      this.currentDate = new Date();

      this.$http.get('/api/moviemappingendpoints/Movie/' + sessionStorage.getItem('MovieName') + '/' + sessionStorage.getItem('City') + '/' + sessionStorage.getItem('Cinema')).then(function (response) {
        _this.allDates = response.data[0].MovieDates;
        var j = 0;
        for (var i = 0; i < _this.allDates.length; i++) {
          var d = new Date(_this.allDates[i]);
          if (d >= new Date()) {
            _this.movDates[j] = _this.allDates[i];
            j++;
          }
        }
        _this.socket.syncUpdates('moviemappingendpoints', _this.movDates);
      });

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('paymentendpoint');
        socket.unsyncUpdates('moviemappingendpoints');
      });
    }

    _createClass(BookingComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this2 = this;

        this.$http.get('api/paymentendpoints/' + sessionStorage.getItem('MovieName') + '/' + sessionStorage.getItem('Cinema') + '/' + sessionStorage.getItem('City') + '/' + sessionStorage.getItem('Class') + '/' + sessionStorage.getItem('Moviedate') + '/' + sessionStorage.getItem('ShowTime')).then(function (response) {
          window.bookedSeats = response.data;
          _this2.socket.syncUpdates('paymentendpoint', window.bookedSeats);
          window.disableSeats();
        });
        this.$http.get('/api/moviesendpoints/' + sessionStorage.getItem('MovieName')).then(function (response) {
          _this2.myMov = response.data;
          _this2.socket.syncUpdates('Movies', _this2.myMov);
          sessionStorage.setItem('MoviePoster', _this2.myMov[0].Poster);
          sessionStorage.setItem('MovieLang', _this2.myMov[0].Language);
        });
      }
    }]);

    return BookingComponent;
  }();

  angular.module('yoTemplateApp').component('booking', {
    templateUrl: 'app/booking/booking.html',
    controller: BookingComponent,
    controllerAs: 'bookingCtrl'
  });
})();
//# sourceMappingURL=booking.controller.js.map
