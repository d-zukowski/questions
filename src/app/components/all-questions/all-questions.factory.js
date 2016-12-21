function AllQuestionsFactory ($q, $http) {
    'ngInject'

    let getQuestions = function () {    
        
        let deferred = $q.defer();
    
        $http({
            method: 'GET',
            url: '../../../data/all-questions.json'
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

    let getActivitiesTypes = function () {    
        
        let deferred = $q.defer();
    
        $http({
            method: 'GET',
            url: '../../../data/activities-types.json'
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
        getQuestions: getQuestions,
        getActivitiesTypes: getActivitiesTypes
    }

}

export default AllQuestionsFactory;