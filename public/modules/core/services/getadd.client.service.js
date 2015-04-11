'use strict';

angular.module('core').factory('Getadd', ['$resource',
	function($resource) {
		return $resource('/add/:firstnumber/:secondnumber',
			{query: {method:'GET', isArray:false}});
	}
]);	