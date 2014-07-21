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
        '<hr><p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.</p>' +
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

## Dependencies
- required:
	````ngSanitize````
- optional
	none

See `bower.json` and `index.html` in the `gh-pages` branch for a full list / more details

## Install
1. download the files
	1. Bower
		1. add `"matsuo-ng-timeline": "latest"` to your `bower.json` file then run `bower install` OR run `bower install matsuo-ng-timeline`
2. include the files in your app
	1. `ng-timeline.min.js`
	2. `ng-timeline.less` OR `ng-timeline.min.css` OR `ng-timeline.css`
3. include the module in angular (i.e. in `app.js`) - `tunguski.matsuo-ng-timeline`

See the `gh-pages` branch, files `bower.json` and `index.html` for a full example.


## Documentation
See the `ng-timeline.js` file top comments for usage examples and documentation
https://github.com/tunguski/matsuo-ng-timeline/blob/master/ng-timeline.js


## Development

1. `git checkout gh-pages`
	1. run `npm install && bower install`
	2. write your code then run `grunt`
	3. git commit your changes
2. copy over core files (.js and .css/.less for directives) to master branch
	1. `git checkout master`
	2. `git checkout gh-pages ng-timeline.js ng-timeline.min.js ng-timeline.less ng-timeline.css ng-timeline.min.css`
3. update README, CHANGELOG, bower.json, and do any other final polishing to prepare for publishing
	1. git commit changes
	2. git tag with the version number, i.e. `git tag v1.0.0`
4. create github repo and push
	1. [if remote does not already exist or is incorrect] `git remote add origin [github url]`
	2. `git push origin master --tags` (want to push master branch first so it is the default on github)
	3. `git checkout gh-pages`
	4. `git push origin gh-pages`
5. (optional) register bower component
	1. `bower register matsuo-ng-timeline [git repo url]`
