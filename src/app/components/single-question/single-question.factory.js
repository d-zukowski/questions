function SingleQuestionFactory (UtilsFactory) {
    'ngInject'

    let getQuestion = () => {
        return UtilsFactory.ajax('../../../data/single-question.json');        
    };

    return {
        getQuestion: getQuestion
    }

};

export default SingleQuestionFactory;