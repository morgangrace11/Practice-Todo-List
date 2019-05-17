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
  $scope.todo = 'cake';
  $scope.addTodo = function() {
    $scope.todos.push({todo: $scope.todo});
    console.log('clicked')
  }
  $scope.change = function(todo) {
    console.log(todo)
  }
}]);