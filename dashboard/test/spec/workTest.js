'use strict';

describe('test workCtrl ngshow', function() {
	var rootScope;
	var scope;
	var ctrl;
	var addContent={title: 'title', author: 'author', like: 'like', comment: 'comment'};
	beforeEach(module('DashboardApp'));
	beforeEach(inject(function($rootScope, $controller){
		rootScope=$rootScope;
		scope=rootScope.$new();
		ctrl=$controller('WorkCtrl', { $scope: scope });
		//scope.$digest();
		scope.contents=[];

	}));
	it('should return current ngshow value', function() {
		expect(scope.visible).toEqual(false);
		expect(scope.cardShow).toEqual(true);
		expect(scope.listShow).toEqual(false);
	});

	describe('test showList function', function() {
		var current;
		beforeEach(function(){
			current=scope.visible;
			scope.setCard();
		});
		it('display visible flags', function(){
			expect(scope.visible).not.toEqual(current);
		});
	});

	describe('test setList function', function() {
		var current;
		beforeEach(function(){
			current=scope.visible;
			scope.setCard();
		});
		it('display card flags', function(){
			expect(scope.visible).not.toEqual(current);
			expect(scope.cardShow).toEqual(true);
			expect(scope.listShow).toEqual(false);
		});
	});

	describe('test setCard function', function() {
		var current;
		beforeEach(function(){
			current=scope.visible;
			scope.setList();
		});
		it('display list flags', function(){
			expect(scope.visible).not.toEqual(current);
			expect(scope.cardShow).toEqual(false);
			expect(scope.listShow).toEqual(true);
		});
	});

	describe('test emit', function() {
		beforeEach(function() {
			spyOn(scope, "$emit");
			scope.$emit('addItem');
			scope.$emit('editItem');
			scope.$emit('delItem');
		});
		it('emit a message', function() {
			expect(scope.$emit).toHaveBeenCalledWith("addItem");
			expect(scope.$emit).toHaveBeenCalledWith("editItem");
			expect(scope.$emit).toHaveBeenCalledWith("delItem");
		});
	});

	// describe('test on', function() {
	// 	beforeEach(function() {
	// 		rootScope.$broadcast("addSubmit", addContent);
			
	// 	});
	// 	it('listen from broadcast', function() {
	// 		expect(scope.contents[0].title).toEqual('title');
	// 		expect(scope.contents[0].author).toEqual('author');
	// 		expect(scope.contents[0].like).toEqual('like');
	// 		expect(scope.contents[0].comment).toEqual('comment');
	// 		expect(scope.$on).toHaveBeenCalled();
	// 	});
	// });

});