'use strict';
describe('getRecetteMark', function () {
      
     
      
     beforeEach(module("ngCooking"));
    

     it('test getting object by id',inject( function (getRecetteMark) {
        var size = 3;
         var recette = {
		"id": "tarte-citron-meringue",
		"name": "Tarte citron meringué",
		"creatorId": 1,
		"isAvailable": true,
		"picture": "img/recettes/tarte-citron-meringue.jpg",
		"calories": 460,
		"ingredients": [
			"oeuf",
			"citron",
			"sucre",
			"farine"
		],
		"preparation": "hello",
		"comments": [
			{
				"userId": 11,
				"title": "Miam miam miaouuu",
				"comment": "Franchement cette NgRecette, c’est de la bombe. Le genre de saveurs qui t’éveillent les papilles, t’as vu ! Dis woula, j’ai kiffé",
				"mark": 4
			},
			{
				"userId": 8,
				"title": "Ca pique !",
				"comment": "Quelqu'un a mis du piment dans ma crème, j'ai passé mon dimanche au toilettes. Sinon, tout va bien..",
				"mark": 2
			}
		]
	};
         expect(getRecetteMark.averageMark(recette)).toBe(size);
     }))
})