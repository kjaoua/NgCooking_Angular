'use strict';
describe('loginController', function () {
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
            }
        };
        spyOn(fakeFactory, 'getCommunity').and.callThrough();
    });
    
     beforeEach(inject(function($rootScope, $controller, $http, $httpBackend,$cookies,$q){
         q=$q;
         scope=$rootScope.$new();
         cookies = $cookies;
     $controllerConstructor =$controller("loginController",{'$scope':scope, '$cookies':cookies ,getJsonData:fakeFactory});
  
     }));
     it('The logins object is not defined yet', function () {
        // Before $apply is called the promise hasn't resolved
        expect(scope.logins).not.toBeDefined();
    });

    it('Applying the scope causes it to be defined', function () {
        // This propagates the changes to the models
        // This happens itself when you're on a web page, but not in a unit test framework
        scope.$apply();
        expect(scope.logins).toBeDefined();
    });

    it('Ensure that the method was invoked', function () {
        scope.$apply();
        expect(fakeFactory.getCommunity).toHaveBeenCalled();
    });
     it('test submit function and cookies',function () {
        // communityData = {"firstname": "Khaled","surname": "Jaoua","id": 21,"email": "jaoua.khaled@gmail.com","password": "0754209030","level": 3,"picture": "img/users/khaled.jpg","city": "Paris","birth": 1990};
     scope.$apply();
    //scope.logins = [];
   // scope.logins.push(communityData);
    scope.username = 'jaoua.khaled@gmail.com';
    scope.password = '0754209030';
    expect(scope.logins).toBeDefined();
    scope.submit();
    cooks = cookies.get('auth') != undefined ? cookies.get('auth') : false;
    expect(cooks).toBe('true');// check why 'true' =/= true; 
        // scope.setConnexion(true);
    expect(scope.isConnected).toBe(true);
     });
     it('test discnx function with cookies',function () {

        scope.discnx();
        cooks = cookies.get('auth') != undefined ? cookies.get('auth') : false;
        expect(cooks).toBe(false);
         
        expect(scope.isConnected).toBe(false);
        

     });
     it('test setConnexion function',function () {

        scope.setConnexion(false);
        expect(scope.isConnected).toBe(false);
        scope.setConnexion(true);
        expect(scope.isConnected).toBe(true);

     });
        
});