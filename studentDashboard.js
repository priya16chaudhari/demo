var newapp1=angular.module('studentDashapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studentDashcntrl', ['$scope','dashService','$window','$location',function($scope,dashService,$window,$location) {

//alert("alaaa dashboard");

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

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
    dashService.getRegiterDetailbyRid(studId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata));

        if($scope.regobjdata.studImage==null)
        {
          $scope.cnt=1;
           $scope.msg="Please Update the Profile";
        //      var host = $window.location.host;
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





}]);

newapp1.service("dashService",function($http){



   this.getRegiterDetailbyRid=function(studId)
   {
         return $http.post("http://localhost:8083/"+"getRegiterDetailbyRid/"+studId);
   
   }
   })
