var mod = angular.module("analyzeMod", []);

mod.controller("analyzeCtrl", ["$scope", "$http", "$element", function($scope, $http, $element) {

	$scope.formData = {};

	$scope.geneListPlaceholder = "Gene list";

	var usingPlaceholder = false;
	
	$scope.submit = function() {
		if (usingPlaceholder || $scope.formData.geneList) {
			$http.post("http://www.maayanlab.net/LINCS/DCIC/signature.php", $scope.formData);
			enrich({
				list: $scope.formData.geneList || $scope.geneListPlaceholder,
				description: $scope.formData.desc
			});
		}
	}

	$scope.normalExample = function() {
		usingPlaceholder = true;
		$scope.geneListPlaceholder = "Mrpl9\nLOC100046168\nZfp11\nAsf1a\nPlscr2\nMettl7a\nRab1\nLrrc19\nLOC100047214\nPhf7\nTmem86a\n5730414N17Rik\nLyrm5\n2310068J16Rik\nUbie\nFech\nGys2\nAco1\nFbxo3\nPrkaca\nPsmc6\nTm2d2\nTxndc4\n4833426J09Rik\nWdr20a\nParp16\nPex1\nPkig\nDhrs1\nAfap1l1\n4732466D17Rik\nArsg\nVamp8\nScyl1\nAW209491\nHoxa7\nAnxa13\n0610013E23Rik\nPcmtd2\nArsg\nTgds\nMtmr14\nCcdc16\nD4Bwg0951e\nNudt6\nAI316807\nCrebl2\nAgbl3\nAldh6a1\nStxbp2\nCol4a4\nLOC100047292\nCox15\nGpr155\nSlc25a40\nIah1\nSbk1\n4932432K03Rik\nNupl2\nSrr\nTm2d2\nLrrc61\nLOC100046168\nCno\nHibch\nKlf12\nPaip1\nSybl1\nEi24\nGyk\nA930005H10Rik\nA930041I02Rik\nTmem30a\nPitpnc1\nUbe2e1\nA230062G08Rik\nPcsk7\nTln1\nMipol1\nChpt1\n4732435N03Rik\nNol7\nCox15\nAbhd11\nZkscan1\nTcn2\nPsmc3ip\n1810044D09Rik\nMdh1\nGnmt\nAcaa1a\nNsmce4a\nMynn\nSlc33a1\nSat2\nCldn10\n4933403G14Rik\nBC038156\nCpt1a\nWbscr18\nRwdd3\nFech\nExosc4\nZfp787\nMipol1\nAfmid\n4732466D17Rik\nWdr34\nAI931714\nSlc9a6\nAcbd4\nOsgepl1\nYme1l1\nApool\nNxt2\nUsp34\nAtp6v1b2\nBC016495\n2610036D13Rik\nCoq10a\nNsun3\nTm2d2\nCacnb4\nLipt1\nIpp\nNlrx1\nOxsm\n2810432D09Rik\nThtpa\nRilp\nAdk\n4933407N01Rik\nLOC100046254\nDmxl1\nKlf12\nBri3\nTnfsf5ip1\nLrrc1\nLOC100047604\nOrc5l\nAp4s1\n2610528K11Rik\nMrpl35\nMyo6\nSfxn5\nSf1\nTasp1\nZfp775\nItfg1\nTmed4\nKdr\nScp2\nFars2\n2610528J11Rik\nTmem166\nCcdc16\nZfp748\nNudt12\nTor1a\nArhgap18\nNeo1\nLOC100047782\nFbxo9\nGbe1\nTmlhe\n3110048L19Rik\nGorasp1\nWdr89\nDolpp1\n2310026E23Rik\nFahd1\nHsd3b2\nTmlhe\nSmo\nPolrmt\nRps6kb1\nFbxo8\nNap1l1\nC1d\nEntpd5\nIntu\nNat9\nOvol1\nCables1\n1700023B02Rik\nLrrc44\n4632404H12Rik\nVldlr\nB3bp\nMat2b\nTlcd1\nMpp7\nC330002I19Rik\nSmyd4\nWdr42a\n2410012H22Rik\nLyrm5\nAdh5\nKalrn\nAbhd3\nAldh8a1\nIft122\nDalrd3\nRhbdd3\nCat\nVwce\nWdr42a\nTm2d2\nLOC100048387\nVps13b\nTrap1\nBpnt1\n4930432O21Rik\n1110003E01Rik\nLrrc40\nMgat1\nRP23-195K8.6\nYars2\nFkbpl\nPaics\nAdhfe1\nTsr2\n4932438A13Rik\nCep68\nTlcd1\nSipa1l1\nZrsr1\nFzd5\nNdufv1\nTlcd1\nLOC100047214\nSptlc1\nSlc7a6os\nCdan1\nStxbp2\nOvol1\nZdhhc5\nRnf167\nLypla1\n2310009A05Rik\nZfand1\nTmem77\nC330018D20Rik\nRab11fip2\nZbtb44\nEsm1\nDnajc19\nNotum\nLOC100044139\n2700038C09Rik\nZfyve20\nKlhdc4\nPolrmt\nSephs2\nGyk\nMettl8\nDhtkd1\n2410166I05Rik\n1700034H14Rik\nFbxo9\nSlc25a16\n9230114K14Rik\nScrn3\n1700001L05Rik\nLifr\nHyi\n39509\nNdufb6\nLyrm2\nLOC674449\nNr3c1\nKmo\nMobkl2b\nDefb29\nSip1\nZfp650\nArhgef12\nAtad3a\nTm2d2\n5730403B10Rik\nGphn\nCradd\n4921530L18Rik\nGlo1\n4921508D12Rik\nLOC100044400\n1200014M14Rik\nSiae\nKlf1\nLrrc56\nGk5\nPms1\nAtxn2\nProz\nAscc1\nA930005H10Rik\nArsk\n1810049H13Rik\nDnajc18\nLrrc8a\nTimm44\nGadd45gip1\nH2afj\nTmem80\nZfp106\n0610013E23Rik\nNaglu\nTfb1m\nMcat\nWdr24\n1110032A03Rik\nCd55\nTmbim4\nMdh1\nEll3\nPlekha7\nTrim23\nSac3d1\n5430437P03Rik\nTpmt\n2510006D16Rik\nAnkrd42\nTfam\nMut\nNfs1\nD730039F16Rik\n2210011C24Rik\nGstz1\nGal3st2\n9630013D21Rik\nCdk5rap1\n2410018G20Rik\n1810019D21Rik\nPoli\nUfc1\nCisd1\n2010309E21Rik\nRqcd1\n7530414M10Rik\n2210016F16Rik\nUnc119b\nPsmb1\nRbks\nPaics\nAtpaf1\nRbm39\nD130020L05Rik\nAdhfe1\nEntpd5\nLass2\n6530415H11Rik\nTm2d2\nAqp11\nNme7\n1700123L14Rik\nZcchc3\nLOC623451\nNpy\n5730403B10Rik\nRiok2\nENSMUSG00000074286\nAtad3a\nSlc30a6\nAbhd14a\nClcc1\nMtfr1\nTrpc2\n2310042D19Rik\nSlc25a39\nFbxl6\nPttg1ip\nZfp655\n3110001I20Rik\nRabepk\nHibch\nMed14\nZfp148\nPmpcb\nAldh1a3\n2700046G09Rik\nPrpf18\nFah\nRps6ka5\nCntd1\nTrim23\nEny2\nFgfr4\nAsb9\nTrim37\nD630023B12Rik\nRfesd\nMynn\n2410166I05Rik\nZc3h12c\nLOC100041586\nA530050D06Rik\n2610019F03Rik\nDdt\nPgm2\n9030420J04Rik\nTm7sf3\nClec2h\nTmem186\nFn3k\nHpn\nNeo1\nAkr7a5\nFbxl3\nRdh14\n3110057O12Rik\nFbxo3\nTomm70a\nUbox5\n";
	}

	$scope.fuzzyExample = function() {
		usingPlaceholder = true;
		$scope.geneListPlaceholder = "ADAM10,0.180332\nADAM12,0.145189\nADAMTS10,0.168047\nARHGAP1,0.138820\nARHGAP28,0.158224\nARSE,0.143072\nASAM,0.145892\nATP13A4,0.153650\nBMP1,0.144291\nBMP7,0.157614\nBNC2,0.147440\nBRDT,0.154325\nBTN1A1,0.147376\nC12ORF53,0.155081\nC1QTNF6,0.159286\nC20ORF58,0.255140\nC3ORF59,0.162077\nC4ORF26,0.208984\nC6ORF65,0.159860\nC7ORF10,0.169436\nC8B,0.161250\nC9ORF53,0.153146\nCCDC36,0.181141\nCCR6,0.200862\nCD59,0.137231\nCDKL1,0.139624\nCETN2,0.143746\nCHRNA3,0.165085\nCILP2,0.170691\nCNTN1,0.168352\nCNTN6,0.189580\nCOL16A1,0.137049\nCOL6A1,0.147329\nCOPZ2,0.145576\nCORIN,0.148437\nCPB2,0.197561\nCSMD1,0.163244\nCX3CR1,0.143887\nCYP27C1,0.158658\nDEPDC7,0.141172\nF8A1,0.162165\nFAM127A,0.155750\nFAM127B,0.141131\nFAM26E,0.146965\nFAM77D,0.153985\nFAM7A1,0.173928\nFASN,0.159943\nFBLN1,0.178655\nFKBP10,0.138075\nFKBP5,0.144719\nFKBP7,0.138163\nFLJ14213,0.183944\nFLRT2,0.152835\nFST,0.191298\nGAS7,0.143365\nGLI2,0.137430\nGLIS1,0.217921\nGPR1,0.206099\nGPR32,0.224969\nHMCN1,0.156594\nHS3ST3A1,0.137776\nIGF2AS,0.164921\nIGFBP6,0.146842\nIGFL2,0.141019\nIL13RA1,0.156600\nKCNMB4,0.145863\nKERA,0.172826\nKIAA0574,0.159286\nKIAA1217,0.142403\nKIF26B,0.146848\nKIRREL,0.142655\nL1TD1,0.165754\nLEPRE1,0.136826\nLIPC,0.163144\nLL22NC03-75B3.6,0.149440\nLOC554202,0.199848\nLOXL2,0.143898\nLRRC15,0.152020\nMN1,0.164264\nMYL3,0.171155\nMYO1H,0.142497\nNALCN,0.137905\nNEGR1,0.143324\nNETO1,0.188078\nNPFFR2,0.144467\nNRG1,0.153205\nNSDHL,0.153134\nNUAK1,0.162089\nODZ4,0.140169\nOR6M1,0.141084\nOSTALPHA,0.182308\nPANX3,0.185850\nPBEF1,0.151393\nPCOLCE,0.144854\nPCSK9,0.154917\nPDLIM2,0.171325\nPEBP4,0.145968\nPPAPDC3,0.142040\nPPP1R2,0.176913\nPPP1R2P3,0.139823\nPROL1,0.239401\nPTHR1,0.224412\nPTPRD,0.153310\nPTPRN,0.171594\nRAB5C,0.143887\nRASGRF2,0.207916\nRBP2,0.228734\nSALL1,0.151457\nSCN2B,0.170017\nSELPLG,0.148021\nSEMA3D,0.163050\nSLAMF9,0.139618\nSLC10A3,0.156758\nSLC16A12,0.214209\nSLC24A2,0.156776\nSLC38A4,0.144239\nSLC38A5,0.159145\nSPARC,0.137295\nST6GAL2,0.147036\nST7L,0.170123\nSTAT5A,0.154389\nSTGC3,0.161960\nTHBS2,0.138756\nTLL2,0.140333\nTLOC1,0.138627\nTMEM106A,0.174978\nTNFSF11,0.154677\nTRIM59,0.154548\nUPK3A,0.138345\nWISP1,0.147347\nZFPM2,0.155644\nZMAT3,0.148390\nZNF689,0.144913\n";
	}

	function enrich(options) {
		var defaultOptions = {
			description: "",
			popup: false
		};

		if (typeof options.description == "undefined")
			options.description = defaultOptions.description;
		if (typeof options.popup == "undefined")
			options.popup = defaultOptions.popup;
		if (typeof options.list == "undefined")
			alert("No genes defined.");

		var form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "http://amp.pharm.mssm.edu/Enrichr/enrich");
		form.setAttribute("target", "_blank");
		form.setAttribute("enctype", "multipart/form-data");

		var listField = document.createElement("input");
		listField.setAttribute("type", "hidden");
		listField.setAttribute("name", "list");
		listField.setAttribute("value", options.list);
		form.appendChild(listField);

		var descField = document.createElement("input");
		descField.setAttribute("type", "hidden");
		descField.setAttribute("name", "description");
		descField.setAttribute("value", options.description);
		form.appendChild(descField);

		document.body.appendChild(form);
		form.submit();
		document.body.removeChild(form);
	}

}]);