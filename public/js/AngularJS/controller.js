app.run(function ($rootScope) {
    $rootScope.miCadena = "<p>David Serrano</p>"
});
app.controller("FirstController", function () {
    let $ctrl = this;
    $ctrl.name = "Carlos";
    $ctrl.nuevoComentario = {};
    $ctrl.comentarios = [
        {
            comentario: "Buen tutorial",
            username: "cabeto"
        },
        {
            comentario: "Excelente tutorial",
            username: "yiyi"
        }
    ];
    $ctrl.agregarComentario = function () {
        $ctrl.comentarios.push($ctrl.nuevoComentario);
        $ctrl.nuevoComentario = {};
    }
});
app.controller("httpController", function ($http) {
    let $ctrl = this;
    $ctrl.newPost = {};
    $ctrl.posts = [];
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            $ctrl.posts = response.data;
        })
        .catch(function () {

        })

    $ctrl.addPost = function () {
        $http.post("https://jsonplaceholder.typicode.com/posts", {
            title: $ctrl.newPost.title,
            body: $ctrl.newPost.body,
            userId: $ctrl.newPost.userId,
        }).then(function (response, status, headers, config) {
            $ctrl.posts.push(response.data);
            $ctrl.newPost = {};
        }).catch(function (error, status, headers, config) {
            console.log(error)
        });
    }
});

app.controller("ToDoListController", function (localStorageService, $scope, $timeout) {
    let $ctrl = this;
    $ctrl.toDo = localStorageService.get('toDoList') ?? [];
    $scope.$watchCollection('$ctrl.toDo', function (newValue, oldValue) {
        localStorageService.set('toDoList', $ctrl.toDo)
    });

    $ctrl.addTarea = function () {
        $ctrl.toDo.push($ctrl.newTarea);
        $ctrl.newTarea = {};
    }

    $ctrl.clear = function () {
        $ctrl.toDo = [];
    }

    $scope.miCadena = "<p>Carlos Serrano</p>"
    $timeout(function () {
        $scope.miCadena = 'Eleazar Serrano';
    }, 2000)
});

app.filter("removeHtml", function () {
    return function (texto) {
        return String(texto).replace(/<[^>]+>/gm, '')
    }
});

app.controller("showHideController", function ($http) {
    let $ctrl = this;
    $ctrl.isLoading = true
    $ctrl.posts = [];
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
            $ctrl.posts = response.data;
            $ctrl.isLoading = false;
        })
        .catch(function (error) {
            console.log(error);
            $ctrl.isLoading = false;
        });
});
