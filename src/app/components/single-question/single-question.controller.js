function SingleQuestionController ($scope, $rootScope, $stateParams, moment, SingleQuestionFactory) {
    'ngInject'

    // Get data

    SingleQuestionFactory.getQuestion().then(
        (data) => {
            $scope.singleQuestion = data;

            // Get "last time discussed" date

            angular.forEach(data.answers, (answerValue, answerKey) => {
                if (answerValue.comments.length) {    
                    console.log(answerValue.comments[0].date);
                    $rootScope.lastTimeDiscussed = moment(moment().diff(moment(answerValue.comments[0].date))).format('D');              
                } else {
                    console.log(answerValue[0].date);
                    $rootScope.lastTimeDiscussed = moment(moment().diff(moment(answerValue[0].date))).format('D');
                }
            });

        }
    );

};

export default SingleQuestionController;