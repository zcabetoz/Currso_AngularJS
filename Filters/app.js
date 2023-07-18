angular.module("FiltersModule", [])
    .filter("removeHtml",function (){
        return function (text){
            return String(text).replace(/<[^>]+>/gm,'')
        }
    })
    .controller("FiltersController", ['$scope','$timeout',function ($scope, $timeout) {
        $scope.mi_html = {};
        $scope.mi_html.nombre = "Carlos";
        $scope.mi_html.apellido = "Serrano";
        $scope.nombre = "Carlos";
        $timeout(function (){
            $scope.nombre = "Nayarit"
        },2000);
    }]);