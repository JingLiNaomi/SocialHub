<?php 
$con = new mysqli("localhost","root","","mydb");
$status = $_POST['status'];
$userid = $_POST['userid'];  
$msg = "";
if (mysqli_connect_errno())
{
   //ERROR
   $msg = "Failed connecting to database, please try again later";
}
else
{
	if(!mysqli_query($con,"INSERT INTO Statuses (Status, DateTimeCreated, UserId) VALUES ('$status', NOW(),'$userid')"))
	 	$msg = mysqli_error($con);
	else
		$msg = "success";
}
echo $msg;
?>
