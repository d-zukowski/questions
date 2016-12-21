// Vendor

import 'angular';
import 'angular-ui-router';
import 'ng-page-title';
import 'angular-moment';


// App

import RoutingConfig from './routes.config';

import HomeFactory from './components/home/home.factory';
import AllQuestionsFactory from './components/all-questions/all-questions.factory';
import SingleQuestionFactory from './components/single-question/single-question.factory';
import UserProfileFactory from './shared/user-profile/user-profile.factory';

import HomeController from './components/home/home.controller';
import AllQuestionsController from './components/all-questions/all-questions.controller';
import SingleQuestionController from './components/single-question/single-question.controller';
import UserProfileController from './shared/user-profile/user-profile.controller';

const dependencies = [
    'ui.router',
    'ngPageTitle',
    'angularMoment'
];

console.log('test');

angular.module('app', dependencies)
    .config(RoutingConfig)

    .factory('HomeFactory', HomeFactory)
    .factory('AllQuestionsFactory', AllQuestionsFactory)
    .factory('SingleQuestionFactory', SingleQuestionFactory)
    .factory('UserProfileFactory', UserProfileFactory)

    .controller('HomeController', HomeController)
    .controller('AllQuestionsController', AllQuestionsController)
    .controller('SingleQuestionController', SingleQuestionController)
    .controller('UserProfileController', UserProfileController);