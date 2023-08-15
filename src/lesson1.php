<?php
include '../templates/header.html'
?>
<body ng-app="ngMainApp" ng-controller="FirstController as $ctrl">
<input type="text" ng-model="$ctrl.name">
{{"Hola: " + $ctrl.name}}

<br>
<br>
<label for="_username">Usuario</label>
<input id="_username" type="text" ng-model="$ctrl.nuevoComentario.username">

<label for="_comentario">Comentario</label>
<input id="_comentario" type="text" ng-model="$ctrl.nuevoComentario.comentario">

<button ng-click="$ctrl.agregarComentario()">Enviar</button>
<h3>Comentarios</h3>
<ul>
    <li ng-repeat="comentario in $ctrl.comentarios">
        {{comentario.comentario}} - <strong>{{comentario.username}}</strong>
    </li>
</ul>
</body>
<?php
include '../templates/footer.html'
?>
