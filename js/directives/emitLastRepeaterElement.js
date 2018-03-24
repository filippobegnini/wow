//********** emitLastRepeaterElement
app.directive('emitLastRepeaterElementDirective', function($log) {
	$log.info('emitLastRepeaterElementDirective');
	return function(scope) {
		if (scope.$last){
		scope.$emit('LastRepeaterElement');
		}
	};
});
//********** End emitLastRepeaterElement

