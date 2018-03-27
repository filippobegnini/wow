//********** emitLastRepeaterElement
app.obj.mashupTemplateApp.directive('emitLastRepeaterElement', function() {
	console.log('emitLastRepeaterElement');
	return function(scope) {
		if (scope.$last){
		scope.$emit('LastRepeaterElement');
		}
	};
});
//********** End emitLastRepeaterElement