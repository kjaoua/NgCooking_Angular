'use strict';
describe('statusFilter', function () {
      
    
    beforeEach(module("ngCooking"));
    

     it('test Status filter ',inject( function (statusFilterFilter) {
         
         expect(statusFilterFilter(1)).toBe("NOVICE");
         expect(statusFilterFilter(2)).toBe("CONFIRME");
         expect(statusFilterFilter(3)).toBe("EXPERT");
         expect(statusFilterFilter(0)).toBe("NOVICE");
     }));
});