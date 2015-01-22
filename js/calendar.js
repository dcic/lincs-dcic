var mod = angular.module("calendarMod", []);

mod.controller("calendarCtrl", ["$scope", function($scope) {

    $scope.events = [];

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var getStartTime = function(start) {
        if (start.dateTime) {
            return new Date(start.dateTime);
        } else if (start.date) {
            return new Date(start.date);
        }
    };

    var allDay = function(start) {
        if (start.dateTime) {
            return false;
        }
        return true;
    }

    var getStartTimeString = function(startObj, allDay) {
        var hours = startObj.getHours(),
            minutes = startObj.getMinutes(),
            period;

        if (allDay || (hours === 0 && minutes === 0)) {
            return "";
        }

        if (hours > 12) {
            hours = hours - 12;
            period = ' p.m.';
        } else if (hours === 12) {
            period = ' p.m.';
        } else {
            period = ' a.m.';
        }

        if (minutes === 0) {
            return hours + ":00" + period;
        } else {
            return hours + ":" + minutes + period;
        }
    };

    var cleanFeed = function(feed) {
        var results = [];
        $.each(feed, function(i, evt) {
            var title = evt.summary;

            var startObj = getStartTime(evt.start);

            if (!startObj)
                return;
            if (new Date().getTime() > startObj.getTime())
                return;

            results.push({
                title: evt.summary,
                link: evt.htmlLink,
                startTime: getStartTimeString(startObj, allDay(evt.start)),
                day: startObj.getDate(),
                month: monthNames[startObj.getMonth()],
                year: startObj.getYear()
            });
        });
        return results;
    };

    var API_KEY = "AIzaSyBoFmRASxqk6MuOZTxDYF5eWA5Q8hmyflo",
        CALENDAR_ID = "dl9fj86o2ohe7o823s7jar920s%40group.calendar.google.com",
        OPTIONS = "&orderBy=startTime&singleEvents=true";

    $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/calendar/v3/calendars/" + CALENDAR_ID + "/events?key=" + API_KEY + OPTIONS,
        success: function(data) {
            $scope.$apply(function() {
                $scope.events = cleanFeed(data.items);
            });
        }
    });
}]);
