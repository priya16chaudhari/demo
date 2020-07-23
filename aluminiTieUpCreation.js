var newapp1=angular.module('aluminiTieUpapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiTieUpcntrl', ['$scope','aluminiTieUpService','$window','$location',function($scope,aluminiTieUpService,$window,$location) {

// alert(" studentSettingcntrl");


// $scope.msg={};
// $scope.msg="No Notification";


 var id11=($window.sessionStorage.getItem('aluId'));
 
 $scope.aluId=id11;



$scope.imgobj={};
$scope.imgobj.aluId=id11;

$scope.tieobj={};



$scope.insertTie=function(tieobj)
{


 
  
  $scope.tieobj.aluminiDetailsModel={};

  $scope.tieobj.aluminiDetailsModel.aluId=id11;
 
var currentDate = new Date();

$scope.tieobj.tieInserted=currentDate;
$scope.tieobj.tieUpdated=currentDate;

  $scope.tieobj.aluminiDetailsModel = angular.fromJson($scope.tieobj.aluminiDetailsModel);

  aluminiTieUpService.insertTieDetailsAlumini($scope.tieobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        alert(" Added successfully");
        // $scope.getBorrower();
        $scope.tieobj={};
        // $scope.getAcaByAluminiIdDetails1($scope.tieobj);
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

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
   aluminiTieUpService.getAluminiRegiterDetailbyRid(aluId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
        if($scope.regobjdata.profileImageAlumini==null)
        {
          $scope.cnt=1;
           $scope.msg="Please Update the Profile";
           $scope.go="aluminiSetting.html";
        //      var host = $window.location.host;
        // var landingUrl = "aluminiSetting.html";
        // $window.location.href = landingUrl;
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

newapp1.service("aluminiTieUpService",function($http){



   this.getAluminiRegiterDetailbyRid=function(aluId)
   {
         return $http.post("http://localhost:8083/"+"getAluminiRegiterDetailbyRid/"+aluId);
   
   }



this.insertTieDetailsAlumini=function(tieobj)
{
      return $http.post("http://localhost:8083/"+"insertTieDetailsAlumini",tieobj);

}

  })
 