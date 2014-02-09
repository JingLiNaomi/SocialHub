<?php
		$con = new mysqli("localhost","root","","mydb");
		$userid = 1; //TODO
		if (mysqli_connect_errno())
		{
		   //ERROR
		}
		else
		{
			//Get personal info
			$result = mysqli_query($con,"SELECT * FROM PersonalInfo WHERE UserId='$userid'");
			while($row = mysqli_fetch_array($result))
			{
				  $fname = $row['FirstName'];
				  $lname = $row['LastName'];
				  $gender = $row['Gender']; 
				  $city = $row['City'];
				  $country = $row['Country'];
				  $dob = $row['DateOfBirth'];
				  $relationship = $row['RelationshipStatus'];
				  $occupation = $row['Occupation'];
				  $school = $row['SchoolName'];
			}
			
			//Get latest status
			$statuses = mysqli_query($con,"SELECT * FROM Statuses WHERE UserId='$userid' ORDER BY DateTimeCreated DESC");
			if($row = mysqli_fetch_array($statuses))
				$status = $row['Status'];
			else
				$status = "";
			
			
			//Wrap data
			$arr = array("Name"=> $fname." ".$lname, 
			    "LastStatus"=>$status, 
				"City"=> $city,
				'Country'=>$country,
				'Gender'=>$gender,
				'DOB'=>$dob,
				'School'=>$school,
				'Relationship'=>$relationship,
				'Occupation'=>$occupation);
			echo json_encode($arr);
		}
		
		
?>