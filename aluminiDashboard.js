var newapp1=angular.module('aluminiDashapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiDashcntrl', ['$scope','aluminidashService','$window','$location',function($scope,aluminidashService,$window,$location) {

//alert("alaaa dashboard");

 var id11=($window.sessionStorage.getItem('aluId'));
 
 $scope.aluId=id11;


$scope.cnt={};
$scope.msg={};

$scope.imgobj={};
$scope.imgobj.aluId=id11;
// alert("aluId="+JSON.stringify($scope.imgobj.aluId));

$scope.regobjdata={};
$scope.aluId=id11;
$scope.getRegisterDataByid=function(aluId)
{

   // alert("aluId data"+JSON.stringify(aluId));
    aluminidashService.getAluminiRegiterDetailbyRid(aluId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata));

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
     
  })
}

$scope.getRegisterDataByid($scope.aluId);


$scope.msgcheck=function()
{

}

}]);

newapp1.service("aluminidashService",function($http){



   this.getAluminiRegiterDetailbyRid=function(aluId)
   {
         return $http.post("http://localhost:8083/"+"getAluminiRegiterDetailbyRid/"+aluId);
   
   }
   })
