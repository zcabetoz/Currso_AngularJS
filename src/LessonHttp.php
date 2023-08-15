<?php
include '../templates/header.html'
?>
    <body ng-app="ngMainApp" ng-controller="httpController as $ctrl">
    <br>
    <label for="title">Titulo</label><br>
    <input type="text" ng-model="$ctrl.newPost.title" id="title">
    <br>
    <br>
    <label for="body">Descripci&oacute;n</label><br>
    <textarea type="text" ng-model="$ctrl.newPost.body" id="body"></textarea>
    <br>
    <br>
    <label for="user">Usuario</label><br>
    <input type="text" ng-model="$ctrl.newPost.userId" id="user">
    <br>
    <br>
    <button ng-click="$ctrl.addPost()">Publicar</button>

    <ul>
        <li ng-repeat="post in $ctrl.posts">

            <h2>{{ post.title }}</h2>
            <p>
                {{ post.body }}
            </p>
        </li>
    </ul>
    </body>
<?php
include '../templates/footer.html'
?>