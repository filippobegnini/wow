//********** emitLastRepeaterElement
app.directive('emitLastRepeaterElementDirective', function() {
	console.log('emitLastRepeaterElementDirective');
	return function(scope) {
		if (scope.$last){
		scope.$emit('LastRepeaterElement');
		}
	};
});
//********** End emitLastRepeaterElement

