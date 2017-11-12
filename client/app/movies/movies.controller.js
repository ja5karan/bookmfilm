'use strict';

(
  function(){

class MoviesComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$scope=$scope;
    this.MovieData =[];
    this.MovieDetails =[];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('moviesendpoint');
    });
}

   SearchMovie(){
     this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=e98ca6e8024686f7117e1bb4fdfeaee5&query=' + this.MovieName + '&year=' + this.Year).then(response => {
       console.log(response.data.results[0].id);
       var MovieID = response.data.results[0].id;
       this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=e98ca6e8024686f7117e1bb4fdfeaee5').then(movieres => {
         this.MovieDetails = movieres.data;
         console.log(this.MovieDetails);
         });
      });

  }

  addMovie() {
 this.$http.post('/api/moviesendpoints', {
  MovieName: this.MovieName,
  Year: this.MovieDetails.year,
  Title: this.MovieDetails.original_title,
    StarCast: this.MovieDetails.cast,
    Duration: this.MovieDetails.runtime,
 Language: this.MovieDetails.lang,
 Poster: this.MovieDetails.cov,
 Genre:this.MovieDetails.gen.name
 });
 }


 $onInit(){
       this.$http.get('/api/moviesendpoints').then(response => {
         this.MovieData = response.data;
         this.socket.syncUpdates('moviesendpoint', this.MovieData);
       });

  }



  remove(Movie){

       this.$http.delete('/api/moviesendpoints/' + Movie._id);

}


}

angular.module('yoTemplateApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });

})();
