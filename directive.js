/**
* shBasicUI Module
*
* A module for some basic UI elements.
*/
angular.module('intellectual-tech.UIControls', []).directive('shCheckbox', [function(){
  return {
    scope: {label:"@"},
    require: 'ngModel',
    restrict: 'E',
    template: '<div class="sh-checkbox"><span ng-class="{\'icon-checkbox-checked\':checkboxModel.isChecked, \'icon-checkbox-unchecked\':!checkboxModel.isChecked}"></span> <span ng-class="{\'sh-checkbox-label-checked\':checkboxModel.isChecked, \'sh-checkbox-label-unchecked\':!checkboxModel.isChecked}">{{label}}</span></div>',
    link: function(scope, iElm, iAttrs, ngModel) {
      scope.checkboxModel = {isChecked:false};

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