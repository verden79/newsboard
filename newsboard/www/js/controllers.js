angular.module('starter.controllers', [])


.controller("EnterController", function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('views/page1.html', { scope: $scope })
    .then(function(modal) 
    {
        $scope.modal = modal;
    });

    $scope.inmenu = function() {
    $scope.modal.show();
    };

})

.controller("MenuController" ,function($scope){
  $scope.menus = [
    {title: "Книга рецептов"},
    {title: "Журнал"},
    {title: "Форум"},
    {title: "Добавь своё"},
    {title: "Книга рецептов"},
    {title: "Полезное"},
    {title: "Конкурсы"},
    {title: "Найди рецепт"},
    {title: "Фотографии"},
    {title: "Советы"},
    {title: "Однокурсники"},
    {title: "Настройки"}
  ];
  $scope.pers = { name: "Aleksey Pirogov" , balls : 0};
    
})

.controller("PageController" ,function($scope){
})


.controller("HeadController", function ($scope) {
})
