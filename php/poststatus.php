<?php 
$con = new mysqli("localhost","root","","mydb");
$status = $_POST['status'];
$userid = $_POST['userid'];  
$datetime = date('m/d/Y h:i:s', time());;
$msg = "";
if (mysqli_connect_errno())
{
   //ERROR
   $msg = "Failed posting status, please try again later";
}
else
{
	mysqli_query($con,"INSERT INTO Statuses (Status, DateTimeCreated, UserId) VALUES ('$status', '$datetime','$userid')");
	$msg = "success";
}
echo $msg.$status.$userid.$datetime;
?>
