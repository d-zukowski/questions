function MainController ($scope, moment) {
    'ngInject'
    $scope.a = moment("2016-12-17 15:00").format("dddd");
}

export default MainController;