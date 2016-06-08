'use strict';
describe('getObjectService', function () {
      
     
      
     beforeEach(module("ngCooking"));
    

     it('test getting object by id',inject( function (getObjectService) {
         var id = "fruit";
         var data = [{"id": "meat","nameToDisplay": "Viandes"},{"id": "fish","nameToDisplay": "Poissons"},{"id": "seafood","nameToDisplay": "Fruits de mer"},{"id": "fruit","nameToDisplay": "Fruits"},{"id": "vegetable","nameToDisplay": "Légumes"}];
         expect(getObjectService.getObject(id,data).nameToDisplay).toBe("Fruits");
     }))
});