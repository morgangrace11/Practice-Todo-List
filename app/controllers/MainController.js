app = angular.module('myApp', []);
app.controller('MainController', ['$scope',  function($scope) {
  $scope.title = 'Todos';
  $scope.todos = [
    {
      todo: "oithgitoitriutg"
    },
    {
      todo: "oithgitoitriutg"
    },
    {
      todo: "oithgitoitriutg"
    },
    {
      todo: "oithgitoitriutg"
    },
    {
      todo: "oithgitoitriutg"
    },
    {
      todo: "oithgitoitriutg"
    }
  ];
}]);