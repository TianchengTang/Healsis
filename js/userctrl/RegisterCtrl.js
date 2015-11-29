/**
 * Created by tiancheng on 10/29/2015.
 */
angular.module('healsis.registerCtrl', ['healsis.dataServices', 'healsis.sharedServices'])
    .controller('RegisterCtrl', function ($scope, dataService, sharedService) {

        console.log('-- RegisterCtrl');

        //*********************
        //  data
        //*********************
        var default_op = {id: 0, name: "not select"};
        $scope.registerData = {
            name: "",
            cellphone: '',
            password: '',
            errorInfo: '',
            verification: "",
            applyLetter: "",
            Province: default_op,
            agreeMe: false
        };

        $scope.Provinces = [default_op];
        $scope.Schools = [default_op];

        //*********************
        // init
        //*********************
        $('#dash-menu').fadeOut();
        $('#registerModal').modal({backdrop: 'static'});

        dataService.getProvinces(function (data, status) {
            if (data.result === "success") {
                data.provinces.push(default_op);
                $scope.Provinces = data.provinces;
                $scope.registerData.Province = default_op;
                $scope.$digest();
            } else {
                alert(data.message);
            }
        });

        //*********************
        //  method
        //*********************

        // register
        $scope.registerAmbassador = function () {
            console.log("registerAmbassador ...");
            $scope.showSpinner = true;
            if ($scope.registerData.cellphone.match(/\d/g) === null || $scope.registerData.cellphone.match(/\d/g).length !== 11) {
                $scope.registerData.errorInfo = 'please enter the right verification code';
                $scope.showSpinner = false;
                $scope.$digest();
            } else if ($scope.registerData.School === default_op) {
                $scope.registerData.errorInfo = "please select region";
                $scope.showSpinner = false;
                $scope.$digest();
            } else {
                dataService.registerAmbassador($scope.registerData.name, $scope.registerData.cellphone, $scope.registerData.password,
                    $scope.registerData.School.id, $scope.registerData.applyLetter, $scope.registerData.verification, function (data, status) {
                        if (data.result == "success") {
                            $scope.showSpinner = false;
                            $('#registerModal').modal('hide');
                            $('.modal-backdrop').modal('hide');
                            setTimeout(function () {
                                window.location.href = '#/login'
                            }, 1000);
                        } else {
                            $scope.registerData.errorInfo = data.message;
                        }
                    });
            }
        };

        // verification
        $scope.sendMessage = function (phone) {
            console.log("sendMessage ...");
            if (phone.match(/\d/g) === null || phone.match(/\d/g).length !== 11) {
                $scope.registerData.errorInfo = 'verification fialed';
                $scope.$digest();
                // alert($scope.loginData.errorInfo);
                return;
            } else {
                dataService.sendMessage(phone, function (data, status) {
                    if (data.result === "success") {
                        alert(data.message);
                    } else {
                        alert(data.message);
                    }
                });
            }
        };

        //
        $scope.onProvinceChanged = function () {
            console.log("onProvinceChanged ...");

            dataService.getSchools($scope.registerData.Province.id, function (data, status) {
                if (data.result === "success") {
                    data.schools.push(default_op);
                    $scope.Schools = data.schools;
                    $scope.registerData.School = default_op;
                    $scope.$digest();
                } else {
                    alert(data.message);
                }
            });
        };

    });