'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var searchMovieComponent = function () {
    function searchMovieComponent($http, $scope, socket) {
      _classCallCheck(this, searchMovieComponent);

      this.$http = $http;

      this.$scope = $scope;
      this.MovieData;
      this.MovieDetails = [];

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('SearchMovieendpoint');
      });
    }

    _createClass(searchMovieComponent, [{
      key: 'FindMovie',
      value: function FindMovie() {
        var _this = this;

        this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=e98ca6e8024686f7117e1bb4fdfeaee5&query=' + this.MovieName + '&year=' + this.Year).then(function (response) {
          console.log(response.data.results[0].id);
          var MovieID = response.data.results[0].id;
          _this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=e98ca6e8024686f7117e1bb4fdfeaee5').then(function (movieres) {
            _this.MovieData = movieres.data;
            console.log(_this.MovieData);
          });
        });
      }
    }, {
      key: 'addMovie',
      value: function addMovie() {

        console.log("function call");
        this.$http.post('/api/SearchMovieendpoints', {

          Title: this.MovieData.original_title,
          Duration: this.MovieData.runtime,
          Poster: this.MovieData.poster_path,
          Genre: this.MovieData.gen
        });
      }
    }, {
      key: '$onInit',
      value: function $onInit() {
        var _this2 = this;

        this.$http.get('/api/SearchMovieendpoints').then(function (response) {
          _this2.MovieDetails = response.data;
          _this2.socket.syncUpdates('SearchMovieendpoints', _this2.MovieDetails);
        });
      }
    }, {
      key: 'remove',
      value: function remove(Movie) {
        console.log("function called delete");
        this.$http.delete('/api/SearchMovieendpoints/' + Movie._id);
      }
    }]);

    return searchMovieComponent;
  }();

  angular.module('yoTemplateApp').component('searchMovie', {
    templateUrl: 'app/SearchMovie/SearchMovie.html',
    controller: searchMovieComponent,
    controllerAs: 'SearchMovieCtrl'
  });
})();
//# sourceMappingURL=SearchMovie.controller.js.map
