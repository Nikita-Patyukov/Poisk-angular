/**
 * Created by Nikita on 01.12.2015.
 */
angular.module('state1', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
    $stateProvider.state('state1', {
      url: '/state1',
      views:{
        'main':{
          controller: 'stateCtrl1',
          templateUrl: 'state1/state1.html'
        }
      }
    })
  }])
angular.module('state2', ['ui.router'])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('state2', {
      url: '/state2',
      views:{
        'main':{
          controller: 'stateCtrl2',
          templateUrl: 'state1/state1.html'
        }
      }
    })
  }])
.controller('stateCtrl1', ['$scope', function($scope) {
    $scope.text='state1'
  }])
.controller('stateCtrl2', ['$scope', function($scope) {
    $scope.text='state2'
  }])
