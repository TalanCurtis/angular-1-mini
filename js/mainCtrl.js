angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ['Garry', 'Jerry', 'Larry', 'Perry', 'Merry']
    $scope.name=''
    $scope.addName = function(){
        console.log($scope.name)
        $scope.friends.push(this.name)
        $scope.name=''
    }
});

