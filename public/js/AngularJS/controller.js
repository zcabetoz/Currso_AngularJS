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
            $ctrl.newPost ={};
        }).catch(function (error, status, headers, config) {
            console.log(error)
        });
    }
});

app.controller("ToDoListController", function (){

});