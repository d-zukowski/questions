function RoutingConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    'ngInject'

    $stateProvider    
        .state('home', {
            url: '',
            views: {      
                '': {
                    controller: 'HomeController',
                    templateUrl: 'app/components/home/home.view.html'
                },
                'userProfile@home': {
                    controller: 'UserProfileController',
                    templateUrl: 'app/shared/user-profile/user-profile.view.html'
                }
            }             
        })

        .state('home.allquestions', {
            url: '/',
            controller: 'AllQuestionsController',
            data: {
                pageTitle: 'Questions'
            },              
            templateUrl: 'app/components/all-questions/all-questions.view.html'   
        })
        
        .state('home.singlequestion', {        
            url: '/single-question',
            controller: 'SingleQuestionController',
            data: {
                pageTitle: 'Single question'
            },              
            templateUrl: 'app/components/single-question/single-question.view.html'
        });        
                       
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);    

}

export default RoutingConfig;