'use strict';
describe('recetteIngredientFilter', function () {

var data,recetteIngredient;
    beforeEach(module("ngCooking"));


    it('test Status filter ',inject( function (recetteIngredientFilterFilter) {

        data=[];
        data.push({"name":"Tarte citron meringué","ingredients": ["oeuf", "citron", "sucre", "farine"]});
        data.push({"name":"Tajine de poulet","ingredients": ["poulet", "citron", "tomate", "carotte","pomme-de-terre"]});
        data.push({"name":"Cake au jambon et aux olives","ingredients": ["oeuf", "jambon", "gruyere", "huile-tournesol","lait","farine"]});
        data.push({"name":"Saumon à l'échalotte","ingredients": ["saumon", "echalotte", "creme"]});
        data.push({"name":"salade-de-fruit-granite","ingredients": ["pomme", "poire", "fraise", "banane","kiwi","glace","citron-vert","citron","sucre"]});
        recetteIngredient ="oeuf;  citron; sucre  ;farine";
        expect(recetteIngredientFilterFilter(data,recetteIngredient)[0]).toBe(data[0]);
        expect(recetteIngredientFilterFilter(data,recetteIngredient)).toEqual([data[0]]);

    }))
});