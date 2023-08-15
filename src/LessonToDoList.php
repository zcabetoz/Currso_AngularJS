<?php
include '../templates/header.html'
?>
    <body ng-app="ngMainApp" ng-controller="ToDoListController as $ctrl">
    <br><br>
    <lu>
        <li ng-repeat="tarea in $ctrl.toDo">
            {{ tarea.description }} - {{ tarea.date | date: 'short' }}
        </li>
    </lu>
    <br><br>
    <form ng-submit="$ctrl.addTarea()">
        <label for="tarea">Nueva Tarea</label>
        <input id="tarea" type="text" ng-model="$ctrl.newTarea.description">
        <br><br>
        <label for="date">Fecha</label>
        <input id="date" type="datetime-local" ng-model="$ctrl.newTarea.date">
        <br><br>
        <button type="submit">Guardar</button>
    </form>
    <br>
    <button ng-click="$ctrl.clear()">Borrar Actividades</button>
    <br><br>
    <div>
        <h1>{{ miCadena | removeHtml}}</h1>
    </div>
    <div>
        <h2>{{"Valor del Padre: " + $parent.miCadena | removeHtml}}</h2>
    </div>
    </body>
<?php
include '../templates/footer.html'
?>