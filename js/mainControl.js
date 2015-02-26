var app = angular.module('sounder');

app.controller('mainControl', function($scope, $sce, soundService){
	$scope.getUser = function(){
		soundService.getUser($scope.searchText).then(function(data){
			$scope.userData = data.data;
			// console.log(data.data);
			$scope.searchText = '';
		})
	};

	$scope.play = function(track_url){
		console.log(track_url);
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
			console.log(oEmbed, track_url);
      $scope.$apply(
      		$scope.player_html = $sce.trustAsHtml(oEmbed.html)
      	);
    });
	};

});