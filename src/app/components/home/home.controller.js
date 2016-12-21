function HomeController ($scope, moment, HomeFactory) {
    'ngInject'

    HomeFactory.getUsers().then(
        (data) => {
            $scope.users = data;
            console.log($scope.users);
        }
    );

    $scope.loggedUserID = 1;
    $scope.sortBy = 'id';
    $scope.sortQuestions = (type) => {

        switch (type) {
            case 'recent': 
                $scope.sortBy = 'id';
                break
            case 'hot':
                $scope.sortBy = 'moreActivitiesLength'
                $scope.sortByReverse = true;
                break
            default: 
                $scope.sortBy = 'id';               
        }

    }

    $scope.filterBy = {
        question: '',
        author: ''
    };

    $scope.searchQuestion = () => {
        $scope.filterBy.question = $scope.searchValue;
    };

    // $scope.sort = () = {

    // };

}

export default HomeController;