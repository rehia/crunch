'use strict';

angular.module('utils', [], function($provide) {
    $provide.factory('currentDate', function() {
        return function() {
            return new Date();
        }
    });
});
