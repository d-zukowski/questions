function HomeController ($scope, $rootScope, $state, moment, HomeFactory) {
    'ngInject'

    HomeFactory.getUsers().then(
        (data) => {
            $scope.users = data;
            console.log($scope.users);
        }
    );

    $scope.loggedUserID = 1;
    $scope.sortBy = 'id';
    $scope.sortQuestions = (type) => {

        switch (type) {
            case 'recent': 
                $scope.sortBy = 'id';
                break
            case 'hot':
                $scope.sortBy = 'moreActivitiesLength'
                $scope.sortByReverse = true;
                break
            default: 
                $scope.sortBy = 'id';               
        }

    }

    $scope.filterBy = {
        question: '',
        author: ''
    };

    $scope.searchQuestion = () => {
        $scope.filterBy.question = $scope.searchValue;
    };

    $scope.toUrl = (title) => {
        return title
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    };

    $scope.dateToText = (date) => {

        let diff = moment(moment().diff(moment(date))).format('D');

        switch (diff) {
            case 0: 
                return 'today'
                break;
            case 1:
                return 'yesterday'
                break;
            case 2:
                return 'two days'
                break;                
            default:
                return diff + ' days'
        }

    };

    $scope.currentState = $state.current.data.state;

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
        $scope.currentState = $state.current.data.state;
    }); 

    $scope.lastTimeDiscussed = sessionStorage.lastTimeDiscussed; 

}

export default HomeController;