function AllQuestionsController ($scope, AllQuestionsFactory) {
    'ngInject'

    // Get data

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

    // Load more
    
    $scope.loadMoreQuestions = () => {
        $scope.questionsLimit += 3;
    };    

}

export default AllQuestionsController;