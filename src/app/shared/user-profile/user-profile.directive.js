function UserProfileDirective () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/shared/user-profile/user-profile.view.html',
        link: () => {
            document.querySelector('.user-profile').addEventListener('click', (e) => {
                e.stopPropagation();
            }, false); 
        }        
    }
};

export default UserProfileDirective;