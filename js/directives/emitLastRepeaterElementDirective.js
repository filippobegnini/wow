//********** emitLastRepeaterElement
app.obj.mashupTemplateApp.directive('emitLastRepeaterElementDirective', function() {
	console.log('emitLastRepeaterElementDirective');
	return function(scope) {
		if (scope.$last){
		scope.$emit('LastRepeaterElement');
		}
	};
});
//********** End emitLastRepeaterElement

