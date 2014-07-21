# Angular timeline

Provides simple angular directive for creating timeline:
````html
<ul mt-timeline ng-model="data"></ul>
````

Model for directive is array of objects describing timeline items:
````javascript
angular.module('myApp', ['mt.timeline'])
  .controller('TimelineDemoCtrl', function ($scope) {
    $scope.data = [
      {
        icon: 'glyphicon glyphicon-thumbs-up',
        badgeStyle: '',
        header: 'Mussum ipsum cacilds',
        subHeader: '<i class="glyphicon glyphicon-time"></i> 3 hours ago via Twitter',
        body: '<p>Mussum ipsum cacilds, vidis litro abertis. </p>' +
        '<hr><div><a href="#" class="btn btn-primary">Download</a></div>'
      }, {
        icon: 'glyphicon glyphicon-floppy-disk',
        badgeStyle: 'warning',
        header: 'Paisis, filhis, espiritis santis',
        subHeader: '<i class="glyphicon glyphicon-time"></i> 5 hours ago via Twitter',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' +
        '<hr><p>At vero eos et accusamus et iusto odio dignissimos ducimus.</p>' +
        '<hr><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque.</p>' +
        '<hr><p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut.</p>'
      }, {
        icon: 'glyphicon glyphicon-credit-card',
        badgeStyle: 'danger',
        header: 'Consetis adipiscings elitis',
        subHeader: '<i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter',
        body: '<p>Sed ut perspiciatis unde omnis iste natus error sit.</p>'
      }
    ];
  });
````

## Demo
http://tunguski.github.io/matsuo-ng-timeline/

See `bower.json` and `index.html` in the `gh-pages` branch for a full list / more details

## Install

````bower install matsuo-ng-timeline````

Add ````timeline.css```` and ````timeline.js```` to your ````index.html````.

Add dependency to timeline module in angular: ````mt.timeline````.

See the `gh-pages` branch, files `bower.json` and `index.html` for a full example.
