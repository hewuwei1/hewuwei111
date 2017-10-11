/**
 * Created by T on 2017/9/28.
 */
(function () {
  'use striet';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope','$locat',function ($scope,$localS) {
    $scope.user={
      oldPassword:'',
      passwrod:'',
      confirmPassword:''
    }
    $scope.save=function () {
      
    }
  }])
})()
