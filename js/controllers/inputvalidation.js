var myApp = angular.module('InputValidation', []);
myApp.controller('Form', ['$scope', function ($scope) {
    $scope.submitForm = function (isValid) {
        if (isValid) {
            alert('Data was saved');
        }
        else{
            alert(isValid);
        }
    };
}]);
