var newapp1=angular.module('aluminiProfileapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiProfilecntrl', ['$scope','aluminiprofileService','$window','$location',function($scope,aluminiprofileService,$window,$location) {

//  alert("profile");

// $scope.msg={};
// $scope.msg="No Notification";

var id11=($window.sessionStorage.getItem('aluId'));
 
$scope.aluId=id11;

// alert("studId="+JSON.stringify(id11));

$scope.regobjdata={};
$scope.getAluminiRegiterDetailbyRid=function(aluId)
{

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
   aluminiprofileService.getAluminiRegiterDetailbyRid(aluId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata)); 
           
           if($scope.regobjdata.profileImageAlumini==null)
           {
             $scope.cnt=1;
              $scope.msg="Please Update the Profile";
              $scope.go="aluminiSetting.html";
        //         var host = $window.location.host;
        // var landingUrl = "aluminiSetting.html";
        // $window.location.href = landingUrl;
           }
           else
           {
             $scope.cnt=0;
             $scope.msg="No Notification";
           }
     
  })
}

$scope.getAluminiRegiterDetailbyRid($scope.aluId);




$scope.extradata=[];
$scope.extraobj={};
$scope.extraobj.aluminiDetailsModel={};
$scope.extraobj.aluminiDetailsModel.aluId=id11;


$scope.getExtraByAluminiIdDetails1=function(extraobj)
{
    

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.extraobj.aluminiDetailsModel = angular.fromJson($scope.extraobj.aluminiDetailsModel);

    aluminiprofileService.getExtraByAluminiIdDetails(extraobj).then(function(response)
    {


        $scope.extradata=response.data.result;
           console.log("extradata data="+JSON.stringify($scope.extradata)); 

      //   if($scope.extradata!=null)
      //   {
      //      $scope.extralist1=$scope.extradata; 
                  
      //   }             
        
  })
}
$scope.getExtraByAluminiIdDetails1($scope.extraobj);



$scope.acadata=[];
$scope.acaobj={};
$scope.acaobj.aluminiDetailsModel={};
$scope.acaobj.aluminiDetailsModel.aluId=id11;


$scope.getAcaByAluminiIdDetails1=function(acaobj)
{
    

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.acaobj.aluminiDetailsModel = angular.fromJson($scope.acaobj.aluminiDetailsModel);

    aluminiprofileService.getAcaByAluminiIdDetails2(acaobj).then(function(response)
    {


        $scope.acadata=response.data.result;
           console.log("extradata data="+JSON.stringify($scope.acadata)); 

      //   if($scope.acadata!=null)
      //   {
      //      $scope.acalist1=$scope.acadata; 
                  
      //   }             
        
  })
}
$scope.getAcaByAluminiIdDetails1($scope.acaobj);



$scope.workdata=[];
$scope.workobj={};
$scope.workobj.aluminiDetailsModel={};
$scope.workobj.aluminiDetailsModel.aluId=id11;

$scope.updatebtnAcad=false;
$scope.addbtnAcad=true;
$scope.getWorkByAluminiIdDetails1=function(workobj)
{
    

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.workobj.aluminiDetailsModel = angular.fromJson($scope.workobj.aluminiDetailsModel);

    aluminiprofileService.getWorkAluminiByaluIdDetails(workobj).then(function(response)
    {


        $scope.workdata=response.data.result;
           console.log("workdata data="+JSON.stringify($scope.workdata)); 

      //   if($scope.workdata!=null)
      //   {
      //      $scope.list2=$scope.workdata; 
                  
      //   }             
        
  })
}
$scope.getWorkByAluminiIdDetails1($scope.workobj);

}]);
newapp1.service("aluminiprofileService",function($http){



   this.getAluminiRegiterDetailbyRid=function(aluId)
   {
         return $http.post("http://localhost:8083/"+"getAluminiRegiterDetailbyRid/"+aluId);
   
   }
   


   this.getWorkAluminiByaluIdDetails=function(workobj)
   {
         return $http.post("http://localhost:8083/"+"getWorkAluminiByaluIdDetails",workobj);
   
   }
   
   this.getExtraByAluminiIdDetails=function(extraobj)
   {
         return $http.post("http://localhost:8083/"+"getExtraByAluminiIdDetails",extraobj);
   
   }


   this.getAcaByAluminiIdDetails2=function(acaobj)
   {
         return $http.post("http://localhost:8083/"+"getAcaByAluminiIdDetails2",acaobj);
   
   }

   })