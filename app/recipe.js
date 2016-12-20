var RecipeService = angular.module('RecipeService', [])
.service('RecipeData', function() {
	this.recipes = [
		{
			id: 0,
			title: 'Almond Biscotti',
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
			id: 1,
			title: 'Lemon Bars',
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
});