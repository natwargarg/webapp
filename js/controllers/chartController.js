'use strict';

/* Controllers */

compsApp.controller('chartCtrl', function($scope, DataService) {
 
      var canvas = document.createElement('canvas');
      document.getElementById("ChartDiv").appendChild(canvas);
      canvas.setAttribute("width", 200);
      canvas.setAttribute("height", 200);
      if(!Modernizr.canvas) {
        canvas = G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext("2d");

      $scope.mychart = new Chart(ctx).Line(DataService.lineChartData, {responsive: true, animation : Modernizr.canvas});

  $scope.showLineChart = function()
  {
    $scope.mychart.clear();
    $scope.mychart = new Chart(ctx).Line(DataService.lineChartData, {responsive: true, animation : Modernizr.canvas});
  }  
  $scope.showPieChart = function()
  {
     $scope.mychart.clear();
     $scope.mychart = new Chart(ctx).Pie(DataService.pieData , {responsive: true, animation : Modernizr.canvas});
  }

  $scope.showDoughnutChart = function()
  {
    $scope.mychart.clear();
    $scope.mychart = new Chart(ctx).Doughnut(DataService.doughnutData, {responsive : true});
  }

  $scope.showBarChart = function()
  {
    
    $scope.mychart = new Chart(ctx).Bar(DataService.barChartData, {responsive : true});
  }

//$scope.showPieChart();
$scope.showLineChart();


});