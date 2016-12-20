(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('cookbook', ['ngRoute', 'RecipeService'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/about', {
			templateUrl: 'partials/pages/about.html',
			controller: 'AboutController'
		})
		.when('/home', {
			templateUrl: 'partials/pages/home.html',
			controller: 'MainController'
		})
		.when('/recipes/:recipeID', {
			templateUrl: 'partials/pages/recipe-page.html',
			controller: 'RecipeController'
		})
		.when('/add', {
			templateUrl: 'partials/pages/add-recipe.html',
			controller: 'AddRecipeController'
		})
		.otherwise({
			redirectTo: '/home'
		})
	}])
	.controller('MainController', function($scope, RecipeData) {
		$scope.recipes = RecipeData.recipes;
	})
	.controller('AboutController', function($scope) {
		$scope.message = "Hello!";
	})
	.controller('AddRecipeController', function($scope, RecipeData) {
		$scope.ingredients = [];
		$scope.addNewIngredient = function() {
			var newItemNo = $scope.ingredients.length+1;
    		$scope.ingredients.push({});
		};
		$scope.submitRecipeForm = function() {
			var recipe = {
				id: RecipeData.recipes.length,
				title: $scope.recipe_name,
				ingredients: $scope.ingredients
			};
			RecipeData.recipes.push(recipe);
			console.log(RecipeData.recipes);
		}
	})
	.controller('RecipeController', function($scope, $routeParams, RecipeData) {
		$scope.recipe_id = $routeParams.recipeID;
		$scope.recipe = RecipeData.recipes[$routeParams.recipeID];
	})
	.directive('recipe', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/recipe.html'
		}
	});

})();
