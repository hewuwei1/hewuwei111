(function () {
  'use strict'
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope','$ionicActionSheet','$ionicHistory','CategoryService','productService','popupService', function ($scope,$ionicActionSheet,$ionicHistory,CategoryService,productService,popupService) {
      $scope.$on('$stateChangeSuccess',function (event,toState,toParams,fromState,fromParams) {
        $scope.showInfo='无小分类进入大分类';
        if(fromState.name=='app.product-list'){
          $scope.showInfo='全部商品';
        }
      });
      $scope.categories = [
        {
          ID: 1,
          Name: '书籍',
          Children: [
            {
              ID: 10,
              Name: '语文',
              Children: []
            },
            {
              ID: 11,
              Name: '数学',
              Children: []
            },
            {
              ID: 12,
              Name: '英语',
              Children: []
            },
            {
              ID: 13,
              Name: '物理',
              Children: []
            }
          ]
        },
        {
          ID: 2,
          Name: '动物',
          Children: [
            {
              ID: 14,
              Name: '猫',
              Children: []
            },
            {
              ID: 15,
              Name: '狗',
              Children: []
            },
            {
              ID: 16,
              Name: '虎',
              Children: []
            },
            {
              ID: 17,
              Name: '蛇',
              Children: []
            }
          ]
        },
        {
          ID: 3,
          Name: '鱼类',
          Children: [
            {
              ID: 18,
              Name: '海马',
              Children: []
            },
            {
              ID: 19,
              Name: '带鱼',
              Children: []
            },
            {
              ID: 20,
              Name: '章鱼',
              Children: []
            },
            {
              ID: 21,
              Name: '草鱼',
              Children: []
            }
          ]
        },
        {
          ID: 4,
          Name: '水果',
          Children: [
            {
              ID: 22,
              Name: '梨',
              Children: []
            },
            {
              ID: 23,
              Name: '橙',
              Children: []
            },
            {
              ID: 24,
              Name: '瓜',
              Children: []
            },
            {
              ID: 25,
              Name: '柚',
              Children: []
            }
          ]
        },
      ];
      $scope.activeCategory = {};
      $scope.activeSubCategory = {};
      if ($scope.categories.length > 0) {
        $scope.activeCategory = $scope.categories[0];
      }
      $scope.seleCategory = function (index) {
        if ($scope.activeCategory.ID != $scope.categories[index].ID) {
          $scope.activeCategory = $scope.categories[index];
        }
      };
      $scope.selectSubCategory = function (data) {
        console.log(data);
        $scope.activeSubCategory = data;
        $ionicHistory.goBack();
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
            switch(index){
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
      $scope.gotoCategoryAdd=function () {
        location.href='#/app/category-add/' +$scope.activeCategory.ID + '/' +$scope.activeCategory.Name;
      }
      $scope.$watch('activeSubCategory',function (newValue,oldValue) {
        if(newValue.ID){
          CategoryService.updateCategory($scope.activeSubCategory);
        }
      })
    }
    ]);
})();

