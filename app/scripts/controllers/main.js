'use strict';

angular.module('cilantroApp').controller('MainCtrl', function($scope, $http, $resource) {

  loadThings();

  $scope.setTag = function(currTag) {
    $scope.currTag = currTag;
    console.log("set was called scope is now set to:", $scope.currTag);
  }

  $scope.thingFilter = function(thing) {
    console.log(thing.name, thing.tag, thing.tag == "front");
    return $scope.currTag ? thing.tag == $scope.currTag : true;
  }

  function loadThings() {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  }

});