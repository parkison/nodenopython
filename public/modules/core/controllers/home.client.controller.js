'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Getadd',
	function($scope, Getadd) {

		$scope.sumOne = 0
		$scope.sumTwo = 0
		$scope.result = 0
		
		$scope.clicker = function(){
			var params = 	{	firstnumber:$scope.sumOne,
								secondnumber:$scope.sumTwo
						 	};

			Getadd.query(params).$promise.then(function(data) {
				$scope.result = data[0][0];
			}); 
		}

	}
]);