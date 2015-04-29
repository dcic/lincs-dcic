var mod = angular.module('edsrappMod', []);

mod.controller('edsrappCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.formData = {
        firstName: '',
        lastName: '',
        institution: '',
        department: '',
        email: '',
        telephone: '',
        projectTitle: '',
        startDate: '',
        endDate: ''
    };

    $('#startDate').next().datepicker({
        onSelect: function(date) {
            $scope.formData.startDate = date;
        }
    });

    $('#endDate').next().datepicker({
        onSelect: function(date) {
            $scope.formData.endDate = date;
        }
    });

    var getAlert = function(title, msg) {
        return $('<div></div>').dialog({
            buttons: {
                'Ok': function() {
                    $(this).remove();
                }
            },
            title: title,
            modal: true
        }).text(msg);
    };

    // See here for details: 
    // http://stackoverflow.com/q/46155/1830334
    var isValidEmail = function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };

    var isValidInput = function() {
        var invalidInput = false,
            invalidEmail = false,
            $fileUpload = $('#fileUpload');

        _.each($scope.formData, function(val, key) {
            var $el = $('#' + key);
            if (val === '') {
                $el.addClass('highlight');
                invalidInput = true;
            } else if (key === 'email' && !isValidEmail(val)) {
                $el.addClass('highlight');
                invalidEmail = true;
            } else {
                $el.removeClass('highlight');
            }
        });

        if ($fileUpload.find('input').first().val() === '') {
            $fileUpload.children().first().addClass('highlight');
            invalidInput = true;
        } else {
            $fileUpload.children().first().removeClass('highlight');
        }

        if (invalidInput) {
            getAlert('Alert', 'Please fill out all fields.');
            return false;
        } else if (invalidEmail) {
            getAlert('Alert', 'Please enter a valid email address.');
            return false;
        } else {
            return true;
        }
    }

    $scope.submit = function() {
        if (isValidInput()) {
            var $forms = $('form'),
                formData = new FormData($forms[0]);
            _.each($scope.formData, function(val, key) {
                formData.append(key, val);
            });

            $.ajax({
                url: '/api/',
                type: 'POST',
                data: formData,
                // Tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: false,
                processData: false,
                success: function(data, textStatus, jqXHR) {
                    getAlert('Success', 'Your application was accepted. Thank you!');
                },
                error: function(data) {
                    getAlert('Error', 'Unknown error. Please contact Sherry Jenkins at sherry.jenkins@mssm.edu');
                }
            });
        }
    };
}]);
