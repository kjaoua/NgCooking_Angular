'use strict' ;
ngCooking.factory('getJsonData',function($http){
    var dataPath = "../json/";
    var testVar = 'hello';
   // obj.test = " test retour réussi";
    var getdata = function(url){
        // getting users data from .json file
       return $http.get(url);
    };
    var getVarPath = function(file){return getdata(dataPath + file + ".json")};
    return {
        getCommunity : function(){return getVarPath('communaute');},
        getCategories : function(){return getVarPath('categories');},
        getIngredients : function(){return getVarPath('ingredients');},
        getRecettes : function(){return getVarPath('recettes');},
        test : testVar
    };
});