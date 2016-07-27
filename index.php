<!doctype html>
<html lang="en" ng-app="lincsDcic" class="ng-cloak">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content="The BD2K-LINCS Data Coordination and Integration Center (DCIC) is the data coordination center for the NIH Common Fund’s Library of Integrated Network-based Cellular Signatures (LINCS) program.">
    <meta name="keywords" content="lincs, bd2k, dcic, bd2k-lincs dcic, data coordination and integration center, biomedical, research, systems biology, gene signature, data science, big data, harmonizome, enrichr, geo2enrichr, pilincs, l1000cds2, paea, lincs information framework, ilincs, lincs canvas browser, drug/cell-line browser, network2canvas, l1000, kinomescan, neurolincs, dotxs, avi ma'ayan, avi maayan, stephan schurer, mario medvedovic">
    <meta name="application-name" content="BD2K-LINCS Data Coordination and Integration Center">

    <!-- AngularJS / IE: http://stackoverflow.com/a/22005047/1830334 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <!-- These tags specify how content is displayed on various social media sites -->
    <!-- cf. OpenGraph: http://ogp.me/ -->
    <meta property="og:url" content="http://lincs-dcic.org/">
    <meta property="og:image" content="http://lincs-dcic.org/images/dcic-logo/DCIC_500x375_cropped.png">

    <!-- These tags specify how content is displayed on a Twitter feed -->
    <meta name="twitter:card" content="The BD2K-LINCS Data Coordination and Integration Center">
    <meta name="twitter:image" content="http://lincs-dcic.org/images/dcic-logo/DCIC_500x375_cropped.png">

    <title>BD2K-LINCS DCIC</title>

    <link rel="shortcut icon" href="images/dcic-logo/favicon.png?v=2">

	<!-- CSS -->
	<link rel="stylesheet" href="/lib/bower_components/bootstrap/dist/css/bootstrap.css">
	<link rel="stylesheet" href="/lib/bower_components/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="/lib/bower_components/bootstrap-social/bootstrap-social.css">
	<link rel="stylesheet" href="/lib/bower_components/fullcalendar/dist/fullcalendar.min.css">
	<link rel="stylesheet" href="/lib/bower_components/ng-tags-input/ng-tags-input.min.css"/>
    <link rel="stylesheet" href="/lib/jquery-ui-1.11.4.custom/jquery-ui.min.css">
    <link href='http://fonts.googleapis.com/css?family=Archivo+Narrow:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <!-- Handwritten font -->
    <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>
    <!-- <link rel="stylesheet" href="/lib/bower_components/hint.css/hint.min.css"> -->
	<link rel="stylesheet" href="style/main.css">
	<link rel="stylesheet" href="style/nav.css">
	<link rel="stylesheet" href="style/index.css">
	<link rel="stylesheet" href="style/side.css">
	<link rel="stylesheet" href="style/getting-started.css">
	<!-- <link rel="stylesheet" href="style/tool-directive.css"> -->
	<link rel="stylesheet" href="libs/lincs-direct-access-tools/direct-access-tools.css">

    <!-- Google Analytics -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-57790233-1', 'auto');
		ga('send', 'pageview');
	</script>
</head>

<body>
    <!-- This pushes the footer to the bottom. -->
    <div id="wrapper">

        <!-- This creates the top level header that spans the entire width -->
        <div ng-include="'view/partial/header.html'"></div>

        <!-- ng-view is used rather than ng-include to handle routing. -->
        <div id="content-wrapper" class="container" ng-view></div>

    </div>

    <div ng-include="'view/partial/footer.html'"></div>

	<!-- Libraries -->


	<script src="/lib/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="/lib/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
	<script src="/lib/bower_components/angular/angular.js"></script>

	<!-- Angular-strap by module, to avoid namespace clashed with ui-bootstrap -->
	<script src="/lib/bower_components/angular-strap/dist/modules/compiler.min.js"></script>
	<script src="/lib/bower_components/angular-strap/dist/modules/dimensions.min.js"></script>
	<script src="/lib/bower_components/angular-strap/dist/modules/tooltip.min.js"></script>
	<script src="/lib/bower_components/angular-strap/dist/modules/tooltip.tpl.min.js"></script>
	<script src="/lib/bower_components/angular-strap/dist/modules/popover.min.js"></script>
	<script src="/lib/bower_components/angular-strap/dist/modules/popover.tpl.min.js"></script>

	<script src="/lib/bower_components/angular-route/angular-route.js"></script>
	<link href="/lib/bower_components/angular-bootstrap/ui-bootstrap-csp.css" rel="stylesheet"/>
	<script src="/lib/bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
	<script src="/lib/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
	<script src='/lib/bower_components/moment/min/moment.min.js'></script>
	<script src='/lib/bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
	<script src='/lib/bower_components/fullcalendar/dist/gcal.js'></script>
	<script src="/lib/bower_components/bootstrap/js/collapse.js"></script>
	<script src="/lib/bower_components/bootstrap/js/carousel.js"></script>
	<script src="/lib/bower_components/bootstrap/js/transition.js"></script>
	<script src="/lib/bower_components/underscore/underscore-min.js"></script>
	<script src="/lib/bower_components/ng-tags-input/ng-tags-input.min.js"></script>
	<!-- <script src="/lib/twitter-fetcher.min.js"></script> -->
	<script src="/lib/bower_components/twitter-fetcher/js/twitterFetcher_min.js"></script>
	<script src="/lib/bower_components/d3/d3.min.js"></script>
	<script src="/lib/bower_components/d3-cloud/build/d3.layout.cloud.js"></script>
	<!-- <script src="/lib/Porter-Stemmer/PorterStemmer1980.min.js"></script> -->



	<!-- ************************ Application ************************ -->
	<!-- Data -->
    <script type="text/javascript" src="js/data/apis.js"></script>
    <script type="text/javascript" src="js/data/mini-symposium.js"></script>
	<script type="text/javascript" src="js/data/carousel.js"></script>
	<script type="text/javascript" src="js/data/datacenters.js"></script>
	<script type="text/javascript" src="js/data/datasets.js"></script>
	<script type="text/javascript" src="js/data/external-dsrp.js"></script>
    <script type="text/javascript" src="js/data/index.js"></script>
    <script type="text/javascript" src="js/data/internal-dsrp.js"></script>
    <script type="text/javascript" src="js/data/intro.js"></script>
    <script type="text/javascript" src="js/data/funding.js"></script>
	<script type="text/javascript" src="js/data/news.js"></script>
	<script type="text/javascript" src="js/data/publications.js"></script>
	<script type="text/javascript" src="js/data/nav.js"></script>
	<script type="text/javascript" src="js/data/seminar-series.js"></script>
	<script type="text/javascript" src="js/data/summer-fellows-2015.js"></script>
	<script type="text/javascript" src="js/data/summer-fellows-2016.js"></script>
	<script type="text/javascript" src="js/data/training.js"></script>
	<script type="text/javascript" src="js/data/team.js"></script>
	<script type="text/javascript" src="js/data/tools.js"></script>
	<script type="text/javascript" src="js/data/webinars.js"></script>
	<script type="text/javascript" src="js/data/workshops-etc.js"></script>

	<!-- Extra functionality -->
	<script type="text/javascript" src="js/analyze.js"></script>
	<script type="text/javascript" src="js/calendar.js"></script>
	<script type="text/javascript" src="js/email.js"></script>
	<script type="text/javascript" src="js/extra.js"></script>
	<script type="text/javascript" src="js/edsrapp.js"></script>
	<script type="text/javascript" src="js/filters.js"></script>
    <script type="text/javascript" src="js/getting-started.js"></script>
	<script type="text/javascript" src="libs/lincs-direct-access-tools/direct-access-tools.js"></script>
	<script type="text/javascript" src="libs/lincs-direct-access-tools/concierge.js"></script>

	<!-- Routes -->
	<script type="text/javascript" src="js/app.js"></script>
	<!-- ************************ End application ************************ -->
</body>
</html>
