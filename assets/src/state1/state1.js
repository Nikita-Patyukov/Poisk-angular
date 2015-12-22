/**
 * Created by Nikita on 01.12.2015.
 */
/* angular.module('state1', ['ui.router'])
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
    $stateProvider.state('state2', {
      url: '/state2',
      views:{
        'main':{
          controller: 'stateCtrl2',
          templateUrl: 'state1/state1.html'
        }
      }
    })
  }]) */
/**angular.module('state2', ['ui.router'])
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
  }])*/
/*.controller('stateCtrl1', ['$scope', function($scope) {
    $scope.text='state1'
  }])
.controller('stateCtrl2', ['$scope', function($scope) {
    $scope.text='state2'
  }])*/
angular.module('MyApp', [])

  .controller('mainCtrl', function($scope){
    /*
     * Создаем список элементов
     */
    $scope.itemsList = [
      {'name': 'Адреналин'},
      {'name': 'Дреналин'},
      {'name': 'Реналин'},
      {'name': 'Еналин'},
      {'name': 'Алина'},
      {'name': 'Лина'},
      {'name': 'Ина'},
      {'name': 'Кандибобер'},
      {'name': 'бобер'},
      {'name': 'Карнавал'},
      {'name': 'Клан'},
      {'name': 'Клин'},
      {'name': 'Клуб'}
    ];
  })

  /*
   * Объявляем директиву, которая будет создавать сам список
   */
  .directive('dropdownList',function( $timeout ){
    return {
      restrict: 'E',
      scope: {
        itemsList: '=',
        placeholder: '@'
      },
      template: '<input type="text" ng-model="search" placeholder="{{ placeholder }}" />' +
      '<div class="search-item-list"><ul class="list">' +
      '<li ng-repeat="item in itemsList | filter:search" ng-click="chooseItem( item )">{{ item.name }}' +
      '</li>' +
      '</ul></div>',
      link: function(scope, el, attr){
        var $listContainer = angular.element( el[0].querySelectorAll('.search-item-list')[0] );
        el.find('input').bind('focus',function(){
          $listContainer.addClass('show');
        });
        el.find('input').bind('blur',function(){
          /*
           * 'blur' реагирует быстрее чем ng-click,
           * поэтому без $timeout chooseItem не успеет поймать item до того, как лист исчезнет
           */
          $timeout(function(){ $listContainer.removeClass('show') }, 200);
        });

        scope.chooseItem = function( item ){
          scope.search = item.name;
          $listContainer.removeClass('show');
        }
      }
    }
  });

