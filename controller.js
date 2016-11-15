angular.module('phoneBook').controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(dataFromService) {
      console.log(dataFromService);
      $scope.users = dataFromService.contacts;
    });
  };

  $scope.submit = function() {
    $scope.arr.push($scope.text);
    
  };
  $scope.arr = [];


$scope.getUsers();
$scope.awesomeClicked = function(){
  $scope.isAwesome = !$scope.isAwesome;
};

});
