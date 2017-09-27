(function () {
  'use strict';
  angular.module('starter.controllers').controller('CategoryListCtrl',['$scope','$ionicHistory','$ionicActionSheet' ,function ($scope,$ionicHistory,$ionicActionSheet) {
    $scope.categories = [
      {
        ID:1,
        Name:'电脑整机',
        Children:[
          {
            ID:11,
            Name:'笔记本'
          },
          {
            ID:12,
            Name:'台式机'
          },
          {
            ID:13,
            Name:'平板电脑'
          }
        ]
      },
      {
        ID:2
        ,Name:'电脑配件'
        ,Children:[
        {
          ID:21
          ,Name:'CPU'
          ,Children:[]
        }
        ,{
          ID:22
          ,Name:'内存'
          ,Children:[]
        }


      ]
      }
      ,{
        ID:3
        ,Name:'外设产品'
        ,Children:[
          {
            ID:31
            ,Name:'鼠标'
            ,Children:[]
          }
          ,{
            ID:32
            ,Name:'键盘'
            ,Children:[]
          }
          ,{
            ID:33
            ,Name:'U盘'
            ,Children:[]
          }
        ]
      }
      ,{
        ID:4
        ,Name:'配件'
        ,Children:[
          {
            ID:41
            ,Name:'路由器'
            ,Children:[]
          }
          ,{
            ID:42
            ,Name:'交换机'
            ,Children:[]
          }
          ,{
            ID:43
            ,Name:'网卡'
            ,Children:[]
          }
          ,{
            ID:44
            ,Name:'网络配件'
            ,Children:[]
          }
        ]
      },
      {
        ID:5
        ,Name:'默认分类'
        ,Children:[]
      }
    ];
    $scope.activeCategory = {};
    //$scope.activeSubCategory = {};
    if ($scope.categories.length > 0){
      $scope.activeCategory =$scope.categories[0];
    }

    $scope.selectCategory = function (index) {
      if ($scope.activeCategory.ID !=$scope.categories[index].ID){
        $scope.activeCategory = $scope.categories[index];
      }
    };

    $scope.selectSubCategory = function (date) {
      $scope.activeSubCategory = date;

    };

    $scope.showActionSheet = function () {
      $ionicActionSheet.show({
        buttons:[
          {
            text:'<b>新增小分类</b>'
          },
          {
            text:'编辑分类'
          }
        ],
        cancelText:'取消',
        buttonClicked:function (index) {
          switch (index){
            case 0:
              $scope.gotoCategoryAdd();
              break;
            case 1:

              break;
          }

        },
        titleText:'更多操作'
      });

    };
    $scope.gotoCategoryAdd = function () {
      location.href = '#/app/category-add/' + $scope.activeCategory.ID + '/' + $scope.activeCategory.Name;

    }

  }]);

})();
