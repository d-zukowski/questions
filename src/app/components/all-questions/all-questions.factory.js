function AllQuestionsFactory (UtilsFactory) {
    'ngInject'

    let getQuestions = () => {
        return UtilsFactory.ajax('../../../data/all-questions.json');
    };

    let getActivitiesTypes = () => {
        return UtilsFactory.ajax('../../../data/activities-types.json');
    };

    return {
        getQuestions: getQuestions,
        getActivitiesTypes: getActivitiesTypes
    }

}

export default AllQuestionsFactory;