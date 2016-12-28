function VotingDirective () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            upVotes: '@',
            downVotes: '@'
        },
        templateUrl: 'app/shared/voting/voting.view.html',        
        link: (scope, element, attrs) => {

            scope.voteUp = () => {
                scope.upVotes = parseFloat(scope.upVotes) + 1;
                
                if ((scope.upVotes - scope.downVotes) > (attrs.upVotes - attrs.downVotes)) {
                    scope.disableVoteUp = true;
                    scope.disableVoteDown = false;
                } else if ((scope.upVotes - scope.downVotes) == (attrs.upVotes - attrs.downVotes)) {
                    scope.disableVoteUp = false;
                    scope.disableVoteDown = false;
                } else {
                    scope.disableVoteUp = false;
                    scope.disableVoteDown = true;
                }
                
            };

            scope.voteDown = () => {
                scope.downVotes = parseFloat(scope.downVotes) + 1;

                if ((scope.upVotes - scope.downVotes) < (attrs.upVotes - attrs.downVotes)) {
                    scope.disableVoteUp = false;
                    scope.disableVoteDown = true;
                } else if ((scope.upVotes - scope.downVotes) == (attrs.upVotes - attrs.downVotes)) {
                    scope.disableVoteUp = false;
                    scope.disableVoteDown = false;
                } else {
                    scope.disableVoteUp = true;
                    scope.disableVoteDown = false;
                }                

            };  
               
        }
    }
}

export default VotingDirective;