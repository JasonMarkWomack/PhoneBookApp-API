angular.module('phoneBook').service('mainService', function($http) {
  this.getUsers = function() {

  return  $http({
        method: 'GET',
        url: 'http://www.mocky.io/v2/581335f71000004204abaf83'
    }).then(function(response) {var parsedResponse = response.data.contacts;
      return response.data;
		})


	}

});
