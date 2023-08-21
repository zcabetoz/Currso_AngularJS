<?php
include '../templates/header.html'
?>
    <body ng-app="ngServiceApp" ng-controller="serviceController as $ctrl">
    <br>
    <div ng-show ="$ctrl.toDo.length === 0">
        <h2>No hay actividades pendientes.</h2>
    </div>
    <div ng-hide="$ctrl.toDo.length === 0" class="animate">
        <table border="1">
            <tr>
                <th>Descripci&oacute;n</th>
                <th>Fecha</th>
                <th>Acci&oacute;n</th>
            </tr>
            <tr ng-repeat="actividad in $ctrl.toDo">
                <td>{{ actividad.description }}</td>
                <td>{{ actividad.date | date: 'short' }}</td>
                <td>
                    <button class="btn-eliminar" ng-click="$ctrl.removeActv(actividad)">Eliminar</button>
                </td>
            </tr>
        </table>
    </div>
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
    <br>
    <button ng-click="$ctrl.clear()">Borrar Actividades</button>
    </body>
<?php
include '../templates/footer.html'
?>