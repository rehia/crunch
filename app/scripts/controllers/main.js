'use strict';

angular.module('crunchApp')
    .controller('MainCtrl', function ($scope, currentDate) {
        $scope.consultants = [
            'Christophe',
            'Gilles',
            'Jérôme',
            'Mylène',
            'Pablo',
            'Tony',
            'Yassine'
        ];

        $scope.months = [];
        for (var i = 0 ; i < 4; i++) {
            var date = currentDate();
            date.setMonth(date.getMonth() - i);
            $scope.months.push(date.getTime());
        }

        $scope.daysInMonth = [];
        for (var i = 1 ; i < 32; i++) {
            $scope.daysInMonth.push(i);
        }

        $scope.missions = [
            'Client 1 - Développement .NET',
            'Client 2 - Tests de charge',
            'Client 3 - Support .NET'
        ];
    });
