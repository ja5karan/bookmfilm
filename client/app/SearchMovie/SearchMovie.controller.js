 'use strict';

(function() {

  class searchMovieComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;

      this.$scope = $scope;
      this.MovieData;
      this.MovieDetails = [];

      $scope.$on('$destroy', function(){
        socket.unsyncUpdates('SearchMovieendpoint');
      });
    }

    FindMovie() {
      this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=e98ca6e8024686f7117e1bb4fdfeaee5&query=' + this.MovieName + '&year=' + this.Year).then(response => {
        console.log(response.data.results[0].id);
        var MovieID = response.data.results[0].id;
        this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=e98ca6e8024686f7117e1bb4fdfeaee5').then(movieres => {
          this.MovieData = movieres.data;
          console.log(this.MovieData);
        });
      });
    }

    addMovie() {

      console.log("function call");
   this.$http.post('/api/SearchMovieendpoints', {

  Title: this.MovieData.original_title,
Duration: this.MovieData.runtime,
   Poster: this.MovieData.poster_path,
   Genre:this.MovieData.gen
   });
   }


   $onInit(){

         this.$http.get('/api/SearchMovieendpoints').then(response => {
           this.MovieDetails = response.data;
           this.socket.syncUpdates('SearchMovieendpoints', this.MovieDetails);
         });

    }



    remove(Movie){
console.log("function called delete");
         this.$http.delete('/api/SearchMovieendpoints/' + Movie._id);

  }
  }

  angular.module('yoTemplateApp')
    .component('searchMovie', {
      templateUrl: 'app/SearchMovie/SearchMovie.html',
      controller: searchMovieComponent,
      controllerAs: 'SearchMovieCtrl'
    });

})();
