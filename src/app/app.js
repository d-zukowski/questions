// Vendor

import 'angular';
import 'angular-ui-router';
import 'ng-page-title';
import 'angular-moment';


// App

import RoutingConfig from './config/routing.config';

import AllQuestionsFactory from './states/all-questions/all-questions.factory';
import SingleQuestionFactory from './states/single-question/single-question.factory';
import UserProfileFactory from './states/user-profile/user-profile.factory';

import HomeController from './home/home.controller';
import AllQuestionsController from './states/all-questions/all-questions.controller';
import SingleQuestionController from './states/single-question/single-question.controller';
import UserProfileController from './states/user-profile/user-profile.controller';

const dependencies = [
    'ui.router',
    'ngPageTitle',
    'angularMoment'
];

angular.module('app', dependencies)
    .config(RoutingConfig)

    .factory('AllQuestionsFactory', AllQuestionsFactory)
    .factory('SingleQuestionFactory', SingleQuestionFactory)
    .factory('UserProfileFactory', UserProfileFactory)

    .controller('HomeController', HomeController)
    .controller('AllQuestionsController', AllQuestionsController)
    .controller('SingleQuestionController', SingleQuestionController)
    .controller('UserProfileController', UserProfileController);