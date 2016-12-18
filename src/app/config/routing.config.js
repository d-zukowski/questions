function RoutingConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    'ngInject'

    $stateProvider    
        .state('home', {
            url: '',
            views: {      
                '': {
                    controller: 'HomeController',
                    templateUrl: 'app/home/home.html'
                },
                'userProfile@home': {
                    controller: 'UserProfileController',
                    templateUrl: 'app/states/user-profile/user-profile.html'
                }
            }             
        })

        .state('home.allquestions', {
            url: '/',
            controller: 'AllQuestionsController',
            data: {
                pageTitle: 'Questions'
            },              
            templateUrl: 'app/states/all-questions/all-questions.html'   
        })
        
        .state('home.singlequestion', {        
            url: '/single-question',
            controller: 'SingleQuestionController',
            data: {
                pageTitle: 'Single question'
            },              
            templateUrl: 'app/states/single-question/single-question.html'
        });        
                       
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);    

}

export default RoutingConfig;