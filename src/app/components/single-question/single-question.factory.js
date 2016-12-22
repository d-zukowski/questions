function SingleQuestionFactory ($q, $http) {
    'ngInject'

    let getQuestion = function () {    
        
        let deferred = $q.defer();
    
        $http({
            method: 'GET',
            url: '../../../data/single-question.json'
        }).then(
            (response) => {
                deferred.resolve(response.data);  
            }, 
            (error) => {
                deferred.resolve(error); 
            }         
        ); 

        return deferred.promise;
        
    };

    return {
        getQuestion: getQuestion
    }

}

export default SingleQuestionFactory;