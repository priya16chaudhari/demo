var newapp1=angular.module('studentloginapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studentlogincntrl', ['$scope','studentLoginService','$window','$location',function($scope,studentLoginService,$window,$location) {

//alert("hiiii login");


$scope.loginobj1={};





$scope.logincheack=function(loginObj1)
{

  // alert("loginobj data"+JSON.stringify($scope.loginObj1));
    studentLoginService.checklogindetails(loginObj1).then(function(response)
    {


        $scope.loginObj1=response.data.result;
          // alert("loginObj1 data"+JSON.stringify($scope.loginObj1));

           if($scope.loginObj1.studUsername==null && $scope.loginObj1.studPassword==null) 
          {
             alert("Unsuccessfully !");
              $scope.loginObj1={};
          }
        else{
          alert("Student Login Successfully!");

    //regId is from StudentDto after student login its id set to sesionstorage
         // $window.sessionStorage.setItem('studId',response.data.result.studId);
          console.log("Student Registration Id ="+$window.sessionStorage.setItem('studId',response.data.result.studLoginId));
           

           var host = $window.location.host;
        var landingUrl = "studentDashboard.html";
        $window.location.href = landingUrl;

        
           $scope.loginObj1=null;

        }
    
      
     
  })
}


}]);

newapp1.service("studentLoginService",function($http){





this.checklogindetails=function(loginObj)
{
      return $http.post("http://localhost:8083/"+"checklogindetails",loginObj);

}

})