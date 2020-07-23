
var newapp1=angular.module('aluminiSettingapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('aluminiSettingcntrl', ['$scope','aluminisettingService','$window','$location',function($scope,aluminisettingService,$window,$location) {

// alert(" studentSettingcntrl");
$('.widget-content .message').on('click', function () {
  swal({
      title: 'Saved succesfully',
      padding: '2em'
    })
})


// $scope.msg={};
// $scope.msg="No Notification";


 var id11=($window.sessionStorage.getItem('aluId'));
 
 $scope.aluId=id11;



$scope.imgobj={};
$scope.imgobj.aluId=id11;



// alert("studId="+JSON.stringify($scope.imgobj.aluId));

$scope.regobjdata={};

$scope.getRegisterDataByid=function(aluId)
{

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
    aluminisettingService.getAluminiRegiterDetailbyRid(aluId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata));   
          if ($scope.regobjdata.aluminBio!=null) {
            $scope.imgobj.aluminBio=$scope.regobjdata.aluminBio;
          }         
        if ($scope.regobjdata.profileImageAlumini!=null) {
            $scope.imgobj.profileImageAlumini=$scope.regobjdata.profileImageAlumini;
          } 

           if ($scope.regobjdata.githubLink!=null) {
            $scope.imgobj.githubLink=$scope.regobjdata.githubLink;
          } 

           if ($scope.regobjdata.linkedUrl!=null) {
            $scope.imgobj.linkedUrl=$scope.regobjdata.linkedUrl;
          } 

          if($scope.regobjdata.profileImageAlumini==null)
          {
            $scope.cnt=1;
             $scope.msg="Please Update the Profile";
             $scope.go="aluminiSetting.html";
        //        var host = $window.location.host;
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

$scope.getRegisterDataByid($scope.aluId);
 


$scope.update=function(imgobj)
{
   $scope.imgobj.updatedDate={};
  var currentDate = new Date();
  $scope.imgobj.updatedDate=currentDate;
  // alert("current Date"+currentDate);
  //   alert("$scope.cDate Date"+$scope.cDate);

	$scope.filePath();
	//$scope.imgobj.studentDetailsModel = angular.fromJson($scope.imgobj.studentDetailsModel);

  
  aluminisettingService.updateImageAlumini(imgobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        //alert("Image updated successfully");
        // $scope.getProfile();
        $scope.imgobj=null;
      }
      else
      {
       // alert("Image not updated");
      }
    
    })

}


$scope.filePath=function()
{
   var path = "images/profile/"
   var x = document.getElementById("input-file-max-fs").value;
   var res = x.replace("C:\\fakepath\\", path);
  //document.getElementById("demo").innerHTML = res;

    // alert(x);
    // alert(res);
    $scope.imgobj.profileImageAlumini = res;
   // alert("urllll"+JSON.stringify( $scope.imgobj.studImage)); 
}  




$scope.statuslist=['Completed','Incomplete','Pursuing'];

$scope.workobj={};
$scope.workobj.workList={};
$scope.list2=[];
$scope.go1=function(workobj)
{
  $scope.temp1={};
  $scope.temp1.companyWork=workobj.companyWork;
  
  $scope.temp1.positionWork=workobj.positionWork;
    
  $scope.temp1.startDateWork=workobj.startDateWork;

  $scope.temp1.endDateWork=workobj.endDateWork;

  $scope.list2.push($scope.temp1);
  
  
  $scope.workobj.workList=$scope.list2;
  // $scope.temp.rate=obj.rate;
  // $scope.list1.push('rate',$scope.temp.rate);
  // alert("workobj="+JSON.stringify($scope.workobj));
  // alert("listtt"+JSON.stringify($scope.list2));
  

  $scope.temp1.aluminiDetailsModel={};

$scope.temp1.aluminiDetailsModel.aluId=id11;  
var currentDate = new Date();

$scope.temp1.updatedAtWork=currentDate;
  $scope.workobj.aluminiDetailsModel = angular.fromJson($scope.workobj.aluminiDetailsModel);

  aluminisettingService.insertWorkDetails($scope.temp1).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education Added successfully");
        // $scope.getBorrower();

        $scope.getWorkByAluminiIdDetails1($scope.temp1);
        //$scope.profileobj.profileImg=null;
      }
      else
      {
        // alert("Education not added.");

      }
    
    })
  
  $scope.workobj={};
}



$scope.addbtnextra=true;

$scope.updatebtnextra=false;
$scope.extraobj={};
$scope.extraobj.extraList={};
$scope.extralist1=[];
$scope.insertExtra=function(extraobj)
{
  $scope.temp1={};
  $scope.temp1.aluminiAchievement=extraobj.aluminiAchievement;
  
  $scope.temp1.aluminidetails=extraobj.aluminidetails;
    
  

  $scope.extralist1.push($scope.temp1);
  
  
  $scope.extraobj.extraList=$scope.extralist1;
  // $scope.temp.rate=obj.rate;
  // $scope.list1.push('rate',$scope.temp.rate);
  // alert("workobj="+JSON.stringify($scope.extraobj));
  // alert("listtt"+JSON.stringify($scope.list2));
  

  $scope.temp1.aluminiDetailsModel={};

$scope.temp1.aluminiDetailsModel.aluId=id11;  
var currentDate = new Date();

$scope.temp1.updatedExtraDate=currentDate;
  $scope.extraobj.aluminiDetailsModel = angular.fromJson($scope.extraobj.aluminiDetailsModel);

  aluminisettingService.insertExtraDetailsAlumini($scope.temp1).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education Added successfully");
        // $scope.getBorrower();

        scope.getExtraByAluminiIdDetails1($scope.extraobj);
        //$scope.profileobj.profileImg=null;
      }
      else
      {
        // alert("Education not added.");

      }
    
    })
  
  $scope.extraobj={};
}




$scope.extradata=[];
$scope.extraobj={};
$scope.extraobj.aluminiDetailsModel={};
$scope.extraobj.aluminiDetailsModel.aluId=id11;


$scope.getExtraByAluminiIdDetails1=function(extraobj)
{
    

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.extraobj.aluminiDetailsModel = angular.fromJson($scope.extraobj.aluminiDetailsModel);

    aluminisettingService.getExtraByAluminiIdDetails(extraobj).then(function(response)
    {


        $scope.extradata=response.data.result;
           console.log("extradata data="+JSON.stringify($scope.extradata)); 

        if($scope.extradata!=null)
        {
           $scope.extralist1=$scope.extradata; 
                  
        }             
        
  })
}
$scope.getExtraByAluminiIdDetails1($scope.extraobj);

$scope.editExtra=function(row2)
{
  $scope.extraobj=row2;
  //alert("workobj studAcadId="+JSON.stringify($scope.extraobj));
  

   $scope.addbtnextra=false;
  $scope.updatebtnextra=true; 
}


$scope.updateExtra=function(extraobj)
{
  var currentDate = new Date();
  $scope.extraobj.updatedExtraDate=currentDate;

  aluminisettingService.updateExtraData(extraobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education updated successfully");
        $scope.addbtnextra=true;
        $scope.updatebtnextra=false; 
          $scope.extraobj=null;
        
      }
      else
      {
        // alert("Education not updated.");
        $scope.extraobj=null;
      }
    
    })
}









//get lists by studId student regisration Id

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

    aluminisettingService.getWorkAluminiByaluIdDetails(workobj).then(function(response)
    {


        $scope.workdata=response.data.result;
           console.log("workdata data="+JSON.stringify($scope.workdata)); 

        if($scope.workdata!=null)
        {
           $scope.list2=$scope.workdata; 
                  
        }             
        
  })
}
$scope.getWorkByAluminiIdDetails1($scope.workobj);

$scope.editWork=function(row2)
{
  $scope.workobj=row2;
  //alert("workobj studAcadId="+JSON.stringify($scope.workobj));
  

  $scope.workobj.startDateWork = new Date($scope.workobj.startDateWork);
  $scope.workobj.endDateWork = new Date($scope.workobj.endDateWork);
   $scope.updatebtnAcad=true;
  $scope.addbtnAcad=false; 
}


$scope.updateWork=function(workobj)
{
  var currentDate = new Date();
  $scope.workobj.updatedAtWork=currentDate;

  aluminisettingService.updateWorkData(workobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education updated successfully");
        $scope.updatebtnAcad=false;
$scope.addbtnAcad=true;
          $scope.workobj=null;
        
      }
      else
      {
        // alert("Education not updated.");
        $scope.workobj=null;
      }
    
    })
}








$scope.addbtnAca=true;


$scope.updatebtnAca=false;

$scope.acaobj={};
$scope.acaobj.acaList={};
$scope.acalist1=[];
$scope.insertAca=function(acaobj)
{
  $scope.temp1={};
    

  $scope.temp1.collegeName=acaobj.collegeName;

  $scope.temp1.achievementAlumini=acaobj.achievementAlumini;
  
  $scope.temp1.yearAcademics=acaobj.yearAcademics;
    
  

  $scope.acalist1.push($scope.temp1);
  
  
  $scope.acaobj.acaList=$scope.acalist1;
  // $scope.temp.rate=obj.rate;
  // $scope.list1.push('rate',$scope.temp.rate);
  
  

  $scope.temp1.aluminiDetailsModel={};

$scope.temp1.aluminiDetailsModel.aluId=id11;  
var currentDate = new Date();

$scope.temp1.updatedDateaca=currentDate;
  $scope.acaobj.aluminiDetailsModel = angular.fromJson($scope.acaobj.aluminiDetailsModel);

  aluminisettingService.insertAcaDetailsAlumini($scope.temp1).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education Added successfully");
        // $scope.getBorrower();

        $scope.getAcaByAluminiIdDetails1($scope.temp1);
        //$scope.profileobj.profileImg=null;
      }
      else
      {
        // alert("Education not added.");

      }
    
    })
  
  $scope.acaobj={};
}




$scope.acadata=[];
$scope.acaobj={};
$scope.acaobj.aluminiDetailsModel={};
$scope.acaobj.aluminiDetailsModel.aluId=id11;


$scope.getAcaByAluminiIdDetails1=function(acaobj)
{
    

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.acaobj.aluminiDetailsModel = angular.fromJson($scope.acaobj.aluminiDetailsModel);

    aluminisettingService.getAcaByAluminiIdDetails2(acaobj).then(function(response)
    {


        $scope.acadata=response.data.result;
           console.log("extradata data="+JSON.stringify($scope.acadata)); 

        if($scope.acadata!=null)
        {
           $scope.acalist1=$scope.acadata; 
                  
        }             
        
  })
}
$scope.getAcaByAluminiIdDetails1($scope.acaobj);

$scope.editAca=function(row2)
{
  $scope.acaobj=row2;
  // alert("acaobj studAcadId="+JSON.stringify($scope.acaobj));
  

   $scope.addbtnAca=false;
  $scope.updatebtnAca=true; 
  
}


$scope.updateAca=function(acaobj)
{
  var currentDate = new Date();
  $scope.acaobj.updatedDate=currentDate;

  aluminisettingService.updateAcaData(acaobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education updated successfully");
        $scope.addbtnAca=true;
        $scope.updatebtnAca=false; 
          $scope.acaobj=null;
        
      }
      else
      {
        // alert("Education not updated.");
        $scope.acaobj=null;
      }
    
    })
}








}]);

newapp1.service("aluminisettingService",function($http){



   this.getAluminiRegiterDetailbyRid=function(aluId)
   {
         return $http.post("http://localhost:8083/"+"getAluminiRegiterDetailbyRid/"+aluId);
   
   }

   this.updateImageAlumini=function(imgobj)
{
      return $http.post("http://localhost:8083/"+"updateImageAlumini",imgobj);

}




this.insertWorkDetails=function(temp1)
{
      return $http.post("http://localhost:8083/"+"insertWorkDetails",temp1);

}

this.insertAcaDetailsAlumini=function(temp1)
{
      return $http.post("http://localhost:8083/"+"insertAcaDetailsAlumini",temp1);

}
this.insertExtraDetailsAlumini=function(temp1)
{
      return $http.post("http://localhost:8083/"+"insertExtraDetailsAlumini",temp1);

}
this.updateWorkData=function(workobj)
   {
         return $http.post("http://localhost:8083/"+"updateWorkData",workobj);
   
   }
   
   this.updateExtraData=function(extraobj)
   {
         return $http.post("http://localhost:8083/"+"updateExtraData",extraobj);
   
   }
    
   this.updateAcaData=function(acaobj)
   {
         return $http.post("http://localhost:8083/"+"updateAcaData",acaobj);
   
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
 