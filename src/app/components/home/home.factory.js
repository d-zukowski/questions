function HomeFactory ($q, $http) {
    'ngInject'

    let getUsers = function () {    
        
        let deferred = $q.defer();
    
        $http({
            method: 'GET',
            url: '../../../data/users.json'
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
        getUsers: getUsers
    }

}

export default HomeFactory;