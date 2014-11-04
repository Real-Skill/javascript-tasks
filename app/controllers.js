var bind = angular.module('bind', []);
bind.factory('Direction', function() {
    return {direction: "Direction? Left and right!"}
});

function LeftCtrl($scope,Data)
{
    $scope.enter = Data;
}

function RightCtrl($scope,Data)
{
    $scope.enter = Data;

}