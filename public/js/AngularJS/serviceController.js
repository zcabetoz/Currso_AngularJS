serviceApp.controller("factoryController", function ($scope, localStorageService) {
    let $ctrl = this

    $ctrl.toDo = localStorageService.get('toDoListService') ?? [];
    $scope.$watchCollection('$ctrl.toDo', function (newValue, oldValue) {
        localStorageService.set('toDoListService', $ctrl.toDo)
    })

    $ctrl.addActv = function (){
        $ctrl.toDo.push($ctrl.newActv);
        $ctrl.newActv ={};
    }

});