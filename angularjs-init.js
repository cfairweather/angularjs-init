//Created by cfairweather (https://www.github.com/cfairweather/)

//--------------------------------------------------------------------
/*           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                   Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.*/


//--------------------------------------------------------------------
/*             LICENCE PUBLIQUE RIEN À BRANLER
                     Version 1, Mars 2009

Copyright (C) 2009 Sam Hocevar

La copie et la distribution de copies exactes de cette licence sont
autorisées, et toute modification est permise à condition de changer
le nom de la licence.

        CONDITIONS DE COPIE, DISTRIBUTON ET MODIFICATION
              DE LA LICENCE PUBLIQUE RIEN À BRANLER

 0. Faites ce que vous voulez, j’en ai RIEN À BRANLER.
*/
angular.module('angularjs-init', []).directive('angularjsInit', function(){
	return {
		restrict: 'A',
		link:function(scope, element, attrs){
			var initData = JSON.parse(element[0].innerHTML);
			 for(var name in initData){
		        scope[name] = initData[name];
		    }
		}
	};
});
