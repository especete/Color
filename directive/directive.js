// JavaScript Document

			//restrict:'E',
			//scope:false,
			//transclude:true,
			//template:'',
			//templateUrl:''
			
coco.directive('setcolor', function(){
		return {
			templateUrl:'state/setcolor.html'
		}
	})
	.directive('updatecolor', function(){
		return {
			templateUrl:'state/updatecolor.html'
		}
	})
	.directive('navigation', function(){
		return {
			templateUrl:'state/navigation.html'
		}
	})
	.directive('navigationdesign', function(){
		return {
			templateUrl:function(elem,attr){
				
				return 'state/navigation-' + attr.number + '.html'
			}
		}
	})
	.directive('svge', function(){
		return {
			templateUrl:'state/svgview.html'
		}
	})
	.directive('listntc', function(){
		return {
			templateUrl:'state/ntc.html'
		}
	})
	