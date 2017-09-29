/**
 * Created by T on 2017/9/28.
 */
(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};
    $scope.editShop=function (titleValue,propertvValua) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertvValua
      })
    }
    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        phone:'12234566',
        createTime:'2017-9-28 10:30:15'
      })
    })
  }])
})()
