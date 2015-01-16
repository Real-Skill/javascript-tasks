var myApp = angular.module('myApp', []);

myApp.directive('hero', function (){
  return {
    restrict: 'E',
    template: '<img src="assets/hero.png" class="hero-position" width="300px">'
  }
});

myApp.directive('mask', function (){
  return {
    restrict: 'E',
    template: '<img src="assets/mask.png" class="mask-position" width="62px">'
  }
});

myApp.directive('superhero', function (){
  return {
    restrict: 'E',
    template: '<div class="relative-position"><hero></hero><mask></mask></div>'
  }
});
