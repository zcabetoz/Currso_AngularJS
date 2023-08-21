serviceApp.factory('ToDoFactory', function (localStorageService) {
    let $ctrl = this;

    $ctrl.toDoFactory = {}

    $ctrl.toDoFactory.key = 'toDoListFactory';

    $ctrl.toDoFactory.activities = [];

    $ctrl.toDoFactory.activities = localStorageService.get($ctrl.toDoFactory.key) ?? [];

    $ctrl.toDoFactory.add = function (newActv) {
        $ctrl.toDoFactory.activities.push(newActv);
        $ctrl.toDoFactory.updateLocalStorage();
    }

    $ctrl.toDoFactory.updateLocalStorage = function () {
        localStorageService.set($ctrl.toDoFactory.key, $ctrl.toDoFactory.activities);
    }

    $ctrl.toDoFactory.clear = function () {
        $ctrl.toDoFactory.activities = [];
        $ctrl.toDoFactory.updateLocalStorage();
        return $ctrl.toDoFactory.getAll();
    }

    $ctrl.toDoFactory.getAll = function () {
        return $ctrl.toDoFactory.activities
    }

    $ctrl.toDoFactory.removeActv = function (item) {
        $ctrl.toDoFactory.activities = $ctrl.toDoFactory.activities.filter(function (activity) {
            return activity !== item;
        });
        $ctrl.toDoFactory.updateLocalStorage();
        return $ctrl.toDoFactory.getAll();
    }

    return $ctrl.toDoFactory;
})

serviceApp.service('ToDoService', function (localStorageService) {
    let $ctrl = this;

    $ctrl.key = 'toDoService';

    $ctrl.activities = localStorageService.get($ctrl.key) ?? [];

    $ctrl.updateLocalStoreService = function () {
        localStorageService.set($ctrl.key, $ctrl.activities)
    }

    $ctrl.getAll = function () {
        return $ctrl.activities;
    }

    $ctrl.add = function (newActv) {
        $ctrl.activities.push(newActv);
        $ctrl.updateLocalStoreService();
    }

    $ctrl.clear = function () {
        $ctrl.activities = [];
        $ctrl.updateLocalStoreService();
        return $ctrl.getAll();
    }

    $ctrl.removeActv = function (item) {
        $ctrl.activities = $ctrl.activities.filter(function (activity) {
            return activity !== item;
        })
        $ctrl.updateLocalStoreService();
        return $ctrl.getAll();
    }

});
serviceApp.directive('backImg', function () {
    return function ($ctrl, element, attrs) {
        attrs.$observe('backImg', function (value) {
            element.css({
                "background": "url(" + value + ")",
                "background-size": "cover",
                "background-position": "center"
            });
        });
    }
});
serviceApp.controller("factoryController", function ($scope, ToDoFactory) {
    let $ctrl = this

    $ctrl.newActv = {};

    $ctrl.toDo = ToDoFactory.getAll()

    $ctrl.addActv = function () {
        ToDoFactory.add($ctrl.newActv);
        $ctrl.newActv = {};
    }

    $ctrl.removeActv = function (item) {
        $ctrl.toDo = ToDoFactory.removeActv(item);
    }

    $ctrl.clear = function () {
        $ctrl.toDo = ToDoFactory.clear()
    }
});

serviceApp.controller('serviceController', function (ToDoService) {
    let $ctrl = this;

    $ctrl.newActv = {};

    $ctrl.toDo = ToDoService.getAll()

    $ctrl.addActv = function () {
        ToDoService.add($ctrl.newActv)
        $ctrl.newActv = {};
    }

    $ctrl.removeActv = function (activity) {
        $ctrl.toDo = ToDoService.removeActv(activity)
    }

    $ctrl.clear = function () {
        $ctrl.toDo = ToDoService.clear()
    }
});
serviceApp.controller("EventsController", function () {
    let $ctrl = this;
    $ctrl.active = false
    $ctrl.toggleButton = function (activate) {
        $ctrl.active = activate;
    }
});
serviceApp.controller("srcController", function ($http) {
    let $ctrl = this
    $http.get("https://api.github.com/users/ransilad/repos")
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
});
