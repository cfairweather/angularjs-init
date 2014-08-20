angularjs-init
==============

angularjs-init directive for AngularJS


License
======
This code is under [WTFPL](http://www.wtfpl.net/).

About
======
This module allows developers to initialize some of their data on a rendered page (as one may do with many server backed web stacks). The data inside of this directive is parsed as JSON an automatically included on a controller's scope before the scope runs. We thereby avoid the nasty habit of global variables and pulling them into a controller manually. 


Example Usage
================

In your module, import 'angularjs-init':
        
        angular.module('test-module-angularjs-init', ['angularjs-init'])

Then on your rendered page (PHP, python, etc.):

      <script type="text/ng-template" angularjs-init>
      {
      	"users":<?=$someVariableForExample?>
      }
      </script>
      
Your data is now available in your controller. 

    .controller('UsersCtrl', ['$scope', function($scope){
      console.log($scope.users);
    }]);
