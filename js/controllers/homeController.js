'use strict';

/* Controllers */

compsApp.controller('homeCtrl', function($scope,DataService) {

$scope.showLineChart = function()
  {
    var canvas = document.createElement('canvas');
      document.getElementById("lineChartDiv").appendChild(canvas);
      canvas.setAttribute("width", 300);
      canvas.setAttribute("height", 300);
      if(!Modernizr.canvas) {
        canvas = G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext("2d");
      window.myLine = new Chart(ctx).Line(DataService.lineChartData, {responsive: true, animation : Modernizr.canvas});
  }  
$scope.showPieChart = function()
  {
    var canvas = document.createElement('canvas');
      document.getElementById("pieChartDiv").appendChild(canvas);
      canvas.setAttribute("width", 200);
      canvas.setAttribute("height", 200);
      if(!Modernizr.canvas) {
        canvas = G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext("2d");
      window.myPie = new Chart(ctx).Pie(DataService.pieData, {responsive : true});
  }

  $scope.showDoughnutChart = function()
  {
    var canvas = document.createElement('canvas');
      document.getElementById("DoughnutChartDiv").appendChild(canvas);
      canvas.setAttribute("width", 200);
      canvas.setAttribute("height", 200);
      if(!Modernizr.canvas) {
        canvas = G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext("2d");
      //window.myPie = new Chart(ctx).Pie(pieData);
      window.myDoughnut = new Chart(ctx).Doughnut(DataService.doughnutData, {responsive : true});
  }

  $scope.showBarChart = function()
  {
    var canvas = document.createElement('canvas');
      document.getElementById("barChartDiv").appendChild(canvas);
      canvas.setAttribute("width", 300);
      canvas.setAttribute("height", 300);
      if(!Modernizr.canvas) {
        canvas = G_vmlCanvasManager.initElement(canvas);
      }
      var ctx = canvas.getContext("2d");
      //window.myPie = new Chart(ctx).Pie(pieData);
      window.myBar = new Chart(ctx).Bar(DataService.barChartData, {responsive : true});
  }



$scope.showPieChart();
$scope.showLineChart();
$scope.showDoughnutChart();
$scope.showBarChart();

});