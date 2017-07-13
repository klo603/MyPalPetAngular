angular.module('petApp',['ui.router','ngResource','petApp.controllers','petApp.services']);

angular.module('petApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('pets',{
        url:'/pets',
        templateUrl:'partials/pets.html',
        controller:'PetListController'
    }).state('viewPet',{
       url:'/pets/:id/view',
       templateUrl:'partials/pet-view.html',
       controller:'PetViewController'
    }).state('newPet',{
        url:'/pets/new',
        templateUrl:'partials/pet-add.html',
        controller:'PetCreateController'
    }).state('editPet',{
        url:'/pets/:id/edit',
        templateUrl:'partials/pet-edit.html',
        controller:'PetEditController'
    });
}).run(function($state){
   $state.go('pets');
});