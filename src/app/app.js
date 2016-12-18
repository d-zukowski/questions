// Vendor

import 'angular';
import 'angular-ui-router';
import 'ng-page-title';
import 'angular-moment';


// App

import AllQuestionsFactory from './all-questions/all-questions.factory';
import SingleQuestionFactory from './single-question/single-question.factory';
import UserProfileFactory from './user-profile/user-profile.factory';

import MainController from './main.controller';
import AllQuestionsController from './all-questions/all-questions.controller';
import SingleQuestionController from './single-question/single-question.controller';
import UserProfileController from './user-profile/user-profile.controller';


angular.module('app', ['ui.router', 'ngPageTitle', 'angularMoment'])

    .factory('AllQuestionsFactory', AllQuestionsFactory)
    .factory('SingleQuestionFactory', SingleQuestionFactory)
    .factory('UserProfileFactory', UserProfileFactory)

    .controller('MainController', MainController)
    .controller('AllQuestionsController', AllQuestionsController)
    .controller('AllQuestionsController', AllQuestionsController)
    .controller('AllQuestionsController', AllQuestionsController);