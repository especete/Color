// JavaScript Document

coco.controller('appCntr', function($scope){
		
		$scope.navigationInput = 1;
		$scope.getNTC = ntc.names;

		function randomColor(){
			$scope.setByUser = (function(h){return '#000000'.substr(0,7-h.leght)+h})((~~(Math.random()*(1<<24))).toString(16));
		};
			randomColor();
		function setColor(){
			$scope.colorForTXT = tinycolor.mostReadable($scope.setByUser,['#000000','#fffffe']).toHexString();
	
			$scope.colorSetAlpha1 = tinycolor($scope.setByUser).toHexString();
			$scope.colorSetAlpha2 = tinycolor($scope.setByUser).complement().spin(80).darken(37).desaturate(10).toHexString();
			$scope.colorSetAlpha3 = tinycolor($scope.setByUser).complement().spin(100).brighten(10).saturate(10).toHexString();
			$scope.colorSetAlpha4 = tinycolor($scope.setByUser).complement().spin(10).saturate(70).toHexString();
			$scope.colorSetAlpha5 = tinycolor($scope.setByUser).complement().saturate(40).darken(7).toHexString();
			
		};
		setColor();
		
		$scope.change = function(){
			setColor();
		}
		$scope.update = function(){
			randomColor();
			setColor();
		}
		
	})
