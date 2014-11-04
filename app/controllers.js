var bind = angular.module('bind', []);
bind.factory('Direction', function() {
    return {direction: "Direction? Left and right!"}
});

function LeftCtrl($scope,Direction)
{
    $scope.enter = Direction;
}

function RightCtrl($scope,Direction)
{
    $scope.enter = Direction;

}