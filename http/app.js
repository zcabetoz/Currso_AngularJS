angular.module("HttpApp", [])
    .controller("HttpController", ['$scope', '$http', function ($scope, $http) {
        $scope.posts = [];
        $scope.newPost = {};
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function (response) {
                $scope.posts = response.data;
            })


        $scope.addPost = function () {
            $http.post("https://jsonplaceholder.typicode.com/posts", {
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            }).then(function (response, status, headers, config) {
                console.log(response.data)
                $scope.posts.push($scope.newPost)
                $scope.newPost = {};
            }).catch(function (error, status, headers, config) {
                console.log(error)
            });
        }
    }]);