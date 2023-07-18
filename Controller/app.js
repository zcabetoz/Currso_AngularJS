angular.module("MyFirstApp", [])
    .controller("FirstController", ["$scope",function ($scope) {
        $scope.nombre = "Charlize";
        $scope.nuevoComentario={};
        $scope.comentarios = [
            {
                comentario:"Buen tutorial",
                username:"zcabetoz"
            },
            {
                comentario:"Gracias por compartir tus conocimientos",
                username: "yiyi"
            }
        ];
        $scope.agregarComentario = function (){
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {};
        }
    }]);