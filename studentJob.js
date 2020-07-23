var newapp1=angular.module('studJobapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studJobcntrl', ['$scope','studJobService','$window','$location',function($scope,studJobService,$window,$location) {

//alert("student job");

 var id11=($window.sessionStorage.getItem('studId'));
 
 $scope.studId=id11;


$scope.cnt={};
$scope.msg={};

$scope.imgobj={};
$scope.imgobj.studId=id11;
// alert("studId="+JSON.stringify($scope.imgobj.studId));

$scope.regobjdata={};
$scope.studId=id11;
$scope.getRegisterDataByid=function(studId)
{

   // alert("studId data"+JSON.stringify(studId));
    studJobService.getRegiterDetailbyRid(studId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata));

        if($scope.regobjdata.studImage==null)
        {
          $scope.cnt=1;
           $scope.msg="Please Update the Profile";
        //       var host = $window.location.host;
        // var landingUrl = "studentSetting.html";
        // $window.location.href = landingUrl;
           $scope.go="studentSetting.html";
        }
        else
        {
          $scope.cnt=0;
          $scope.msg="No Notification";
        }
     
  })
}

$scope.getRegisterDataByid($scope.studId);

$scope.joblist=[];
$scope.getAllStudJobs=function()
{

   // alert("studId data"+JSON.stringify(studId));
    studJobService.getAllJobDetails().then(function(response)
    {

        $scope.joblist=response.data.result;


         // alert("joblist data"+JSON.stringify($scope.joblist));

           console.log("joblist data="+JSON.stringify($scope.joblist));       
     
  })
}

$scope.getAllStudJobs();



}]);

newapp1.service("studJobService",function($http){



   this.getRegiterDetailbyRid=function(studId)
   {
         return $http.post("http://localhost:8083/"+"getRegiterDetailbyRid/"+studId);
   
   }
   
  this.getAllJobDetails=function()
   {
         return $http.get("http://localhost:8083/"+"getAllJobDetails");
   
   }

   })
