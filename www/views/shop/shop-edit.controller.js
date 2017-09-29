/**
 * Created by T on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService','$state','$ionicHistory',function ($scope,$stateParams,localStorageService,$state,$ionicHistory) {
    $scope.title=$stateParams.title;
    $scope.property=$stateParams.property;
    $scope.shop=localStorageService.get('Shop',{
      phone:'12246658',
      createTime:'2017-9-28 9:19:30',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
      $ionicHistory.goBack();
    }
  }])
})();
