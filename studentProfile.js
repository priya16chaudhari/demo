var newapp1=angular.module('studentProfileapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studentProfilecntrl', ['$scope','profileService','$window','$location',function($scope,profileService,$window,$location) {

 //alert("profile");

// $scope.msg={};
// $scope.msg="No Notification";

var id11=($window.sessionStorage.getItem('studId'));
 
$scope.studId=id11;

// alert("studId="+JSON.stringify(id11));

$scope.regobjdata={};
$scope.getRegisterDataByid=function(studId)
{

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
    profileService.getRegiterDetailbyRid(studId).then(function(response)
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

$scope.acadamydata=[];
$scope.acadobj={};
$scope.acadobj.studentDetailsModel={};
$scope.acadobj.studentDetailsModel.studId=id11;
$scope.getAcadamicByStudIdDetails1=function(acadobj)
{

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.acadobj.studentDetailsModel = angular.fromJson($scope.acadobj.studentDetailsModel);

    profileService.getAcadamicByStudIdDetails(acadobj).then(function(response)
    {


        $scope.acadamydata=response.data.result;
           console.log("acadamy data="+JSON.stringify($scope.acadamydata));           
     
  })
}

$scope.getAcadamicByStudIdDetails1($scope.acadobj);


$scope.acadamydata1=[];
$scope.extraobj={};
$scope.extraobj.studentDetailsModel={};
$scope.extraobj.studentDetailsModel.studId=id11;
$scope.getExtraByStudIdDetails1=function(extraobj)
{

   // alert("extraobj="+JSON.stringify(extraobj));
    $scope.extraobj.studentDetailsModel = angular.fromJson($scope.extraobj.studentDetailsModel);

    profileService.getExtraByStudIdDetails(extraobj).then(function(response)
    {


        $scope.acadamydata1=response.data.result;

       
      //   $scope.left=[];
      //   $scope.right=[];
      // var len = $scope.acadamydata1.length,
      // mid = len / 2;

      // $scope.left = $scope.acadamydata1.slice(0, mid);
      // // alert("left"+$scope.left.length);
      // $scope.right = $scope.acadamydata1.slice(mid, len);
      // alert("mirightd"+$scope.right.length);

           console.log("extra details data="+JSON.stringify($scope.acadamydata1));           
     
  })
}

$scope.getExtraByStudIdDetails1($scope.extraobj);

$scope.skilldata=[];
$scope.skillobj={};
$scope.skillobj.studentDetailsModel={};
$scope.skillobj.studentDetailsModel.studId=id11;
$scope.getSkillByStudIdDetails1=function(skillobj)
{

   // alert("skillobj="+JSON.stringify(skillobj));
    $scope.skillobj.studentDetailsModel = angular.fromJson($scope.skillobj.studentDetailsModel);

    profileService.getSkillByStudIdDetails(skillobj).then(function(response)
    {


        $scope.skilldata=response.data.result;
           console.log("skill details data="+JSON.stringify($scope.skilldata));           
     
  })
}

$scope.getSkillByStudIdDetails1($scope.skillobj);




}]);
newapp1.service("profileService",function($http){



   this.getRegiterDetailbyRid=function(studId)
   {
         return $http.post("http://localhost:8083/"+"getRegiterDetailbyRid/"+studId);
   
   }
   
   this.getAcadamicByStudIdDetails=function(acadobj)
   {
         return $http.post("http://localhost:8083/"+"getAcadamicByStudIdDetails",acadobj);
   
   }
 this.getExtraByStudIdDetails=function(extraobj)
   {
         return $http.post("http://localhost:8083/"+"getExtraByStudIdDetails",extraobj);
   
   }
    this.getSkillByStudIdDetails=function(skillobj)
   {
         return $http.post("http://localhost:8083/"+"getSkillByStudIdDetails",skillobj);
   
   }

   })