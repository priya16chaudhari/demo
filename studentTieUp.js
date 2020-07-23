
var newapp1=angular.module('studTieUpapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studTieUpcntrl', ['$scope','studTieUpService','$window','$location',function($scope,studTieUpService,$window,$location) {

//alert("student Tie-Up");

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
    studTieUpService.getRegiterDetailbyRid(studId).then(function(response)
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


$scope.tieuplist=[];
$scope.getAllStudTieUp=function()
{

   // alert("studId data"+JSON.stringify(studId));
    studTieUpService.getAllTieUpDetails().then(function(response)
    {

        $scope.tieuplist=response.data.result;
           console.log("tieuplist data="+JSON.stringify($scope.tieuplist));       
     
  })
}

$scope.getAllStudTieUp();


}]);

newapp1.service("studTieUpService",function($http){



   this.getRegiterDetailbyRid=function(studId)
   {
         return $http.post("http://localhost:8083/"+"getRegiterDetailbyRid/"+studId);
   
   }
    this.getAllTieUpDetails=function()
   {
         return $http.get("http://localhost:8083/"+"getAllTieUpDetails");
   
   }
   })
