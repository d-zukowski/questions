function AllQuestionsController ($scope, AllQuestionsFactory) {
    'ngInject'

    AllQuestionsFactory.getQuestions().then(
        (data) => {
            $scope.allQuestions = data;
            
        }
    );

    AllQuestionsFactory.getActivitiesTypes().then(
        (data) => {
            $scope.activitiesTypes = data;
        }
    );

    $scope.loadMoreQuestions = () => {
        AllQuestionsFactory.getQuestions().then(
            (data) => {
                angular.forEach(data, (value, index) => {
                    $scope.allQuestions.push(value);
                });
            }
        );
    };

}

export default AllQuestionsController;