var app = angular.module("testApp", []);

// テストコントローラ
app.controller('testCtrl', function($scope,$http){

	$scope.fields = fields;
	$scope.fields.gallery = [{id:0, caption:"aaa"}, {id:1, caption:"bbb"}];
	$scope.fields.similar = [{id:4, caption:"eee"}, {id:5, caption:"fff"}];

// 更新ボタン
	$scope.upload = function(){

		var fd = new FormData();
		// 単一項目
		fd.append('fields[test_code]', $scope.fields.test_code);
		fd.append('fields[test_name]', $scope.fields.test_name);
		fd.append('topimage', $scope.topimage);
		fd.append('map', $scope.map);

		// Gallery（複数項目）
		angular.forEach($scope.fields.gallery, function(records, i){
			fd.append('gallery[' + i + ']', records.image);
			fd.append('fields[gallery][' + i + '][title]', records.title);
			fd.append('fields[gallery][' + i + '][caption]', records.caption);
		});

		// Similar Contents（複数項目）
		angular.forEach($scope.fields.similar, function(records, i){
			fd.append('simillar[' + i + ']', records.image);
			fd.append('fields[simillar][' + i + '][title]', records.title);
			fd.append('fields[similar][' + i + '][caption]', records.caption);
		});

		$http.post('/test/upload.php', fd,{
	            transformRequest: null,
				headers: {'Content-type':undefined}
			}).success( function(res){
				$scope.response = res;
			});
		}

});

//directive
app.directive('fileModel',function($parse){
    return{
        restrict: 'A',
        link: function(scope,element,attrs){
            var model = $parse(attrs.fileModel);
            element.bind('change',function(){
                scope.$apply(function(){
                    model.assign(scope,element[0].files[0]);
                });
            });
        }
    };
});


// EOF
