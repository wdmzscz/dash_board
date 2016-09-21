// 'use strict';
describe('logincontroller', function() {
    beforeEach(module('DashboardApp'));
    var logincCtrl;
    var location;
    var $httpBackend;
    var $scope;
    var $cookieStore;
    var success = {
        authentication: 'success'
    };


    beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_, _$cookieStore_, _$location_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $scope = _$rootScope_.$new();
        $cookieStore = _$cookieStore_;
        location = _$location_;
        _$controller_('loginCtrl', {
            $scope: $scope,
            $location: location
        });
    }));

    it('success router to root', function() {
        $httpBackend.expectPOST('http://localhost:3000/api/login').respond(200, success);
        $scope.submit();
        $httpBackend.flush();
        spyOn(location, 'path');
        $scope.$apply();
        // var name = $cookieStore.get('username');
        // $log.log(name);
        // expect(name).toEqual($scope.username);
        console.log(location);
        expect(location.$$path).toEqual('/root/work');
    });

    it('error', function() {
        $httpBackend.expectPOST('http://localhost:3000/api/login').respond(400, success);
        $scope.submit();
        $httpBackend.flush();
        expect($scope.errorMsg).toBe("Login is not correct, please try again!");
    });
});
