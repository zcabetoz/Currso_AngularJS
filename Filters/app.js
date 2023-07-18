angular.module("FiltersModule", [])
    .filter("removeHtml",function (){
        return function (text){
            return String(text).replace(/<[^>]+>/gm,'')
        }
    })
    .controller("FiltersController", function ($scope) {
        $scope.mi_html = {};
        $scope.mi_html.nombre = "Carlos";
        $scope.mi_html.apellido = "Serrano";
        $scope.costo = 2;
    });