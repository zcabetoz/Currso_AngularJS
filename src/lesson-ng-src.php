<?php
include '../templates/header.html'
?>
    <body ng-app="ngServiceApp" ng-controller="srcController as $ctrl" >
    <lu class="no-list" ng-cloak>
        <h1>
            <li ng-repeat="repositorio in $ctrl.repositorios">
                <div class="circular" back-img="{{repositorio.owner.avatar_url}}"></div>
                {{repositorio.name}}
            </li>
        </h1>
    </lu>
    </body>

<?php
include '../templates/footer.html'
?>