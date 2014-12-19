// JavaScript Document

coco.controller('appCntr', function($scope){
	
	function setRandom(){
		
		$scope.randomizer = ( function(h){return '#000000'.substr(0,7-h.length)+h})((~~(Math.random()*(1<<24))).toString(16) );
	};
	setRandom();
	function setColor(){
		
//		$scope.tc = tinycolor($scope.randomizer).toRgbString();
//		$scope.ch = chroma($scope.randomizer).css();
//		$scope.ch = chroma.scale([$scope.t0,$scope.t0]).mode('hsl')(.5).css();
//		$scope.pl = Please.make_color({ colors_returned:5, base_color:$scope.randomizer, format:'rgb-string' });
//		
//		$scope.tc2 = tinycolor($scope.randomizer).toHsv();
//		$scope.pl2 = Please.make_scheme({h:$scope.tc2.h, s:$scope.tc2.s, v:$scope.tc2.v},{ scheme_type:'double-complement', format:'rgb-string' });
//		
//		$scope.cs = new ColorScheme;
//		
//		$scope.cs2 = $scope.cs.from_hue($scope.tc2.h).scheme('contrast').variation('pale').colors();

		$scope.cs = new ColorScheme;
		$scope.setHSV = tinycolor($scope.randomizer).toHsv();
		
		
		// ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== Set.
		
		// Base.
		$scope.setRandom = {
			color1: tinycolor($scope.randomizer).toRgbString()
		};
		
		// CS
		// CS:Analogous, 12 colors.
		$scope.getCSAnDe = $scope.cs.from_hue($scope.setHSV.h).scheme('analogic').variation('default').colors();
		$scope.setCSAnDe = {
			color1: tinycolor($scope.getCSAnDe[0]).toRgbString(),
			color2: tinycolor($scope.getCSAnDe[1]).toRgbString(),
			color3: tinycolor($scope.getCSAnDe[2]).toRgbString(),
			color4: tinycolor($scope.getCSAnDe[3]).toRgbString(),
			color5: tinycolor($scope.getCSAnDe[4]).toRgbString(),
			color6: tinycolor($scope.getCSAnDe[5]).toRgbString(),
			color7: tinycolor($scope.getCSAnDe[6]).toRgbString(),
			color8: tinycolor($scope.getCSAnDe[7]).toRgbString(),
			color9: tinycolor($scope.getCSAnDe[8]).toRgbString(),
			color10: tinycolor($scope.getCSAnDe[9]).toRgbString(),
			color11: tinycolor($scope.getCSAnDe[10]).toRgbString(),
			color12: tinycolor($scope.getCSAnDe[11]).toRgbString()
		};
		$scope.getCSAnHa = $scope.cs.from_hue($scope.setHSV.h).scheme('analogic').variation('hard').colors();
		$scope.setCSAnHa = {
			color1: tinycolor($scope.getCSAnHa[0]).toRgbString(),
			color2: tinycolor($scope.getCSAnHa[1]).toRgbString(),
			color3: tinycolor($scope.getCSAnHa[2]).toRgbString(),
			color4: tinycolor($scope.getCSAnHa[3]).toRgbString(),
			color5: tinycolor($scope.getCSAnHa[4]).toRgbString(),
			color6: tinycolor($scope.getCSAnHa[5]).toRgbString(),
			color7: tinycolor($scope.getCSAnHa[6]).toRgbString(),
			color8: tinycolor($scope.getCSAnHa[7]).toRgbString(),
			color9: tinycolor($scope.getCSAnHa[8]).toRgbString(),
			color10: tinycolor($scope.getCSAnHa[9]).toRgbString(),
			color11: tinycolor($scope.getCSAnHa[10]).toRgbString(),
			color12: tinycolor($scope.getCSAnHa[11]).toRgbString()
		};
		$scope.getCSAnLi = $scope.cs.from_hue($scope.setHSV.h).scheme('analogic').variation('light').colors();
		$scope.setCSAnLi = {
			color1: tinycolor($scope.getCSAnLi[0]).toRgbString(),
			color2: tinycolor($scope.getCSAnLi[1]).toRgbString(),
			color3: tinycolor($scope.getCSAnLi[2]).toRgbString(),
			color4: tinycolor($scope.getCSAnLi[3]).toRgbString(),
			color5: tinycolor($scope.getCSAnLi[4]).toRgbString(),
			color6: tinycolor($scope.getCSAnLi[5]).toRgbString(),
			color7: tinycolor($scope.getCSAnLi[6]).toRgbString(),
			color8: tinycolor($scope.getCSAnLi[7]).toRgbString(),
			color9: tinycolor($scope.getCSAnLi[8]).toRgbString(),
			color10: tinycolor($scope.getCSAnLi[9]).toRgbString(),
			color11: tinycolor($scope.getCSAnLi[10]).toRgbString(),
			color12: tinycolor($scope.getCSAnLi[11]).toRgbString()
		};
		$scope.getCSAnPl = $scope.cs.from_hue($scope.setHSV.h).scheme('analogic').variation('pale').colors();
		$scope.setCSAnPl = {
			color1: tinycolor($scope.getCSAnPl[0]).toRgbString(),
			color2: tinycolor($scope.getCSAnPl[1]).toRgbString(),
			color3: tinycolor($scope.getCSAnPl[2]).toRgbString(),
			color4: tinycolor($scope.getCSAnPl[3]).toRgbString(),
			color5: tinycolor($scope.getCSAnPl[4]).toRgbString(),
			color6: tinycolor($scope.getCSAnPl[5]).toRgbString(),
			color7: tinycolor($scope.getCSAnPl[6]).toRgbString(),
			color8: tinycolor($scope.getCSAnPl[7]).toRgbString(),
			color9: tinycolor($scope.getCSAnPl[8]).toRgbString(),
			color10: tinycolor($scope.getCSAnPl[9]).toRgbString(),
			color11: tinycolor($scope.getCSAnPl[10]).toRgbString(),
			color12: tinycolor($scope.getCSAnPl[11]).toRgbString()
		};
		$scope.getCSAnPs = $scope.cs.from_hue($scope.setHSV.h).scheme('analogic').variation('pastel').colors();
		$scope.setCSAnPs = {
			color1: tinycolor($scope.getCSAnPs[0]).toRgbString(),
			color2: tinycolor($scope.getCSAnPs[1]).toRgbString(),
			color3: tinycolor($scope.getCSAnPs[2]).toRgbString(),
			color4: tinycolor($scope.getCSAnPs[3]).toRgbString(),
			color5: tinycolor($scope.getCSAnPs[4]).toRgbString(),
			color6: tinycolor($scope.getCSAnPs[5]).toRgbString(),
			color7: tinycolor($scope.getCSAnPs[6]).toRgbString(),
			color8: tinycolor($scope.getCSAnPs[7]).toRgbString(),
			color9: tinycolor($scope.getCSAnPs[8]).toRgbString(),
			color10: tinycolor($scope.getCSAnPs[9]).toRgbString(),
			color11: tinycolor($scope.getCSAnPs[10]).toRgbString(),
			color12: tinycolor($scope.getCSAnPs[11]).toRgbString()
		};
		$scope.getCSAnSo = $scope.cs.from_hue($scope.setHSV.h).scheme('analogic').variation('soft').colors();
		$scope.setCSAnSo = {
			color1: tinycolor($scope.getCSAnSo[0]).toRgbString(),
			color2: tinycolor($scope.getCSAnSo[1]).toRgbString(),
			color3: tinycolor($scope.getCSAnSo[2]).toRgbString(),
			color4: tinycolor($scope.getCSAnSo[3]).toRgbString(),
			color5: tinycolor($scope.getCSAnSo[4]).toRgbString(),
			color6: tinycolor($scope.getCSAnSo[5]).toRgbString(),
			color7: tinycolor($scope.getCSAnSo[6]).toRgbString(),
			color8: tinycolor($scope.getCSAnSo[7]).toRgbString(),
			color9: tinycolor($scope.getCSAnSo[8]).toRgbString(),
			color10: tinycolor($scope.getCSAnSo[9]).toRgbString(),
			color11: tinycolor($scope.getCSAnSo[10]).toRgbString(),
			color12: tinycolor($scope.getCSAnSo[11]).toRgbString()
		};
		
		// CS:Contrast, 8 colors.
		$scope.getCSCoDe = $scope.cs.from_hue($scope.setHSV.h).scheme('contrast').variation('default').colors();
		$scope.setCSCoDe = {
			color1: tinycolor($scope.getCSCoDe[0]).toRgbString(),
			color2: tinycolor($scope.getCSCoDe[1]).toRgbString(),
			color3: tinycolor($scope.getCSCoDe[2]).toRgbString(),
			color4: tinycolor($scope.getCSCoDe[3]).toRgbString(),
			color5: tinycolor($scope.getCSCoDe[4]).toRgbString(),
			color6: tinycolor($scope.getCSCoDe[5]).toRgbString(),
			color7: tinycolor($scope.getCSCoDe[6]).toRgbString(),
			color8: tinycolor($scope.getCSCoDe[7]).toRgbString()
		};
		$scope.getCSCoHa = $scope.cs.from_hue($scope.setHSV.h).scheme('contrast').variation('hard').colors();
		$scope.setCSCoHa = {
			color1: tinycolor($scope.getCSCoHa[0]).toRgbString(),
			color2: tinycolor($scope.getCSCoHa[1]).toRgbString(),
			color3: tinycolor($scope.getCSCoHa[2]).toRgbString(),
			color4: tinycolor($scope.getCSCoHa[3]).toRgbString(),
			color5: tinycolor($scope.getCSCoHa[4]).toRgbString(),
			color6: tinycolor($scope.getCSCoHa[5]).toRgbString(),
			color7: tinycolor($scope.getCSCoHa[6]).toRgbString(),
			color8: tinycolor($scope.getCSCoHa[7]).toRgbString()
		};
		$scope.getCSCoLi = $scope.cs.from_hue($scope.setHSV.h).scheme('contrast').variation('light').colors();
		$scope.setCSCoLi = {
			color1: tinycolor($scope.getCSCoLi[0]).toRgbString(),
			color2: tinycolor($scope.getCSCoLi[1]).toRgbString(),
			color3: tinycolor($scope.getCSCoLi[2]).toRgbString(),
			color4: tinycolor($scope.getCSCoLi[3]).toRgbString(),
			color5: tinycolor($scope.getCSCoLi[4]).toRgbString(),
			color6: tinycolor($scope.getCSCoLi[5]).toRgbString(),
			color7: tinycolor($scope.getCSCoLi[6]).toRgbString(),
			color8: tinycolor($scope.getCSCoLi[7]).toRgbString()
		};
		$scope.getCSCoPl = $scope.cs.from_hue($scope.setHSV.h).scheme('contrast').variation('pale').colors();
		$scope.setCSCoPl = {
			color1: tinycolor($scope.getCSCoPl[0]).toRgbString(),
			color2: tinycolor($scope.getCSCoPl[1]).toRgbString(),
			color3: tinycolor($scope.getCSCoPl[2]).toRgbString(),
			color4: tinycolor($scope.getCSCoPl[3]).toRgbString(),
			color5: tinycolor($scope.getCSCoPl[4]).toRgbString(),
			color6: tinycolor($scope.getCSCoPl[5]).toRgbString(),
			color7: tinycolor($scope.getCSCoPl[6]).toRgbString(),
			color8: tinycolor($scope.getCSCoPl[7]).toRgbString()
		};
		$scope.getCSCoPs = $scope.cs.from_hue($scope.setHSV.h).scheme('contrast').variation('pastel').colors();
		$scope.setCSCoPs = {
			color1: tinycolor($scope.getCSCoPs[0]).toRgbString(),
			color2: tinycolor($scope.getCSCoPs[1]).toRgbString(),
			color3: tinycolor($scope.getCSCoPs[2]).toRgbString(),
			color4: tinycolor($scope.getCSCoPs[3]).toRgbString(),
			color5: tinycolor($scope.getCSCoPs[4]).toRgbString(),
			color6: tinycolor($scope.getCSCoPs[5]).toRgbString(),
			color7: tinycolor($scope.getCSCoPs[6]).toRgbString(),
			color8: tinycolor($scope.getCSCoPs[7]).toRgbString()
		};
		$scope.getCSCoSo = $scope.cs.from_hue($scope.setHSV.h).scheme('contrast').variation('soft').colors();
		$scope.setCSCoSo = {
			color1: tinycolor($scope.getCSCoSo[0]).toRgbString(),
			color2: tinycolor($scope.getCSCoSo[1]).toRgbString(),
			color3: tinycolor($scope.getCSCoSo[2]).toRgbString(),
			color4: tinycolor($scope.getCSCoSo[3]).toRgbString(),
			color5: tinycolor($scope.getCSCoSo[4]).toRgbString(),
			color6: tinycolor($scope.getCSCoSo[5]).toRgbString(),
			color7: tinycolor($scope.getCSCoSo[6]).toRgbString(),
			color8: tinycolor($scope.getCSCoSo[7]).toRgbString()
		};
		
		// CS:Monochromatic, 4 colors.
		$scope.getCSMoDe = $scope.cs.from_hue($scope.setHSV.h).scheme('mono').variation('default').colors();
		$scope.setCSMoDe = {
			color1: tinycolor($scope.getCSMoDe[0]).toRgbString(),
			color2: tinycolor($scope.getCSMoDe[1]).toRgbString(),
			color3: tinycolor($scope.getCSMoDe[2]).toRgbString(),
			color4: tinycolor($scope.getCSMoDe[3]).toRgbString()
		};
		$scope.getCSMoHa = $scope.cs.from_hue($scope.setHSV.h).scheme('mono').variation('hard').colors();
		$scope.setCSMoHa = {
			color1: tinycolor($scope.getCSMoHa[0]).toRgbString(),
			color2: tinycolor($scope.getCSMoHa[1]).toRgbString(),
			color3: tinycolor($scope.getCSMoHa[2]).toRgbString(),
			color4: tinycolor($scope.getCSMoHa[3]).toRgbString()
		};
		$scope.getCSMoLi = $scope.cs.from_hue($scope.setHSV.h).scheme('mono').variation('light').colors();
		$scope.setCSMoLi = {
			color1: tinycolor($scope.getCSMoLi[0]).toRgbString(),
			color2: tinycolor($scope.getCSMoLi[1]).toRgbString(),
			color3: tinycolor($scope.getCSMoLi[2]).toRgbString(),
			color4: tinycolor($scope.getCSMoLi[3]).toRgbString()
		};
		$scope.getCSMoPl = $scope.cs.from_hue($scope.setHSV.h).scheme('mono').variation('pale').colors();
		$scope.setCSMoPl = {
			color1: tinycolor($scope.getCSMoPl[0]).toRgbString(),
			color2: tinycolor($scope.getCSMoPl[1]).toRgbString(),
			color3: tinycolor($scope.getCSMoPl[2]).toRgbString(),
			color4: tinycolor($scope.getCSMoPl[3]).toRgbString()
		};
		$scope.getCSMoPs = $scope.cs.from_hue($scope.setHSV.h).scheme('mono').variation('pastel').colors();
		$scope.setCSMoPs = {
			color1: tinycolor($scope.getCSMoPs[0]).toRgbString(),
			color2: tinycolor($scope.getCSMoPs[1]).toRgbString(),
			color3: tinycolor($scope.getCSMoPs[2]).toRgbString(),
			color4: tinycolor($scope.getCSMoPs[3]).toRgbString()
		};
		$scope.getCSMoSo = $scope.cs.from_hue($scope.setHSV.h).scheme('mono').variation('soft').colors();
		$scope.setCSMoSo = {
			color1: tinycolor($scope.getCSMoSo[0]).toRgbString(),
			color2: tinycolor($scope.getCSMoSo[1]).toRgbString(),
			color3: tinycolor($scope.getCSMoSo[2]).toRgbString(),
			color4: tinycolor($scope.getCSMoSo[3]).toRgbString()
		};
		
		// CS:Tetrad, 16 colors.
		$scope.getCSTeDe = $scope.cs.from_hue($scope.setHSV.h).scheme('tetrade').variation('default').colors();
		$scope.setCSTeDe = {
			color1: tinycolor($scope.getCSTeDe[0]).toRgbString(),
			color2: tinycolor($scope.getCSTeDe[1]).toRgbString(),
			color3: tinycolor($scope.getCSTeDe[2]).toRgbString(),
			color4: tinycolor($scope.getCSTeDe[3]).toRgbString(),
			color5: tinycolor($scope.getCSTeDe[4]).toRgbString(),
			color6: tinycolor($scope.getCSTeDe[5]).toRgbString(),
			color7: tinycolor($scope.getCSTeDe[6]).toRgbString(),
			color8: tinycolor($scope.getCSTeDe[7]).toRgbString(),
			color9: tinycolor($scope.getCSTeDe[8]).toRgbString(),
			color10: tinycolor($scope.getCSTeDe[9]).toRgbString(),
			color11: tinycolor($scope.getCSTeDe[10]).toRgbString(),
			color12: tinycolor($scope.getCSTeDe[11]).toRgbString(),
			color13: tinycolor($scope.getCSTeDe[12]).toRgbString(),
			color14: tinycolor($scope.getCSTeDe[13]).toRgbString(),
			color15: tinycolor($scope.getCSTeDe[14]).toRgbString(),
			color16: tinycolor($scope.getCSTeDe[15]).toRgbString()
		};
		$scope.getCSTeHa = $scope.cs.from_hue($scope.setHSV.h).scheme('tetrade').variation('hard').colors();
		$scope.setCSTeHa = {
			color1: tinycolor($scope.getCSTeHa[0]).toRgbString(),
			color2: tinycolor($scope.getCSTeHa[1]).toRgbString(),
			color3: tinycolor($scope.getCSTeHa[2]).toRgbString(),
			color4: tinycolor($scope.getCSTeHa[3]).toRgbString(),
			color5: tinycolor($scope.getCSTeHa[4]).toRgbString(),
			color6: tinycolor($scope.getCSTeHa[5]).toRgbString(),
			color7: tinycolor($scope.getCSTeHa[6]).toRgbString(),
			color8: tinycolor($scope.getCSTeHa[7]).toRgbString(),
			color9: tinycolor($scope.getCSTeHa[8]).toRgbString(),
			color10: tinycolor($scope.getCSTeHa[9]).toRgbString(),
			color11: tinycolor($scope.getCSTeHa[10]).toRgbString(),
			color12: tinycolor($scope.getCSTeHa[11]).toRgbString(),
			color13: tinycolor($scope.getCSTeHa[12]).toRgbString(),
			color14: tinycolor($scope.getCSTeHa[13]).toRgbString(),
			color15: tinycolor($scope.getCSTeHa[14]).toRgbString(),
			color16: tinycolor($scope.getCSTeHa[15]).toRgbString()
		};
		$scope.getCSTeLi = $scope.cs.from_hue($scope.setHSV.h).scheme('tetrade').variation('light').colors();
		$scope.setCSTeLi = {
			color1: tinycolor($scope.getCSTeLi[0]).toRgbString(),
			color2: tinycolor($scope.getCSTeLi[1]).toRgbString(),
			color3: tinycolor($scope.getCSTeLi[2]).toRgbString(),
			color4: tinycolor($scope.getCSTeLi[3]).toRgbString(),
			color5: tinycolor($scope.getCSTeLi[4]).toRgbString(),
			color6: tinycolor($scope.getCSTeLi[5]).toRgbString(),
			color7: tinycolor($scope.getCSTeLi[6]).toRgbString(),
			color8: tinycolor($scope.getCSTeLi[7]).toRgbString(),
			color9: tinycolor($scope.getCSTeLi[8]).toRgbString(),
			color10: tinycolor($scope.getCSTeLi[9]).toRgbString(),
			color11: tinycolor($scope.getCSTeLi[10]).toRgbString(),
			color12: tinycolor($scope.getCSTeLi[11]).toRgbString(),
			color13: tinycolor($scope.getCSTeLi[12]).toRgbString(),
			color14: tinycolor($scope.getCSTeLi[13]).toRgbString(),
			color15: tinycolor($scope.getCSTeLi[14]).toRgbString(),
			color16: tinycolor($scope.getCSTeLi[15]).toRgbString()
		};
		$scope.getCSTePl = $scope.cs.from_hue($scope.setHSV.h).scheme('tetrade').variation('pale').colors();
		$scope.setCSTePl = {
			color1: tinycolor($scope.getCSTePl[0]).toRgbString(),
			color2: tinycolor($scope.getCSTePl[1]).toRgbString(),
			color3: tinycolor($scope.getCSTePl[2]).toRgbString(),
			color4: tinycolor($scope.getCSTePl[3]).toRgbString(),
			color5: tinycolor($scope.getCSTePl[4]).toRgbString(),
			color6: tinycolor($scope.getCSTePl[5]).toRgbString(),
			color7: tinycolor($scope.getCSTePl[6]).toRgbString(),
			color8: tinycolor($scope.getCSTePl[7]).toRgbString(),
			color9: tinycolor($scope.getCSTePl[8]).toRgbString(),
			color10: tinycolor($scope.getCSTePl[9]).toRgbString(),
			color11: tinycolor($scope.getCSTePl[10]).toRgbString(),
			color12: tinycolor($scope.getCSTePl[11]).toRgbString(),
			color13: tinycolor($scope.getCSTePl[12]).toRgbString(),
			color14: tinycolor($scope.getCSTePl[13]).toRgbString(),
			color15: tinycolor($scope.getCSTePl[14]).toRgbString(),
			color16: tinycolor($scope.getCSTePl[15]).toRgbString()
		};
		$scope.getCSTePs = $scope.cs.from_hue($scope.setHSV.h).scheme('tetrade').variation('pastel').colors();
		$scope.setCSTePs = {
			color1: tinycolor($scope.getCSTePs[0]).toRgbString(),
			color2: tinycolor($scope.getCSTePs[1]).toRgbString(),
			color3: tinycolor($scope.getCSTePs[2]).toRgbString(),
			color4: tinycolor($scope.getCSTePs[3]).toRgbString(),
			color5: tinycolor($scope.getCSTePs[4]).toRgbString(),
			color6: tinycolor($scope.getCSTePs[5]).toRgbString(),
			color7: tinycolor($scope.getCSTePs[6]).toRgbString(),
			color8: tinycolor($scope.getCSTePs[7]).toRgbString(),
			color9: tinycolor($scope.getCSTePs[8]).toRgbString(),
			color10: tinycolor($scope.getCSTePs[9]).toRgbString(),
			color11: tinycolor($scope.getCSTePs[10]).toRgbString(),
			color12: tinycolor($scope.getCSTePs[11]).toRgbString(),
			color13: tinycolor($scope.getCSTePs[12]).toRgbString(),
			color14: tinycolor($scope.getCSTePs[13]).toRgbString(),
			color15: tinycolor($scope.getCSTePs[14]).toRgbString(),
			color16: tinycolor($scope.getCSTePs[15]).toRgbString()
		};
		$scope.getCSTeSo = $scope.cs.from_hue($scope.setHSV.h).scheme('tetrade').variation('soft').colors();
		$scope.setCSTeSo = {
			color1: tinycolor($scope.getCSTeSo[0]).toRgbString(),
			color2: tinycolor($scope.getCSTeSo[1]).toRgbString(),
			color3: tinycolor($scope.getCSTeSo[2]).toRgbString(),
			color4: tinycolor($scope.getCSTeSo[3]).toRgbString(),
			color5: tinycolor($scope.getCSTeSo[4]).toRgbString(),
			color6: tinycolor($scope.getCSTeSo[5]).toRgbString(),
			color7: tinycolor($scope.getCSTeSo[6]).toRgbString(),
			color8: tinycolor($scope.getCSTeSo[7]).toRgbString(),
			color9: tinycolor($scope.getCSTeSo[8]).toRgbString(),
			color10: tinycolor($scope.getCSTeSo[9]).toRgbString(),
			color11: tinycolor($scope.getCSTeSo[10]).toRgbString(),
			color12: tinycolor($scope.getCSTeSo[11]).toRgbString(),
			color13: tinycolor($scope.getCSTeSo[12]).toRgbString(),
			color14: tinycolor($scope.getCSTeSo[13]).toRgbString(),
			color15: tinycolor($scope.getCSTeSo[14]).toRgbString(),
			color16: tinycolor($scope.getCSTeSo[15]).toRgbString()
		};
		
		// CS:Triad, 12 colors.
		$scope.getCSTrDe = $scope.cs.from_hue($scope.setHSV.h).scheme('triade').variation('default').colors();
		$scope.setCSTrDe = {
			color1: tinycolor($scope.getCSTrDe[0]).toRgbString(),
			color2: tinycolor($scope.getCSTrDe[1]).toRgbString(),
			color3: tinycolor($scope.getCSTrDe[2]).toRgbString(),
			color4: tinycolor($scope.getCSTrDe[3]).toRgbString(),
			color5: tinycolor($scope.getCSTrDe[4]).toRgbString(),
			color6: tinycolor($scope.getCSTrDe[5]).toRgbString(),
			color7: tinycolor($scope.getCSTrDe[6]).toRgbString(),
			color8: tinycolor($scope.getCSTrDe[7]).toRgbString(),
			color9: tinycolor($scope.getCSTrDe[8]).toRgbString(),
			color10: tinycolor($scope.getCSTrDe[9]).toRgbString(),
			color11: tinycolor($scope.getCSTrDe[10]).toRgbString(),
			color12: tinycolor($scope.getCSTrDe[11]).toRgbString()
		};
		$scope.getCSTrHa = $scope.cs.from_hue($scope.setHSV.h).scheme('triade').variation('hard').colors();
		$scope.setCSTrHa = {
			color1: tinycolor($scope.getCSTrHa[0]).toRgbString(),
			color2: tinycolor($scope.getCSTrHa[1]).toRgbString(),
			color3: tinycolor($scope.getCSTrHa[2]).toRgbString(),
			color4: tinycolor($scope.getCSTrHa[3]).toRgbString(),
			color5: tinycolor($scope.getCSTrHa[4]).toRgbString(),
			color6: tinycolor($scope.getCSTrHa[5]).toRgbString(),
			color7: tinycolor($scope.getCSTrHa[6]).toRgbString(),
			color8: tinycolor($scope.getCSTrHa[7]).toRgbString(),
			color9: tinycolor($scope.getCSTrHa[8]).toRgbString(),
			color10: tinycolor($scope.getCSTrHa[9]).toRgbString(),
			color11: tinycolor($scope.getCSTrHa[10]).toRgbString(),
			color12: tinycolor($scope.getCSTrHa[11]).toRgbString()
		};
		$scope.getCSTrLi = $scope.cs.from_hue($scope.setHSV.h).scheme('triade').variation('light').colors();
		$scope.setCSTrLi = {
			color1: tinycolor($scope.getCSTrLi[0]).toRgbString(),
			color2: tinycolor($scope.getCSTrLi[1]).toRgbString(),
			color3: tinycolor($scope.getCSTrLi[2]).toRgbString(),
			color4: tinycolor($scope.getCSTrLi[3]).toRgbString(),
			color5: tinycolor($scope.getCSTrLi[4]).toRgbString(),
			color6: tinycolor($scope.getCSTrLi[5]).toRgbString(),
			color7: tinycolor($scope.getCSTrLi[6]).toRgbString(),
			color8: tinycolor($scope.getCSTrLi[7]).toRgbString(),
			color9: tinycolor($scope.getCSTrLi[8]).toRgbString(),
			color10: tinycolor($scope.getCSTrLi[9]).toRgbString(),
			color11: tinycolor($scope.getCSTrLi[10]).toRgbString(),
			color12: tinycolor($scope.getCSTrLi[11]).toRgbString()
		};
		$scope.getCSTrPl = $scope.cs.from_hue($scope.setHSV.h).scheme('triade').variation('pale').colors();
		$scope.setCSTrPl = {
			color1: tinycolor($scope.getCSTrPl[0]).toRgbString(),
			color2: tinycolor($scope.getCSTrPl[1]).toRgbString(),
			color3: tinycolor($scope.getCSTrPl[2]).toRgbString(),
			color4: tinycolor($scope.getCSTrPl[3]).toRgbString(),
			color5: tinycolor($scope.getCSTrPl[4]).toRgbString(),
			color6: tinycolor($scope.getCSTrPl[5]).toRgbString(),
			color7: tinycolor($scope.getCSTrPl[6]).toRgbString(),
			color8: tinycolor($scope.getCSTrPl[7]).toRgbString(),
			color9: tinycolor($scope.getCSTrPl[8]).toRgbString(),
			color10: tinycolor($scope.getCSTrPl[9]).toRgbString(),
			color11: tinycolor($scope.getCSTrPl[10]).toRgbString(),
			color12: tinycolor($scope.getCSTrPl[11]).toRgbString()
		};
		$scope.getCSTrPs = $scope.cs.from_hue($scope.setHSV.h).scheme('triade').variation('pastel').colors();
		$scope.setCSTrPs = {
			color1: tinycolor($scope.getCSTrPs[0]).toRgbString(),
			color2: tinycolor($scope.getCSTrPs[1]).toRgbString(),
			color3: tinycolor($scope.getCSTrPs[2]).toRgbString(),
			color4: tinycolor($scope.getCSTrPs[3]).toRgbString(),
			color5: tinycolor($scope.getCSTrPs[4]).toRgbString(),
			color6: tinycolor($scope.getCSTrPs[5]).toRgbString(),
			color7: tinycolor($scope.getCSTrPs[6]).toRgbString(),
			color8: tinycolor($scope.getCSTrPs[7]).toRgbString(),
			color9: tinycolor($scope.getCSTrPs[8]).toRgbString(),
			color10: tinycolor($scope.getCSTrPs[9]).toRgbString(),
			color11: tinycolor($scope.getCSTrPs[10]).toRgbString(),
			color12: tinycolor($scope.getCSTrPs[11]).toRgbString()
		};
		$scope.getCSTrSo = $scope.cs.from_hue($scope.setHSV.h).scheme('triade').variation('soft').colors();
		$scope.setCSTrSo = {
			color1: tinycolor($scope.getCSTrSo[0]).toRgbString(),
			color2: tinycolor($scope.getCSTrSo[1]).toRgbString(),
			color3: tinycolor($scope.getCSTrSo[2]).toRgbString(),
			color4: tinycolor($scope.getCSTrSo[3]).toRgbString(),
			color5: tinycolor($scope.getCSTrSo[4]).toRgbString(),
			color6: tinycolor($scope.getCSTrSo[5]).toRgbString(),
			color7: tinycolor($scope.getCSTrSo[6]).toRgbString(),
			color8: tinycolor($scope.getCSTrSo[7]).toRgbString(),
			color9: tinycolor($scope.getCSTrSo[8]).toRgbString(),
			color10: tinycolor($scope.getCSTrSo[9]).toRgbString(),
			color11: tinycolor($scope.getCSTrSo[10]).toRgbString(),
			color12: tinycolor($scope.getCSTrSo[11]).toRgbString()
		};
		
		
		// TC
		// TC:Analogous, 6 colors.
		$scope.getTCAn = tinycolor($scope.randomizer).analogous().map(function(c){return c.toHex();});
		$scope.setTCAn = {
			color1: tinycolor($scope.getTCAn[0]).toRgbString(),
			color2: tinycolor($scope.getTCAn[1]).toRgbString(),
			color3: tinycolor($scope.getTCAn[2]).toRgbString(),
			color4: tinycolor($scope.getTCAn[3]).toRgbString(),
			color5: tinycolor($scope.getTCAn[4]).toRgbString(),
			color6: tinycolor($scope.getTCAn[5]).toRgbString()
		};
		// TC:Split Complement, 3 colors.
		$scope.getTCSpCo = tinycolor($scope.randomizer).splitcomplement().map(function(c){return c.toHex();});
		$scope.setTCSpCo = {
			color1: tinycolor($scope.getTCSpCo[0]).toRgbString(),
			color2: tinycolor($scope.getTCSpCo[1]).toRgbString(),
			color3: tinycolor($scope.getTCSpCo[2]).toRgbString()
		};
		
		// Bin, 7 colors.
		$scope.setBinSpaceship = {
			color1: tinycolor($scope.getCSTeHa[10]).toRgbString(),
			color2: tinycolor($scope.getCSTeDe[11]).toRgbString(),
			color3: tinycolor($scope.getCSTeDe[7]).toRgbString(),
			color4: tinycolor($scope.getCSMoHa[1]).toRgbString(),
			color5: tinycolor($scope.getCSMoDe[0]).toRgbString(),
			color6: tinycolor($scope.getCSMoDe[3]).toRgbString(),
			color7: tinycolor($scope.getCSTeHa[2]).toRgbString(),
		};
		$scope.setBinDog = {
			color1: tinycolor($scope.getCSAnLi[7]).toRgbString(),
			color2: tinycolor($scope.getCSCoDe[7]).toRgbString(),
			color3: tinycolor($scope.getCSTrHa[9]).desaturate(100).toRgbString(),
			color4: tinycolor($scope.getCSMoDe[0]).toRgbString(),
			color5: tinycolor($scope.getCSAnLi[0]).toRgbString(),
			color6: tinycolor($scope.getCSAnLi[4]).toRgbString(),
			color7: tinycolor($scope.getCSTeHa[14]).toRgbString(),
		};
		$scope.setBinCoco = {
			color1: tinycolor('fffffe').toRgbString(),
			color2: tinycolor($scope.getTCSpCo[0]).toRgbString(),
			color3: tinycolor($scope.getTCSpCo[1]).toRgbString(),
			color4: tinycolor($scope.getCSCoPl[1]).toRgbString()
		};
		$scope.setBinRobot = {
			color1: tinycolor($scope.getCSTrHa[9]).desaturate(100).toRgbString(),
			color2: tinycolor($scope.getCSTeDe[3]).toRgbString(),
			color3: tinycolor($scope.getCSTePl[14]).desaturate(80).toRgbString()
		};
		$scope.setBinStamp = {
			color1: tinycolor($scope.getCSMoLi[0]).lighten(10).desaturate(100).toRgbString(),
			color2: tinycolor($scope.getCSMoLi[0]).toRgbString(),
			color3: tinycolor($scope.getCSTrHa[9]).desaturate(100).toRgbString(),
			color4: tinycolor($scope.getTCSpCo[0]).desaturate(70).toRgbString(),
			color5: tinycolor($scope.getCSCoDe[7]).toRgbString(),
		};
		$scope.setBin = {
			rule1: tinycolor.mostReadable($scope.setBinStamp.color4, [$scope.setBinStamp.color1,$scope.setBinStamp.color3]).toRgbString()
		};
		
		// Test, 7 colors.
		$scope.setTSTCS1 = {
			color4: tinycolor($scope.getCSMoDe[0]).toRgbString(),
			color5: tinycolor($scope.getCSAnLi[0]).toRgbString(),
			color1: tinycolor($scope.getCSAnLi[7]).toRgbString(),
			color6: tinycolor($scope.getCSAnLi[4]).toRgbString(),
			color7: tinycolor($scope.getCSTeHa[14]).toRgbString(),
			
			color2: tinycolor($scope.getCSCoDe[7]).toRgbString(),
			color3: tinycolor($scope.getCSTrHa[9]).desaturate(100).toRgbString(),
		};
	};
	setColor();
	
	$scope.update = function(){
		setRandom();
		setColor();
	}
	$scope.change = function(){
		setColor();
	}
	
	$scope.showHide = 0;
	$scope.show = function(){
		$scope.showHide = 1;
	};
	$scope.hide = function(){
		$scope.showHide = 0;
	};
//	console.log( $scope.ch )

})
