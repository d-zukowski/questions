function HomeFactory (UtilsFactory, moment) {
    'ngInject'

    let getUsers = () => {
        return UtilsFactory.ajax('../../../data/users.json');
    };

    let dateToText = (date) => {

        let diff = moment(moment().diff(moment(date))).format('D');

        switch (diff) {
            case 0: 
                return 'today'
                break;
            case 1:
                return 'yesterday'
                break;
            case 2:
                return 'two days'
                break;                
            default:
                return diff + ' days'
        }

    };

    let toUrl = (string) => {
        if (string) {
            return string
                .toLowerCase()
                .replace(/ /g,'-')
                .replace(/[^\w-]+/g,'');
        }
    };

    let modal = {
        open: () => {
            document.querySelector('.modal').classList.remove('hide');
            document.querySelector('body').classList.add('no-scroll'); 
            document.querySelector('.user-profile').scrollTop = 0;
        },
        close: () => {
            document.querySelector('.modal').classList.add('hide');
            document.querySelector('body').classList.remove('no-scroll');
        }
    };

    return {
        getUsers: getUsers,
        dateToText: dateToText,
        toUrl: toUrl,
        modal: modal
    }

};

export default HomeFactory;