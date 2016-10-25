angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $ionicPopup) {

    $scope.style1 = {
      'position': 'absolute',
      'left': '0px',
      'top': '0px',
      'z-index': '1',
    };

    $scope.style2 = {
      'position': 'absolute',
      'left': '0px',
      'top': '50px',
      'z-index': '2',
    };

    $scope.hello = function (event) {

      alert(event.currentTarget.id);

      $scope.style1 = {
        'position': 'absolute',
        'left': '0px',
        'top': '50px',
        'z-index': '3',
      };
      $scope.style2 = {
        'position': 'absolute',
        'left': '0px',
        'top': '0px',
        'z-index': '2',
      };
    }

    $scope.hello2 = function () {
      $scope.style2 = {
        'position': 'absolute',
        'left': '0px',
        'top': '50px',
        'z-index': '3',
      };
      $scope.style1 = {
        'position': 'absolute',
        'left': '0px',
        'top': '0px',
        'z-index': '2',
      };
    }



  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
