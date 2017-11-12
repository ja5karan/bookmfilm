'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var TheatreComponent = function () {
    function TheatreComponent($http, $scope, socket) {
      _classCallCheck(this, TheatreComponent);

      //this.message = 'Hello';
      this.$http = $http;
      this.$scope = $scope;
      this.socket = socket;

      this.Theatres = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('Theatreendpoints');
      });
    }

    _createClass(TheatreComponent, [{
      key: 'addtheatre',
      value: function addtheatre() {
        console.log("function called  thearerd");
        this.$http.post('/api/theatreendpoints', {
          TheatreName: this.TheatreName,
          City: this.City,
          Location: this.Location

          //change

        });
        this.TheatreName = '';
        this.City = '';
        this.Location = '';
      }
    }, {
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/theatreendpoints').then(function (response) {
          _this.Theatres = response.data;
          _this.socket.syncUpdates('theatreendpoints', _this.Theatres);
        });
      }
    }, {
      key: 'remove',
      value: function remove(Theatre) {
        var y = confirm('Are you sure want to delete this record?');
        if (y) {
          this.$http.delete('/api/theatreendpoints/' + Theatre._id);
        }
      }
    }]);

    return TheatreComponent;
  }();

  angular.module('yoTemplateApp').component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl'
  });
})();
//# sourceMappingURL=theatre.controller.js.map
