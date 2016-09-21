'use strict';
describe('factories', function() {
    // load the controller's module
    beforeEach(module('DashboardApp'));
    var AddEditDel;
    var result;
    beforeEach(inject(function(_AddEditDel_){
    	AddEditDel=_AddEditDel_;
    }));

    it('should get false flag', function() {
        expect(AddEditDel.getBack()).toBe(false);
        expect(AddEditDel.getAdd()).toBe(false);
        expect(AddEditDel.getEdit()).toBe(false);
        expect(AddEditDel.getDel()).toBe(false);
    });

    describe("set true value", function(){
    	beforeEach(function(){
    		AddEditDel.setFlag(true, true, true, true);
    	});

    	it('should get true flag', function() {
        	expect(AddEditDel.getBack()).toBe(true);
        	expect(AddEditDel.getAdd()).toBe(true);
       		expect(AddEditDel.getEdit()).toBe(true);
        	expect(AddEditDel.getDel()).toBe(true);
    	});
	});
});
