'use strict';
describe('getJsonData', function () {
      
    var httpBackend;
      
    beforeEach(module("ngCooking"));
    beforeEach(inject(function ($httpBackend ) {
      httpBackend = $httpBackend;
        httpBackend.whenGET("../json/communaute.json").respond({'name' : 'khaled'});
        httpBackend.whenGET("../json/categories.json").respond({'name' : 'cat1'});
        httpBackend.whenGET("../json/ingredients.json").respond({'name' : 'ing1'});
         httpBackend.whenGET("../json/recettes.json").respond({'name' : 'recette1'});
    }));

     it('test http service get JSON Data',inject( function (getJsonData) {
         var Communitydata,Recettesdata,Ingredientdata,Categorydata;
         var success1 = false;
         var success2 = false;
         var success3 = false;
         var success4 = false;

        getJsonData.getCommunity().then(function (response) {
            Communitydata = response.data;
            expect(Communitydata).toBeDefined();
             success1 = true;
        });
         getJsonData.getCategories().then(function (response) {
             Categorydata = response.data;
            success2 = true;
         });
         getJsonData.getIngredients().then(function (response) { 
             Ingredientdata = response.data;
            success3 = true;
         });
         getJsonData.getRecettes().then(function (response) {
            Recettesdata = response.data;
            success4 = true;
         });
        httpBackend.flush();
         expect(getJsonData.getCommunity().then(function (){})).toBeDefined();
         expect(getJsonData.getCategories().then(function (){})).toBeDefined();
         expect(getJsonData.getIngredients().then(function (){})).toBeDefined();
         expect(getJsonData.getRecettes().then(function (){})).toBeDefined();
         expect(success1).toBe(true);
         expect(success2).toBe(true);
         expect(success3).toBe(true);
         expect(success4).toBe(true);
         expect(Communitydata.name).toBe('khaled');
         expect(Categorydata.name).toBe('cat1');
         expect(Ingredientdata.name).toBe('ing1');
         expect(Recettesdata.name).toBe('recette1');

     }))
        
}); 