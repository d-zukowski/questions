// Vendor

import 'angular';
import 'angular-ui-router';
import 'ng-page-title';
import 'angular-moment';


// Dependencies

import RoutingConfig from './routes.config';

import UtilsFactory from './utils/utils.factory';
import HomeFactory from './components/home/home.factory';
import AllQuestionsFactory from './components/all-questions/all-questions.factory';
import SingleQuestionFactory from './components/single-question/single-question.factory';

import HomeController from './components/home/home.controller';
import AllQuestionsController from './components/all-questions/all-questions.controller';
import SingleQuestionController from './components/single-question/single-question.controller';

import HeaderDirective from './shared/header/header.directive';
import UserProfileDirective from './shared/user-profile/user-profile.directive';
import VotingDirective from './shared/voting/voting.directive';

const appDependencies = [
    'ui.router',
    'ngPageTitle',
    'angularMoment'
];

// App

angular.module('app', appDependencies)
    .config(RoutingConfig)

    .factory('UtilsFactory', UtilsFactory)
    .factory('HomeFactory', HomeFactory)
    .factory('AllQuestionsFactory', AllQuestionsFactory)
    .factory('SingleQuestionFactory', SingleQuestionFactory)

    .controller('HomeController', HomeController)
    .controller('AllQuestionsController', AllQuestionsController)
    .controller('SingleQuestionController', SingleQuestionController)

    .directive('pageHeader', HeaderDirective)
    .directive('userProfile', UserProfileDirective)
    .directive('voting', VotingDirective);