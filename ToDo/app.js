angular.module("ToDoApp",["LocalStorageModule"])
    .controller("ToDoController", function ($scope,localStorageService, $http){
        if(localStorageService.get("angular-todolist")){
            $scope.todo = localStorageService.get("angular-todolist");
        }else{
            $scope.todo = [];

        }
        $scope.$watchCollection('todo', function (){
           localStorageService.set("angular-todolist", $scope.todo)
        });
        $scope.addActv = function (){
            $scope.todo.push($scope.newActv);
            $scope.newActv = {};
        }
        $scope.clear = function (){
            $scope.todo = [];
        }
    });