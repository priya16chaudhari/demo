var newapp1=angular.module('studInternapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studInterncntrl', ['$scope','studInternshipService','$window','$location',function($scope,studInternshipService,$window,$location) {

//alert("student Internship");

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
    studInternshipService.getRegiterDetailbyRid(studId).then(function(response)
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

$scope.internshiplist=[];
$scope.getAllStudInternship=function()
{

   // alert("studId data"+JSON.stringify(studId));
    studInternshipService.getAllInternshipDetails().then(function(response)
    {

        $scope.internshiplist=response.data.result;
           console.log("internshiplist data="+JSON.stringify($scope.internshiplist));       
     
  })
}

$scope.getAllStudInternship();



}]);

newapp1.service("studInternshipService",function($http){



   this.getRegiterDetailbyRid=function(studId)
   {
         return $http.post("http://localhost:8083/"+"getRegiterDetailbyRid/"+studId);
   
   }
    this.getAllInternshipDetails=function()
   {
         return $http.get("http://localhost:8083/"+"getAllInternshipDetails");
   
   }
   })
