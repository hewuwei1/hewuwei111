/**
 * Created by T on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','$ionicHistory','$state','localStorageService',function ($scope,$ionicHistory,$state,localStorageService) {
    $scope.goBack=function () {
      $ionicHistory.nextViewOptions({
        disableBack:true
      });
      $state.go('app.home')
    };
    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop =localStorageService.get('shop',{
        shopphone:''
      })
    });
    $scope.shop={
      shopPhone:'123455549'
    };
    $scope.gohome=function () {
      $ionicPopup.alert({
        title:'提示',
        template:'退出成功',
        okText:'确定',
        okType:'button-energized'
      });
      var  user=localStorageService.get('user');
      user.isLogin=false;
      localStorageService.update('user',user)
      $state.go('login')
    };

  }])
})();
