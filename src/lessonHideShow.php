<?php
include '../templates/header.html'
?>
    <body ng-app="ngMainApp" ng-controller="showHideController as $ctrl">
    <div ng-if="$ctrl.isLoading">
        Cargando...
    </div>
    <div ng-if="!$ctrl.isLoading && $ctrl.posts.length == 0">
        No se encontraron resultado...
    </div>
    <div>
        <ul ng-show="$ctrl.posts.length != 0" class="animate" >
            <li ng-repeat="publicacion in $ctrl.posts">
                <h1>{{ publicacion.title}}</h1>
                <p>{{ publicacion.body}}</p>
            </li>
        </ul>
    </div>
    </body>
<?php
include '../templates/footer.html'
?>