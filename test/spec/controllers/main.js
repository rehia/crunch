'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('crunchApp'));

    var MainCtrl,
        scope,
        date;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
        scope = {};
        var currentDate = 1365359327150;
        date = new Date(currentDate); // 07/04/2013
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            currentDate: function() {
                return new Date(currentDate);
            }
        });
    }));

    it('should attach a list of consultants', function () {
        expect(scope.consultants.length).toBe(7);
    });

    it('should attach a list of months starting three months ago', function() {
        expect(new Date(scope.months[0]).getMonth()).toMatch(3); //avril
        expect(new Date(scope.months[3]).getMonth()).toMatch(0); //janvier
    });

    it('should attach a list of mission', function () {
        expect(scope.missions.length).toBe(3);
    });

    it('should attach a list of days', function () {
        expect(scope.daysInMonth.length).toBe(31);  // 31 jours en avril
    });

//    it('should change CRA when selected month is updated', function() {
//        scope.selectedMonth = new Date();
//    });
});
