(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductLoading',['$scope','$ionicLoading','$filter','$timeout',function ($scope,$ionicLoading,$filter,$timeout) {
      $scope.products=[];
      $scope.sourceProducts = [];
      $scope.searchMV={
        content:''
      };
      $scope.hasMore=true;
      var isLoading = false;
      var pageIndex = 1;
      $scope.$on('$ionicView.enter',function () {
       $ionicLoading.show({
         template:'<ion-spinner icon="ios" class="spinner-list"></ion-spinner>数据加载中，请稍后......'
       });
        $scope.doRefresh();
      });
      $scope.getByNaem=function () {
        $scope.products = $filter('filter')($scope.sourceProducts,{
          Name:$scope.searchMV.content
        });
      };
      $scope.doRefresh = function () {
        pageIndex=1;
        $scope.hasMore=true;
        $scope.products=[];
        loadData();
      };
      $scope.loadMore=function () {
        pageIndex++;
        loadData();
      };
      function  loadData() {
        if (isLoading == true) {
          return;
        }
        isLoading = true;
        $timeout(function () {
          var list = [
            {
              ID: 1
              , Images: ['views/product/images/1.jpg']
              , Name: 'iphone 7plus'
              , Price: '8000'
              , Store: 12
              , Barcode: '123'
            }
            , {
              ID: 2
              , Images: ['views/product/images/2.jpg']
              , Name: '摩托罗拉3'
              , Price: '3200'
              , Store: 132
              , Barcode: '124'
            }
            , {
              ID: 3
              , Images: ['views/product/images/3.jpg']
              , Name: 'iphone 6'
              , Price: '1500'
              , Store: 10
              , Barcode: '65446546554'
            }
            , {
              ID: 4
              , Images: ['views/product/images/4.jpg']
              , Name: '魅族5'
              , Price: '1900'
              , Store: 25
              , Barcode: '5415313'
            }
            , {
              ID: 5
              , Images: ['views/product/images/5.jpg']
              , Name: '红米3'
              , Price: '626'
              , Store: 20
              , Barcode: '1123131'
            }
            , {
              ID: 6
              , Images: ['views/product/images/6.jpg']
              , Name: '三星 A5'
              , Price: '1555'
              , Store: 25
              , Barcode: '52314532'
            }
            , {
              ID: 7
              , Images: ['views/product/images/7.jpg']
              , Name: '华为荣耀6'
              , Price: '1800'
              , Store: 30
              , Barcode: '4351215'
            }
            , {
              ID: 7
              , Images: ['views/product/images/8.jpg']
              , Name: 'note6'
              , Price: '1400'
              , Store: 30
              , Barcode: '4351215'
            }
          ];
          $scope.products=$scope.products.concat(list);
          $scope.sourceProducts=angular.copy($scope.products);
          $scope.$broadcast('scroll.refreshComplete');
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $ionicLoading.hide();
          isLoading=false;
          if(pageIndex==3){
            $scope.hasMore=false;
          }
        }, 3000);
      }
    }]);
})();
