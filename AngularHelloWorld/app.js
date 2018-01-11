var app = angular.module('myApp', []); // registers noteApp with Angular

app.directive('myTodo',
    function() {
        return {
            restrict: 'EA',
            templateUrl: 'todo.tpl.html',
            scope: {
                list: '=',
                title: '@'
            }
        };

    });

app.controller('main', function ($scope) {
    $scope.todo = [
        { name: 'BILLS LOSE!', completed: true },
        { name: 'Ravens lose', completed: false },
        { name: 'Titans lose', completed: true },
        { name: 'Chargers lose', completed: true }
    ];
    $scope.yourname = "Brad";

});

app.filter('completed', function () {
    return function (input) {
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].completed) {
                out.push(input[i]);
            }
        }
        return out;
    }
});