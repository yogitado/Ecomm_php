$(document).ready(function() {
    $('#example').dataTable();
	    $('#button_home').click(function(){
		alert('button clicked');
		console.log("button click");
		window.location="../ecomm_project/index.php";
    });
	$('#button_login').click(function(){
		alert('button clicked');
		console.log("button click");	
		window.location="../ecomm_project/LoginPageincluded.php";
    });  
	$('#button_signup').click(function(){
		alert('button clicked');
		console.log("button click");	
		window.location="../ecomm_project/SignupPageincluded.php";
    });
	$('#button_logout').click(function(){
		alert('button clicked');
		console.log("button click");	
		window.location="../ecomm_project/SignOutPageincluded.php";
    });
	$('#back_to_shopping').click(function(){
		window.location="index.php";	
    });	
});