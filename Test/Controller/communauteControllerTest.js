'use strict';
describe('communauteCTRL', function () {
     var $controllerConstructor , scope, fakeFactory,httpBackend,cookies,cooks,datas,q,deferred,communityData;
     beforeEach(module("ngCooking"));
     
    //Prepare the fake factory
    beforeEach(function () {
        fakeFactory = {
            getCommunity: function () {
                deferred = q.defer();
                communityData = [];
                communityData.push({"firstname": "Khaled","surname": "Jaoua","id": 21,"email": "jaoua.khaled@gmail.com","password": "0754209030"});

                // Place the fake return object here
                deferred.resolve({data:communityData});
                return deferred.promise;
            },
            getRecettes: function () {
                deferred = q.defer();
                communityData = [];
                communityData.push({"firstname": "Khaled","surname": "Jaoua","id": 21,"email": "jaoua.khaled@gmail.com","password": "0754209030"});

                // Place the fake return object here
                deferred.resolve({data:communityData});
                return deferred.promise;
            }
        };
        spyOn(fakeFactory, 'getCommunity').and.callThrough();
        spyOn(fakeFactory, 'getRecettes').and.callThrough();
    });
    
     beforeEach(inject(function($rootScope, $controller, $http, $httpBackend,$cookies,$q){
         q=$q;
         scope=$rootScope.$new();
         cookies = $cookies;
     $controllerConstructor =$controller("communauteCTRL",{'$scope':scope, '$cookies':cookies ,getJsonData:fakeFactory});
  
     }));
     it('test communities data',function () {
       
     })
        
});