'use strict';

ngCooking.controller("loginController", function loginController($scope,$location,$cookies,$rootScope,getJsonData){

    getJsonData.getCommunity().then(function(response)
    {
        $scope.logins = response.data;

    });
    $scope.isConnected = $cookies.get('auth') != undefined ? $cookies.get('auth') : false;
    $scope.errorMessage = '';
    $scope.userSurName = '';
    $scope.userFirstName = '';
    $rootScope.loggedIn = $cookies.get('auth');
    $scope.setConnexion = function(connected){
        $scope.isConnected = connected != undefined ? connected : false;
    };
    $scope.discnx = function(){
        $scope.setConnexion(false);
        $rootScope.loggedIn = false;


        $location.path('#/');
        console.log('Deconexion  pour: ' + $cookies.get('userSurName') + ' ' + $cookies.get('userFirstName'));
        $cookies.put('auth',false);
        console.log('Etat de la connexion des cookies =  ' + $cookies.get('auth') );
        $cookies.remove('auth');
    };

    $scope.submit = function(){

        var counter = $scope.logins.length ;
        var userFound = false;


           while (counter >0 && !userFound)
            {

                    counter--;
                    if (($scope.username == $scope.logins[counter].email)&&($scope.password == $scope.logins[counter].password) )
                    {

                        userFound = true;
                        $rootScope.loggedIn = true;


                        console.log('connexion reussi pour: ' + $scope.logins[counter].firstname + ' ' + $scope.logins[counter].surname);
                        $scope.userSurName = $scope.logins[counter].firstname;
                        $scope.userFirstName = $scope.logins[counter].surname;
                        $cookies.put('auth',true);
                        $cookies.put('userSurName',$scope.logins[counter].surname);
                        $cookies.put('userFirstName',$scope.logins[counter].firstname);
                        $cookies.put('id',$scope.logins[counter].id);
                        this.setConnexion(true);
                        console.log('test cookies  pour: ' + $cookies.get('userSurName') + ' ' + $cookies.get('userFirstName'));
                        console.log('Etat de la connexion des cookies =  ' + $cookies.get('auth'));

                    }

            }
            if(!userFound)
            {
          //  alert('Please enter a valid login and password');
            this.setConnexion(false);
            console.log('error connexion');
                $scope.errorMessage = 'error connexion :Please enter a valid login and password';
            }
    };


});