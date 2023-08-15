<?php
include '../templates/header.html'
?>
<body ng-app="ngServiceApp" ng-controller="factoryController as $ctrl">
<br><br>
<lu>
    <li ng-repeat="actividad in $ctrl.toDo">
        {{ actividad.description }} - {{ actividad.date | date: 'short' }}
    </li>
</lu>
<br><br>
<form ng-submit="$ctrl.addActv()">
    <label for="tarea">Nueva Tarea</label>
    <input id="tarea" type="text" ng-model="$ctrl.newActv.description">
    <br><br>
    <label for="date">Fecha</label>
    <input id="date" type="datetime-local" ng-model="$ctrl.newActv.date">
    <br><br>
    <button type="submit">Guardar</button>
</form>
</body>
<?php
include '../templates/footer.html'
?>