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
        { name: 'Chips', completed: true },
        { name: 'Corn', completed: false },
        { name: 'Steak', completed: true },
        { name: 'Cheese', completed: true }
    ];

    $scope.addItem = function () {
        var obj = {
            name: this.myItem,
            completed: false
        };
        $scope.todo.push(obj);
    }

    $scope.yourname = "Brad";

});

app.filter('completed', function () {
    return function (input) {
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if (!input[i].completed) {
                out.push(input[i]);
            }
        }
        return out;
    }
});