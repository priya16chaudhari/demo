
var newapp1=angular.module('aluminiJobapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiJobcntrl', ['$scope','aluminiJobService','$window','$location',function($scope,aluminiJobService,$window,$location) {

// alert(" studentSettingcntrl");

var f3 = flatpickr(document.getElementById('rangeCalendarFlatpickr'), {
  mode: "range"
});

// $scope.msg={};
// $scope.msg="No Notification";


 var id11=($window.sessionStorage.getItem('aluId'));
 
 $scope.aluId=id11;



$scope.imgobj={};
$scope.imgobj.aluId=id11;


$scope.jobobj={};


$scope.insertJob=function(jobobj)
{

  var str=jobobj.jobValPeriodTo;
  var somevalue = str.substring(13,24); // seperates string from 10 characters 
  var lessthan = str.substring(0,10); // seperates string from 10 characters 
  
  $scope.jobobj.jobValPeriodTo=lessthan;
  $scope.jobobj.jobValPeriodFrom=somevalue;
// alert("to"+JSON.stringify($scope.jobobj.jobValPeriodTo));
// alert("from"+JSON.stringify( $scope.jobobj.jobValPeriodFrom));



  $scope.jobobj.aluminiDetailsModel={};

  $scope.jobobj.aluminiDetailsModel.aluId=id11; 
  
// alert("obj"+JSON.stringify($scope.jobobj));
 
var currentDate = new Date();

$scope.jobobj.jobInsertedAt=currentDate;
$scope.jobobj.jobUpdateAt=currentDate;

  $scope.jobobj.aluminiDetailsModel = angular.fromJson($scope.jobobj.aluminiDetailsModel);

  aluminiJobService.insertJobDetailsAlumini($scope.jobobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        alert(" Added successfully");
        // $scope.getBorrower();
        $scope.jobobj={};
        // $scope.getAcaByAluminiIdDetails1($scope.jobobj);
        //$scope.profileobj.profileImg=null;
      }
      else
      {
        alert(" not added.");

      }
    
    })
  

}




$scope.cnt={};
$scope.regobjdata={};

$scope.getRegisterDataByid=function(aluId)
{


   aluminiJobService.getAluminiRegiterDetailbyRid(aluId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
          //  alert("loginobj data"+JSON.stringify($scope.regobjdata));
        if($scope.regobjdata.profileImageAlumini==null)
        {
          $scope.cnt=1;
           $scope.msg="Please Update the Profile";
        //      var host = $window.location.host;
        // var landingUrl = "aluminiSetting.html";
        // $window.location.href = landingUrl;
          $scope.go="aluminiSetting.html";
        }
        else
        {
          $scope.cnt=0;
          $scope.msg="No Notification";
        }
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata));   
          
  })
}

$scope.getRegisterDataByid($scope.aluId);
 


}]);

newapp1.service("aluminiJobService",function($http){



   this.getAluminiRegiterDetailbyRid=function(aluId)
   {
         return $http.post("http://localhost:8083/"+"getAluminiRegiterDetailbyRid/"+aluId);
   
   }



this.insertJobDetailsAlumini=function(jobobj)
{
      return $http.post("http://localhost:8083/"+"insertJobDetailsAlumini",jobobj);

}

  })
 