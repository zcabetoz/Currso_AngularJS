<?php
include '../templates/header.html'
?>
    <body ng-app="ngDirectiveApp" ng-controller="directiveController">
    <input id="hola" type="text" my-autocomplete="repositorios" placeholder="Buscar Repositorio">
    <ul>
        <li class="no-list" ng-repeat="repositorio in posts" ng-hide="main_repo && main_repo != repositorio.name">
            <div class="circular" back-img="{{repositorio.owner.avatar_url}}"></div>
            <h1 class="inline-block">{{ repositorio.full_name }}</h1>
        </li>
    </ul>
    <a ng-click="main_repo = null" id="limpiar">Limpiar</a>
    </body>
<?php
include '../templates/footer.html'
?>