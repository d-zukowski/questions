function RoutingConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject'

    $stateProvider    
        .state('home', {
            url: '',
            controller: 'HomeController',
            templateUrl: 'app/components/home/home.view.html'        
        })

        .state('home.allquestions', {
            url: '/',
            controller: 'AllQuestionsController',
            data: {
                pageTitle: 'Questions',
                state: 'all'
            },              
            templateUrl: 'app/components/all-questions/all-questions.view.html'   
        })
        
        .state('home.singlequestion', {        
            url: '/question/:url',
            controller: 'SingleQuestionController',
            data: {
                pageTitle: 'Single question',
                state: 'single'
            },              
            templateUrl: 'app/components/single-question/single-question.view.html'
        });        
                       
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);    

}

export default RoutingConfig;