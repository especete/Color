// JavaScript Document
	
coco.directive('randomizer', function(){
		return {
			templateUrl:'state/ui-random.html'
		}
	})
	.directive('userinput', function(){
		return {
			templateUrl:'state/ui-userinput.html'
		}
	})
	.directive('variations', function(){
		return {
			templateUrl:function(elem,attr){
				
				return 'state/svg-' + attr.name + '.html'
			}
		}
	})