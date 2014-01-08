angular.module('angularjs-init', []).directive('angularjsInit', function(){
	return {
		restrict: 'A',
		link:function(scope, element, attrs){
			var initData = JSON.parse(element[0].innerHTML);
			 for(var name in initData){
		        scope[name] = initData[name];
		    }
		}
	};
});
