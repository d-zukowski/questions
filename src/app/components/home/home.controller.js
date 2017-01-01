function HomeController ($scope, $rootScope, $state, $timeout, HomeFactory) {
    'ngInject'

    $scope.loading = true;

    // Get data

    HomeFactory.getUsers().then(
        (data) => {
            $scope.users = data;
            $scope.loading = false;
        }
    );

    // Utils

    $scope.toUrl = (title) => {
        return HomeFactory.toUrl(title);
    };    

    $scope.dateToText = (date) => {
        return HomeFactory.dateToText(date);
    };

    // States

    $scope.currentState = $state.current.data.state;

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) { 
        $scope.currentState = $state.current.data.state;        
        window.scrollTo(0,0);
    }); 

    // User profile

    $scope.modalOpen = () => {
        HomeFactory.modal.open();
    };

    $scope.modalClose = () => {
        HomeFactory.modal.close();
    };

    $scope.showUserProfile = (id) => {
        $scope.user = $scope.users[id];
        $scope.modalOpen();
    };

}

export default HomeController;