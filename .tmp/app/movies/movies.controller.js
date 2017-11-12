'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MoviesComponent = function () {
    function MoviesComponent($http, $scope, socket) {
      _classCallCheck(this, MoviesComponent);

      this.$http = $http;
      this.socket = socket;
      this.$scope = $scope;
      this.MovieData = [];
      this.MovieDetails = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('moviesendpoint');
      });
    }

    _createClass(MoviesComponent, [{
      key: 'SearchMovie',
      value: function SearchMovie() {
        var _this = this;

        this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=e98ca6e8024686f7117e1bb4fdfeaee5&query=' + this.MovieName + '&year=' + this.Year).then(function (response) {
          console.log(response.data.results[0].id);
          var MovieID = response.data.results[0].id;
          _this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=e98ca6e8024686f7117e1bb4fdfeaee5').then(function (movieres) {
            _this.MovieDetails = movieres.data;
            console.log(_this.MovieDetails);
          });
        });
      }
    }, {
      key: 'addMovie',
      value: function addMovie() {
        this.$http.post('/api/moviesendpoints', {
          MovieName: this.MovieName,
          Year: this.MovieDetails.year,
          Title: this.MovieDetails.original_title,
          StarCast: this.MovieDetails.cast,
          Duration: this.MovieDetails.runtime,
          Language: this.MovieDetails.lang,
          Poster: this.MovieDetails.cov,
          Genre: this.MovieDetails.gen.name
        });
      }
    }, {
      key: '$onInit',
      value: function $onInit() {
        var _this2 = this;

        this.$http.get('/api/moviesendpoints').then(function (response) {
          _this2.MovieData = response.data;
          _this2.socket.syncUpdates('moviesendpoint', _this2.MovieData);
        });
      }
    }, {
      key: 'remove',
      value: function remove(Movie) {

        this.$http.delete('/api/moviesendpoints/' + Movie._id);
      }
    }]);

    return MoviesComponent;
  }();

  angular.module('yoTemplateApp').component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });
})();
//# sourceMappingURL=movies.controller.js.map
