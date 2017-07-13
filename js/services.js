angular.module('petApp.services',[]).factory('Pet',function($resource){
    $url = 'http://localhost:8888/MyPalPet/pet/:id';
    //$url = 'http://movieapp-13434.onmodulus.net/api/movies/:id';
    return $resource($url,{id:'@id'},{
        query: {method: 'GET', url: 'http://localhost:8888/MyPalPet/pets', isArray: true },
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});