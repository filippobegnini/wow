app.component("toast", {
    templateUrl: 'js/components/toast/toast.html',
    controller: toastController,
    bindings: {
      message: '<',
      title: '<',
      type: '<',
      options: '<?'
    }
});

function toastController($timeout, $element, defaults) {
    var ctrl = this, timeoutInstance;

    ctrl.$onInit = function(){
    }
    
    ctrl.$onChanges = function(toast){
        var closeDelay, options;

        options = toast.options.currentValue;

        if(options){
            closeDelay = options.closeDelay || defaults.toast.closeDelay;

            $element.show();

            timeoutInstance = $timeout(function(){
                ctrl.close();
            }, closeDelay);
        }
    }

    ctrl.close = function(){
        if(timeoutInstance) $timeout.cancel(timeoutInstance);
        $element.hide();
    }
}

app.provider("ToastEnum", function(){
  
    this.$get = function(){
        return {
            'SUCCESS'   : 'success',
            'INFO'      : 'info',
            'WARNING'   : 'warning',
            'DANGER'    : 'danger',
        };
    }
});