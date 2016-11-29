(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('cookbook', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'AboutController'
		})
		.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/home'
		})
	}])
	.controller('MainController', function($scope) {
		$scope.recipes = recipes;
	})
	.controller('AboutController', function($scope) {
		$scope.message = "Hello!";
	})
	.directive('recipe', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/recipe.html'
		}
	});

	var recipes = [
		{
			title: 'Almond Biscotti',
			description: 'Crunchy cookies perfect for afternoon tea',
			ingredients: [
				{
					name: 'All-Purpose Flour',
					quantity: '2 cups'
				},
				{
					name: 'Sugar',
					quantity: '1 cup'
				},
				{
					name: 'Baking Powder',
					quantity: '1 teaspoon'
				},
				{
					name: 'Salt',
					quantity: '1/8 teaspoon'
				},
				{
					name: 'Eggs',
					quantity: '3'
				},
				{
					name: 'Amaretto',
					quantity: '2 tablespoons'
				},
				{
					name: 'Vanilla',
					quantity: '1 teaspoon'
				},
				{
					name: 'Almonds',
					quantity: '1 cup'
				}
			]
		},
		{
			title: 'Lemon Bars',
			description: 'The dessert that launched a thousand ships',
			ingredients: [
				{
					name: 'All-Purpose Flour',
					quantity: '1 1/2 cups + 3 tablespoons'
				},
				{
					name: 'Confectioners Sugar',
					quantity: '1/2 cup + 1 tablespoon'
				},
				{
					name: 'Butter',
					quantity: '3/4 cup'
				},
				{
					name: 'Lemons',
					quantity: '3'
				},
				{
					name: 'Eggs',
					quantity: '2'
				},
				{
					name: 'Sugar',
					quantity: '1 cup'
				},
				{
					name: 'Baking Powder',
					quantity: '1/2 teaspoon'
				},
				{
					name: 'Salt',
					quantity: '1/2 teaspoon'
				}
			]
		}
	];

})();
