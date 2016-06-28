angular.module('starter.controllers', [])


.controller("EnterController", function ($scope) {
})


.controller("MyController" ,function($scope){
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
})

.controller("PageController" ,function($scope){
})
