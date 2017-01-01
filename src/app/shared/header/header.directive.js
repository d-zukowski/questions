function HeaderDirective () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/shared/header/header.view.html',
        link: (scope, element, attrs) => {

            // Init settings

            scope.loggedUserID = 1;
            scope.sortBy = 'id';
            scope.filterBy = {
                question: '',
                author: ''
            };
            scope.searchData = {
                query: ''
            };

            // Filter

            scope.$watch('filterBy.author', () => {
                if (scope.filterBy.author == scope.loggedUserID) {
                    scope.questionsLimit = '';
                } else {
                    scope.questionsLimit = 3;
                }
            })

            // Sort

            scope.sortQuestions = (type) => {

                switch (type) {
                    case 'recent': 
                        scope.sortBy = 'id';
                        break
                    case 'hot':
                        scope.sortBy = 'moreActivitiesLength'
                        scope.sortByReverse = true;
                        break
                    default: 
                        scope.sortBy = 'id';               
                }

            }

            // Search

            scope.search = () => {
                scope.filterBy.question = scope.searchData.query;
            }; 

        }       
    }
};

export default HeaderDirective;