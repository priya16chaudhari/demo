var newapp1=angular.module('aluminiInternapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiInterncntrl', ['$scope','aluminiInternService','$window','$location',function($scope,aluminiInternService,$window,$location) {

// alert(" studentSettingcntrl");


// $scope.msg={};
// $scope.msg="No Notification";


 var id11=($window.sessionStorage.getItem('aluId'));
 
 $scope.aluId=id11;



$scope.imgobj={};
$scope.imgobj.aluId=id11;

$scope.cnt={};
$scope.regobjdata={};

$scope.getRegisterDataByid=function(aluId)
{

  
   aluminiInternService.getAluminiRegiterDetailbyRid(aluId).then(function(response)
    {


        $scope.regobjdata=response.data.result;

        //  alert("loginobj data"+JSON.stringify($scope.regobjdata));

        if($scope.regobjdata.profileImageAlumini==null)
        {
          $scope.cnt=1;
           $scope.msg="Please Update the Profile";
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
 



$scope.internobj={};
// $scope.internobj.aluminiDetailsModel={};

// $scope.internobj.aluminiDetailsModel.aluId=id11;  

$scope.insertInternshipDetails=function(internobj)
{
 
  
var currentDate = new Date();
$scope.internobj.aluminiDetailsModel={};

$scope.internobj.aluminiDetailsModel.aluId=id11;  
$scope.internobj.internInserted=currentDate;

$scope.internobj.internUpdated=currentDate;
  $scope.internobj.aluminiDetailsModel = angular.fromJson($scope.internobj.aluminiDetailsModel);

  aluminiInternService.insertInternshipDetailsAlumini($scope.internobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        alert("Added successfully");
        // $scope.getBorrower();

        $scope.internobj={};
        //$scope.profileobj.profileImg=null;
      }
      else
      {
      alert("not added.");

      }
    
    })
  

}






}]);

newapp1.service("aluminiInternService",function($http){



   this.getAluminiRegiterDetailbyRid=function(aluId)
   {
         return $http.post("http://localhost:8083/"+"getAluminiRegiterDetailbyRid/"+aluId);
   
   }



this.insertInternshipDetailsAlumini=function(internobj)
{
      return $http.post("http://localhost:8083/"+"insertInternshipDetailsAlumini",internobj);

}

  })
 