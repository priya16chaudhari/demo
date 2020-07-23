var newapp1=angular.module('aluminiloginapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminilogincntrl', ['$scope','aluminiLoginService','$window','$location',function($scope,aluminiLoginService,$window,$location) {

//alert("hiiii login");


$scope.loginobj1={};





$scope.logincheack=function(loginObj1)
{

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
    aluminiLoginService.checkAluminiLogindetails(loginObj1).then(function(response)
    {


        $scope.loginObj1=response.data.result;
          // alert("loginObj1 data ***"+JSON.stringify($scope.loginObj1));

           if($scope.loginObj1.aluUsername==null && $scope.loginObj1.aluPassword==null) 
          {
             alert("Unsuccessfull!");
              $scope.loginObj1={};
          }
        else{
          alert("alumini Login Successfully!");
            $scope.loginObj1={};
  
    //regId is from StudentDto after student login its id set to sesionstorage
         // $window.sessionStorage.setItem('studId',response.data.result.studId);
          console.log("alumini Registration Id ="+$window.sessionStorage.setItem('aluId',response.data.result.aluLoginId));
           

           var host = $window.location.host;
        var landingUrl = "aluminiDashboard.html";
        $window.location.href = landingUrl;

        
         
        }
    
      
     
  })
}


}]);

newapp1.service("aluminiLoginService",function($http){





this.checkAluminiLogindetails=function(loginObj)
{
      return $http.post("http://localhost:8083/"+"checkAluminiLogindetails",loginObj);

}

})