'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MoviemappingComponent = function () {
    function MoviemappingComponent($http, $scope, socket) {
      _classCallCheck(this, MoviemappingComponent);

      //this.message = 'Hello';
      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;

      this.theatre_arr = [];
      this.th_arr = [];
      this.MovieData = [];
      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('moviemappingendpoint');
      });
    }

    _createClass(MoviemappingComponent, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/moviemappingendpoints').then(function (response) {
          _this.theatre_arr = response.data;
          _this.socket.syncUpdates('moviemappingendpoint', _this.theatre_arr);
        });
        // this.$http.get('/api/theatreendpoints').then(response => {
        //   this.th_arr = response.data;
        this.$http.get('/api/theatreendpoints').then(function (response) {
          _this.th_arr = response.data;
        });
        this.$http.get('/api/SearchMovieendpoints').then(function (response) {
          _this.MovieData = response.data;
        });
        // this.$http.get('/api/SearchMovieendpoints').then(response => {
        //   this.MovieData = response.data;
        // });
      }
    }, {
      key: 'addmapping',
      value: function addmapping() {
        this.$http.post('/api/moviemappingendpoints', {
          CITYNAME: this.cityname,
          AMPM: this.Am_Pm,
          MINUTE: this.Minute,
          HOUR: this.Hour,
          DATE: this.Date,
          THEATRENAME: this.TheatreName,

          MOVIENAME: this.moviename,
          POSTER: this.poster
        });
      }
    }, {
      key: 'removedata',
      value: function removedata(theatre) {
        this.$http.delete('/api/moviemappingendpoints/' + theatre._id);
      }
    }]);

    return MoviemappingComponent;
  }();

  angular.module('yoTemplateApp').component('moviemapping', {
    templateUrl: 'app/moviemapping/moviemapping.html',
    controller: MoviemappingComponent,
    controllerAs: 'moviemappingCtrl'
  });
})();
//# sourceMappingURL=moviemapping.controller.js.map
