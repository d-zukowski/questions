function UtilsFactory ($q, $http) {
    'ngInject'

    // Ajax

    let ajax = (url, method) => {    
        
        let deferred = $q.defer();
    
        $http({
            method: method || 'GET',
            url: url
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
        ajax: ajax
    }

}

export default UtilsFactory;