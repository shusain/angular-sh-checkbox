/**
* shBasicUI Module
*
* A module for some basic UI elements.
*/
angular.module('intellectual-tech.UIControls', []).directive('shCheckbox', [function(){
  return {
    scope: {
      label:"@",
      checkedIconClass:"@",
      unCheckedIconClass:"@"
    },
    require: 'ngModel',
    restrict: 'E',
    template: '<div class="sh-checkbox"><span ng-class="getClass(checkboxModel)"></span> <span ng-class="{\'sh-checkbox-label-checked\':checkboxModel.isChecked, \'sh-checkbox-label-unchecked\':!checkboxModel.isChecked}" style=\'-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;\' unselectable=\'on\' onselectstart=\'return false;\' onmousedown=\'return false;\'>{{label}}</span></div>',
    link: function(scope, iElm, iAttrs, ngModel) {
      iElm.css("cursor","pointer");

      scope.checkboxModel = {
        isChecked:false,
        checkedIconClass: scope.checkedIconClass || "fa fa-check-circle-o",
        unCheckedIconClass: scope.unCheckedIconClass || "fa fa-circle-o"
      };

      scope.getClass = function(){
        if(scope.checkboxModel.isChecked)
          return scope.checkboxModel.checkedIconClass;
        else
          return scope.checkboxModel.unCheckedIconClass;
      }

      if(!ngModel) return; // do nothing if no ng-model
      
      // Specify how UI should be updated
      ngModel.$render = function() {
      }

      iElm.on("click", function(){
        scope.checkboxModel.isChecked = !scope.checkboxModel.isChecked;
        scope.$apply(read);
      })
      read();
      function read(){
        ngModel.$setViewValue(scope.checkboxModel.isChecked);
      }
    }
  };
}]);