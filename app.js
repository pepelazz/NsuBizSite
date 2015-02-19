(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./util');

require('./loader');

require('./filters');

require('./ng-app');



},{"./filters":"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/filters.coffee","./loader":"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/loader.coffee","./ng-app":"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/ng-app.coffee","./util":"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/filters.coffee":[function(require,module,exports){
var module;

module = angular.module('filters', []);

module.filter('points', (function() {
  return (function(num) {
    if (num === '') {
      return 0;
    } else {
      return num;
    }
  });
}));



},{}],"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/loader.coffee":[function(require,module,exports){
$(function() {
  $('#hideAll .loader').css({
    marginTop: window.innerHeight * 0.4
  });
  return $(window).load(function() {
    return $('#hideAll').css({
      display: 'none'
    });
  });
});



},{}],"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/ng-app.coffee":[function(require,module,exports){
var module;

module = angular.module('app', ['filters']);

module.controller('main', [
  '$scope', '$http', '$location', '$timeout', (function($scope, $http, $location, $timeout) {
    var spreadsheet;
    spreadsheet = 'https://spreadsheets.google.com/feeds/list/1LjQN1-P3qRBzkn3v3QRtnEEhjWPANR5WTmkpuMkY0dQ/od6/public/values?alt=json';
    $scope.data = [];
    $http.get(spreadsheet).success(function(data) {
      data = _.map(data.feed.entry, (function(item) {
        var newItem;
        newItem = {
          title: item.gsx$stud.$t,
          avatar: item.gsx$avatar.$t,
          points: +item.gsx$points.$t + +item.gsx$task.$t
        };
        return newItem;
      }));
      $scope.data = _.sortBy(data, function(item) {
        return item.points * -1;
      });
      return $scope.rowPosition = (function(index) {
        if (index < 51) {
          return 'group-first';
        }
        if (index >= 51 && index <= 90) {
          return 'group-second';
        }
        if (index > 90) {
          return 'group-third';
        }
      });
    });
  })
]);



},{}],"/Users/Trikster/static_sites/NsuBiz/_NsuBiz/src/javascript/util.coffee":[function(require,module,exports){




},{}]},{},["./src/javascript/app.coffee"]);
