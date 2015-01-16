// http://www.google.com/calendar/feeds/dl9fj86o2ohe7o823s7jar920s@group.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&futureevents=true&alt=json

var mod = angular.module("calendarMod", []);

mod.controller("calendarCtrl", ["$scope", function($scope) {
    $scope.events = [
        {
            title: 'Reading: Tincture of Humor',
            month: 'Jan',
            day: '15',
            startTime: '5:30 p.m.',
            endTime: '7:00 p.m.',
            location: 'Stanford University'
        },
        {
            title: 'King\'s Institute Open House',
            month: 'Jan',
            day: '16',
            startTime: '3:00 p.m.',
            endTime: '4:00 p.m.',
            location: 'Stanford University'
        }
    ]
}]);
