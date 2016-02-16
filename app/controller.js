
app.controller('MainController', function($scope, mainService)/*main service inects service into your controller*/ {
	
	//$scope.test = "test"; test to see the controller is set up correctly
	
	
		$scope.users = mainService.getUsers();
	
});