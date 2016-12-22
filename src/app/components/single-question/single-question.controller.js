function SingleQuestionController ($scope, $stateParams, moment, SingleQuestionFactory) {
    'ngInject'

    $scope.url = $stateParams.question;

    SingleQuestionFactory.getQuestion().then(
        (data) => {
            $scope.singleQuestion = data;
            angular.forEach(data.answers, (answerValue, answerKey) => {

                if (answerValue.comments.length) {
                    
                    sessionStorage.setItem('lastTimeDiscussed', moment(answerValue.comments[0].date).fromNow(true));
                } else {
                    sessionStorage.setItem('lastTimeDiscussed', moment(answerValue[0].date).fromNow(true));
                }

            });
                   
        }
    );
    
}

export default SingleQuestionController;