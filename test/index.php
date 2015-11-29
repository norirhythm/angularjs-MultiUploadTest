<!doctype html>
<html ng-app="testApp">
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js"></script>
<script src="test.js"></script>
</head>
<body>

<script>
var fields = {test_code:"777", test_name:"angular file multi upload"};
</script>
<div class="test2" ng-controller="testCtrl as app">

<form enctype="multipart/form-data" action="" method="POST">

<p><label>test_code : <input type="text" ng-model="fields.test_code"></label></p>
<p><label>test_name : <input type="text" ng-model="fields.test_name"></label></p>
<p>Top画像 : <input type="file" file-model="topimage" /></p>
<p>地図画像 : <input type="file" file-model="map" /></p>


<p>Gallery</p>
<ul>
	<li ng-repeat="gallery in fields.gallery">
		<input type="file" file-model="gallery.image" />
		<input type="text" ng-model="gallery.caption" />
		<input type="text" ng-model="gallery.title" />
	</li>
</ul>

<p>Similar Contents</p>
<ul>
	<li ng-repeat="similar in fields.similar">
		<input type="file" file-model="similar.image" />
		<input type="text" ng-model="similar.caption" />
		<input type="text" ng-model="similar.title" />
	</li>
</ul>


<p style="background-color:green; width:100px; text-align:center;"><a href="#" ng-click="upload()">click!</a></p>

<div style="background-color:lightgray;">
<p> file : {{file|json}}</p>
<p> fields : {{fields|json}}</p>
<p> response : {{response|json}}</p>
</div>

</form>
</div>
</body>
</html>


