<!DOCTYPE html>
<html>
<head lang="en">
    <title>AngularJS Tutorials</title>
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
</head>

<body ng-app="myApp">
<div class="container" ng-controller="FilterCtrl">
    <div class="page-header">
        <h1>Just
            <small>filter</small>
        </h1>
    </div>
    <div class="well">
        <label for="tellMe" class="label label-default">Give me some text ...</label>
        <input type="text" id="tellMe" class="form-control" ng-model="data.tellMe">
    </div>
    <table class="table table-striped table-bordered">
        <thead>
        <th>Without filter</th>
        <th>With filter</th>
        </thead>
        <tbody>
        <tr>
            <td>{{data.citation}}</td>
            <td></td>
        </tr>
        <tr>
            <td>{{data.title}}</td>
            <td></td>
        </tr>
        <tr>
            <td>{{data.someText}}</td>
            <td></td>
        </tr>
        </tbody>
    </table>
    <div class="active">
        <label class="label label-default">... and I repeat it in capitals </label>

        <h3>Input</h3>
    </div>
</div>

<script src="../bower_components/angular/angular.js"></script>
<script src="FilterCtrl.js"></script>
</body>
</html>
