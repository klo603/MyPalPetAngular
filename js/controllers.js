angular.module('petApp.controllers',[]).controller('PetListController',function($scope,$state,popupService,$window,Pet){

    $scope.pets=Pet.query();
    $scope.deletePet=function(pet){
        if(popupService.showPopup('Really delete this?')){
            pet.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('PetViewController',function($scope,$stateParams,popupService,Pet){

    $scope.pet=Pet.get({id:$stateParams.id});

}).controller('PetCreateController',function($scope,$state,$stateParams,Pet){

    $scope.pet=new Pet();

    $scope.addPet=function(){
        $scope.pet.$save(function(){
            $state.go('pets');
        });
    }

}).controller('PetEditController',function($scope,$state,$stateParams,Pet){

    $scope.updatePet=function(){
        $scope.pet.$update(function(){
            $state.go('pets');
        });
    };

    $scope.loadPet=function(){
        $scope.pet=Pet.get({id:$stateParams.id});
    };

    $scope.loadPet();
});