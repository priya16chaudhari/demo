var newapp1=angular.module('aluminiregisterapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiregistercntrl', ['$scope','aluminiRegisterService','$window','$location',function($scope,aluminiRegisterService,$window,$location) {

var f1 = flatpickr(document.getElementById('basicFlatpickr'));




   $scope.departmentlist=['Computer science','Computer','Electronics'];
     $scope.acedemicyear=['FY','SY','TY','PG'];
     $scope.genderlist=['female','male'];

     $scope.loginobj={};

$scope.go=function(loginobj)
{

// alert("loginobj"+JSON.stringify(loginobj));

  aluminiRegisterService.insertAluminiDetails(loginobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        alert("Registration successfully");
       

        $scope.loginobj=null;
     
      }
      else
      {
        alert(" Registration unSuccessfully ");
            $scope.loginobj=null;
      }
    
    })
}




// $scope.logincheack=function(loginObj1)
// {

//    // alert("loginobj data"+JSON.stringify($scope.loginObj1));
//     studentLoginService.cheacklogindetails(loginObj1).then(function(response)
//     {


//         $scope.loginObj1=response.data.result;
//            // alert("loginObj1 data"+JSON.stringify($scope.loginObj1));

//            if($scope.loginObj1.username==null && $scope.loginObj1.password==null) 
//           {
//              alert("unSuccessfully Successfully!");
//               $scope.loginObj1=null;
//           }
//         else{
//           alert("Student Login Successfully!");

//     //regId is from StudentDto after student login its id set to sesionstorage
//            $window.sessionStorage.setItem('studRegId',response.data.result.regId);
//            // alert("Student Registration Id ="+$window.sessionStorage.setItem('studRegId',response.data.result.regId));
           

//            var host = $window.location.host;
//         var landingUrl = "studentpostshow.html";
//         $window.location.href = landingUrl;

        
//            $scope.loginObj1=null;

//         }
    
      
     
//   })
// }


}]);

newapp1.service("aluminiRegisterService",function($http){



 this.insertAluminiDetails=function(loginobj)
{
      return $http.post("http://localhost:8083/"+"insertAluminiDetails",loginobj);

}


})