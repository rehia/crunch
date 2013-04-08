/**
 * Created with JetBrains WebStorm.
 * User: jerome
 * Date: 4/7/13
 * Time: 1:18 PM
 * To change this template use File | Settings | File Templates.
 */

describe ('Service: utils', function () {
    var currentDate;

    beforeEach(module('utils'))

    beforeEach(function() {
      inject(function($injector) {
        currentDate = $injector.get('currentDate');
      });
    });

    it('should return the current date', function () {
        expect(currentDate().getDate()).toBe(new Date().getDate());
        expect(currentDate().getMonth()).toBe(new Date().getMonth());
        expect(currentDate().getYear()).toBe(new Date().getYear());
    });

});