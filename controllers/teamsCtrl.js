
var baseballStatsApp = angular.module('baseballStatsApp', []);

baseballStatsApp.controller('TeamsCtrl', function($scope, $http) {
    $http.get('teams.json').success(function(data) {
        $scope.teams = data;
    });
});
