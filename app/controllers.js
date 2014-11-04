var mySong = angular.module('mySong', []);
mySong.factory('SongText', function() {
    return {song: "Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr...", newWord : 'purr'}
});

function SongCtrl($scope,SongText)
{
    $scope.data = SongText;
}

function NewWorldCtrl ($scope,SongText)
{
    $scope.data = SongText;
    $scope.replaceWordUppercase = function(textIn, oldWord,newWord){
        return textIn.split(oldWord).join(newWord);
    }

}