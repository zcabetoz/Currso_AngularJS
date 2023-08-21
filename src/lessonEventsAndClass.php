<?php
include '../templates/header.html'
?>
<body ng-app="ngServiceApp" ng-controller="EventsController as $ctrl">
<button ng-class="$ctrl.active ? 'btn-activar' : 'btn-desactivar'"
        ng-mouseover="$ctrl.toggleButton(true)" ng-mouseout="$ctrl.toggleButton(false)">
        {{ $ctrl.active ? 'activar' : 'inactivo' }}
</button>

</body>
<?php
include '../templates/footer.html'
?>
