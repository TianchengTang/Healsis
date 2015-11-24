/**
 * Created by tiancheng on 10/24/15.
 */

angular.module('healsis.logoutCtrl', ['healsis.dataServices', 'healsis.sharedServices'])
    .controller('LogoutCtrl', function ($scope, dataService, sharedService) {

        console.log('-- LogoutCtrl');
        sharedService.deleteCookie("token-ca");
        window.location.href = "#/login";
    });