
angular.module('mt.timeline', ['ngSanitize'])
    .directive('mtTimeline', function ($sanitize) {
      return {
        replace: true,
        scope: {
          model: '=ngModel',
          fileName: '@fileName'
        },
        template:
          '<ul class="timeline"><li ng-repeat="item in model" ng-class="$even ? \'\' : \'timeline-inverted\'">' +
            '<div class="timeline-badge" ng-class="item.badgeStyle"><i ng-class="item.icon"></i></div>' +
              '<div class="timeline-panel">' +
                '<div class="timeline-heading">' +
                '<h4 class="timeline-title">{{ item.header }}</h4>' +
                '<p><small class="text-muted" ng-bind-html="$sanitize(item.subHeader)"></small></p>' +
              '</div>' +
              '<div class="timeline-body" ng-bind-html="$sanitize(item.body)"></div>' +
            '</div>' +
          '</li></ul>',

        link: function (scope, iElement, iAttrs) {
          scope.$sanitize = $sanitize;
        }
      };
    });
