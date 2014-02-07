<?php
	$email=$_POST['email'];
	$password = $_POST['password'];
	$result = Array();
	$result["status"] = 0;
	$id = 0;
	$mysqli= new mysqli("localhost","group3DB","123456","SocialHub");
	if ($mysqli->connect_errno)
    {
		$result["status"] = 0;
		$mysqli->close();
		echo json_encode($result);
    }
	else
	{
		$set = $mysqli->query("select UserId from AccountEmail where Email='$email'");
		$num = $set->num_rows;
		if($num>0)
		{
			$row = $set->fetch_assoc();
			$id = $row["UserId"];
			$sql = "select UserId from Passwords p where p.Password='$password' AND p.UserId='$id'";
			$set = $mysqli->query($sql);
			$num = $set->num_rows;
			if($num<=0)
			{
				$result["status"] = 0;
				$result["msgerr"] = "Invalid password";
				echo json_encode($result);
			}
			else
			{
				$row = $set->fetch_assoc();
				$id = $row["UserId"];
				$result["id"] = $id;
				$result["status"] = 1;
				$result["msgerr"] = "Login success";
				echo json_encode($result);
			}
 		}
		else
		{
			$result["status"] = 0;
			$result["errmsg"] = "User not found";
			echo json_encode($result);
		}
		
	}
?>