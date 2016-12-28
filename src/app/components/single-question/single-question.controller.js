function SingleQuestionController ($scope, $stateParams, moment, SingleQuestionFactory) {
    'ngInject'

    // Get data

    SingleQuestionFactory.getQuestion().then(
        (data) => {
            $scope.singleQuestion = data;

            // Get "last time discussed" date

            angular.forEach(data.answers, (answerValue, answerKey) => {
                if (answerValue.comments.length) {                    
                    sessionStorage.setItem('lastTimeDiscussed', moment(answerValue.comments[0].date).fromNow(true));
                } else {
                    sessionStorage.setItem('lastTimeDiscussed', moment(answerValue[0].date).fromNow(true));
                }
            });

        }
    );

};

export default SingleQuestionController;