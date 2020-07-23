var newapp1=angular.module('studentSettingapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp1.controller('studentSettingcntrl', ['$scope','settingService','$window','$location',function($scope,settingService,$window,$location) {

//alert(" studentSettingcntrl");
$('.widget-content .message').on('click', function () {
  swal({
      title: 'Saved succesfully',
      padding: '2em'
    })
})


// $scope.msg={};
// $scope.msg="No Notification";


 var id11=($window.sessionStorage.getItem('studId'));
 
 $scope.studId=id11;



$scope.imgobj={};
$scope.imgobj.studId=id11;

$scope.obj={};
$scope.obj.studentDetailsModel={};

$scope.obj.studentDetailsModel.studId=id11;

$scope.acadobj={};
$scope.acadobj.studentDetailsModel={};
$scope.acadobj.studentDetailsModel.studId=id11;


$scope.extraobj={};
$scope.extraobj.studentDetailsModel={};
$scope.extraobj.studentDetailsModel.studId=id11;

// alert("studId="+JSON.stringify($scope.imgobj.studId));

$scope.regobjdata={};
$scope.studId=id11;
$scope.getRegisterDataByid=function(studId)
{

   // alert("loginobj data"+JSON.stringify($scope.loginObj1));
    settingService.getRegiterDetailbyRid(studId).then(function(response)
    {


        $scope.regobjdata=response.data.result;
           console.log("regobjdata data"+JSON.stringify($scope.regobjdata));   
          if ($scope.regobjdata.studBio!=null) {
            $scope.imgobj.studBio=$scope.regobjdata.studBio;
          }         
        if ($scope.regobjdata.studImage!=null) {
            $scope.imgobj.studImage=$scope.regobjdata.studImage;
          } 


          
         if($scope.regobjdata.studImage==null)
        {
          $scope.cnt=1;
           $scope.msg="Please Update the Profile";
              $scope.go="studentSetting.html";
        //       var host = $window.location.host;
        // var landingUrl = "studentSetting.html";
        // $window.location.href = landingUrl;
        }
        else
        {
          $scope.cnt=0;
          $scope.msg="No Notification";
        }
  })
}

$scope.getRegisterDataByid($scope.studId);



$scope.update=function(imgobj)
{
	$scope.filePath();
	//$scope.imgobj.studentDetailsModel = angular.fromJson($scope.imgobj.studentDetailsModel);

        // alert("img"+JSON.stringify(imgobj.studImage));
 settingService.updateImage(imgobj).then(function(response)
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
    $scope.imgobj.studImage = res;
   // alert("urllll"+JSON.stringify( $scope.imgobj.studImage)); 
}  

//skill list push

$scope.obj={};
$scope.list1=[];
$scope.obj.skillList=[];



$scope.go=function(obj)
{
$scope.temp={};
$scope.temp.extraSkill=obj.extraSkill;

$scope.temp.skillRate=obj.skillRate;
$scope.list1.push($scope.temp);


//$scope.obj.skillList=$scope.list1;

// $scope.temp.rate=obj.rate;
// $scope.list1.push('rate',$scope.temp.rate);
//alert("skillobj="+JSON.stringify($scope.skillobj));

//skill rate
//alert("listtt"+JSON.stringify($scope.list1));

$scope.temp.studentDetailsModel={};

$scope.temp.studentDetailsModel.studId=id11;  

  $scope.obj.studentDetailsModel = angular.fromJson($scope.obj.studentDetailsModel);

  settingService.insertSkillsDetails($scope.temp).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        //alert("Skills Added successfully");
        // $scope.getBorrower();
        $scope.getSkillByStudIdDetails1($scope.temp);

        //$scope.profileobj.profileImg=null;
      }
      else
      {
        //alert("Skillss not added.");

      }
    
    })

$scope.obj={};
}



$scope.extraobj={};
$scope.list11=[];
$scope.extraobj.skillList1=[];

$scope.go3=function(extraobj)
{
  $scope.temp3={};
$scope.temp3.extraExtra=extraobj.extraExtra;

$scope.temp3.extraStatus=extraobj.extraStatus;
$scope.list11.push($scope.temp3);


//$scope.obj.skillList=$scope.list1;

// $scope.temp.rate=obj.rate;
// $scope.list1.push('rate',$scope.temp.rate);
//alert("skillobj="+JSON.stringify($scope.skillobj));

//skill rate
//alert("listtt"+JSON.stringify($scope.list1));

$scope.temp3.studentDetailsModel={};

$scope.temp3.studentDetailsModel.studId=id11;  

	 $scope.extraobj.studentDetailsModel = angular.fromJson($scope.extraobj.studentDetailsModel);
	 
	settingService.insertExtraDetails($scope.temp3).then(function(response)
    {
      if(response.data.statusCode==200)
      {
       // alert("Extra Acadamic Added successfully");

        $scope.getExtraByStudIdDetails1($scope.temp3);

 
      }
      else
      {
       // alert("Extra Acadamic not added.");

      }
    
    })
  $scope.extraobj={};
}


$scope.statuslist=['Completed','Incomplete','Pursuing'];

$scope.eduobj={};
$scope.eduobj.edulist={};
$scope.list2=[];
$scope.go1=function(eduobj)
{
  $scope.temp1={};
  $scope.temp1.studAYear=eduobj.studAYear;
  
  $scope.temp1.studPer=eduobj.studPer;
  $scope.list2.push($scope.temp1);
  
  
  $scope.eduobj.edulist=$scope.list2;
  // $scope.temp.rate=obj.rate;
  // $scope.list1.push('rate',$scope.temp.rate);
  // alert("eduobj="+JSON.stringify($scope.eduobj));
  // alert("listtt"+JSON.stringify($scope.list2));
  

  $scope.temp1.studentDetailsModel={};

$scope.temp1.studentDetailsModel.studId=id11;  

  $scope.eduobj.studentDetailsModel = angular.fromJson($scope.eduobj.studentDetailsModel);

  settingService.insertAcadamicDetails($scope.temp1).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        //alert("Education Added successfully");
        // $scope.getBorrower();

        $scope.getAcadamicByStudIdDetails1($scope.temp1);
        //$scope.profileobj.profileImg=null;
      }
      else
      {
        //alert("Education not added.");

      }
    
    })
  
  $scope.eduobj={};
}











//get lists by studId student regisration Id

$scope.acadamydata=[];
$scope.acadobj={};
$scope.acadobj.studentDetailsModel={};
$scope.acadobj.studentDetailsModel.studId=id11;

$scope.updatebtnAcad=false;
$scope.addbtnAcad=true;
$scope.getAcadamicByStudIdDetails1=function(acadobj)
{
    

   // alert("acadobj="+JSON.stringify(acadobj));
    $scope.acadobj.studentDetailsModel = angular.fromJson($scope.acadobj.studentDetailsModel);

    settingService.getAcadamicByStudIdDetails(acadobj).then(function(response)
    {


        $scope.acadamydata=response.data.result;
           console.log("acadamy data="+JSON.stringify($scope.acadamydata)); 

        if($scope.acadamydata!=null)
        {
           $scope.list2=$scope.acadamydata; 
                  
        }             
        
  })
}
$scope.getAcadamicByStudIdDetails1($scope.acadobj);

$scope.editAcadamy=function(row2)
{
  $scope.eduobj=row2;
  //alert("eduobj studAcadId="+JSON.stringify($scope.eduobj.studAcadId));
   $scope.updatebtnAcad=true;
  $scope.addbtnAcad=false; 
}


$scope.updateAcadamy=function(eduobj)
{


  settingService.updateEducation(eduobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Education updated successfully");
        $scope.updatebtnAcad=false;
$scope.addbtnAcad=true;
          $scope.eduobj=null;
        
      }
      else
      {
        // alert("Education not updated.");
        $scope.eduobj=null;
      }
    
    })
}




$scope.acadamydata1=[];
$scope.extraobj={};
$scope.extraobj.studentDetailsModel={};
$scope.extraobj.studentDetailsModel.studId=id11;
$scope.getExtraByStudIdDetails1=function(extraobj)
{

   // alert("extraobj="+JSON.stringify(extraobj));
    $scope.extraobj.studentDetailsModel = angular.fromJson($scope.extraobj.studentDetailsModel);

    settingService.getExtraByStudIdDetails(extraobj).then(function(response)
    {


        $scope.acadamydata1=response.data.result;
           console.log("extra details data="+JSON.stringify($scope.acadamydata1));   

           if($scope.acadamydata1!=null)
        {
           $scope.list11=$scope.acadamydata1; 
                  
        }           
     
  })
}

$scope.updatebtnExtra=false;
  $scope.addbtnExtra=true; 
$scope.editExtra=function(row2)
{
  $scope.extraobj=row2;
  //alert("eduobj studAcadId="+JSON.stringify($scope.eduobj.studAcadId));
   $scope.updatebtnExtra=true;
  $scope.addbtnExtra=false; 
}


$scope.updateExtra=function(extraobj)
{


  settingService.updateExtra(extraobj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Extra Activity updated successfully");
          $scope.updatebtnExtra=false;
  $scope.addbtnExtra=true; 
          $scope.extraobj=null;
        
      }
      else
      {
        // alert("Extra Activity not updated.");
        $scope.extraobj=null;
      }
    
    })
}



 $scope.getExtraByStudIdDetails1($scope.extraobj);

$scope.skilldata=[];
$scope.skillobj={};
$scope.skillobj.studentDetailsModel={};
$scope.skillobj.studentDetailsModel.studId=id11;
$scope.getSkillByStudIdDetails1=function(skillobj)
{

   // alert("skillobj="+JSON.stringify(skillobj));
    $scope.skillobj.studentDetailsModel = angular.fromJson($scope.skillobj.studentDetailsModel);

    settingService.getSkillByStudIdDetails(skillobj).then(function(response)
    {


        $scope.skilldata=response.data.result;
           console.log("skill details data="+JSON.stringify($scope.skilldata)); 


           if($scope.skilldata!=null)
        {
           $scope.list1=$scope.skilldata; 
                  
        }   

  })
}

 $scope.getSkillByStudIdDetails1($scope.skillobj);

$scope.updatebtnSkill=false;
  $scope.addbtnSkill=true; 
$scope.editSkill=function(row2)
{
  $scope.obj=row2;
  // alert("eduobj studAcadId="+JSON.stringify($scope.obj.skillId));
   $scope.updatebtnSkill=true;
  $scope.addbtnSkill=false; 
}


$scope.updateSkill=function(obj)
{


  settingService.updateSkill(obj).then(function(response)
    {
      if(response.data.statusCode==200)
      {
        // alert("Skills updated successfully");
          $scope.updatebtnSkill=false;
  $scope.addbtnSkill=true; 
          $scope.obj=null;
        
      }
      else
      {
        // alert("Skills not updated.");
        $scope.obj=null;
      }
    
    })
}






















}]);

newapp1.service("settingService",function($http){



   this.getRegiterDetailbyRid=function(studId)
   {
         return $http.post("http://localhost:8083/"+"getRegiterDetailbyRid/"+studId);
   
   }

   this.updateImage=function(imgobj)
{
      return $http.post("http://localhost:8083/"+"updateImage",imgobj);

}

    this.insertSkillsDetails=function(temp)
{
      return $http.post("http://localhost:8083/"+"insertSkillsDetails",temp);

}
    this.insertAcadamicDetails=function(temp1)
{
      return $http.post("http://localhost:8083/"+"insertAcadamicDetails",temp1);

}

    this.insertExtraDetails=function(temp3)
{
      return $http.post("http://localhost:8083/"+"insertExtraDetails",temp3);

}

 this.getAcadamicByStudIdDetails=function(acadobj)
   {
         return $http.post("http://localhost:8083/"+"getAcadamicByStudIdDetails",acadobj);
   
   }
 this.getExtraByStudIdDetails=function(extraobj)
   {
         return $http.post("http://localhost:8083/"+"getExtraByStudIdDetails",extraobj);
   
   }
    this.getSkillByStudIdDetails=function(skillobj)
   {
         return $http.post("http://localhost:8083/"+"getSkillByStudIdDetails",skillobj);
   
   }

this.updateEducation=function(eduobj)
   {
         return $http.post("http://localhost:8083/"+"updateEducation",eduobj);
   
   }

this.updateExtra=function(extraobj)
   {
         return $http.post("http://localhost:8083/"+"updateExtra",extraobj);
   
   }
   
this.updateSkill=function(obj)
   {
         return $http.post("http://localhost:8083/"+"updateSkill",obj);
   
   }

  })
