<? 	

	include "config.php";
	
	$role = $_REQUEST['role'];
	
//$json = json_encode($rows);

//print $json;


$time = time();

while((time() - $time) < 30) {
	
	//jQuery database if parameter = all show all
	if ($role == "all") {
		$q = "SELECT * FROM job_listings";
	} else {
	//Query database return all results according to parameter passed
		$q = "SELECT * FROM job_listings WHERE JobTitle='" . $role . "'";
 	}	
		
	$r = mysql_query($q);
	
	while($row = mysql_fetch_array($r)) {
		$rows[] = array(
		"id" => $row['id'],
		"JobTitle" => $row['JobTitle'],
		"Country" => $row['Country'],
		"CompName" => $row['CompName'],
		"Details" => $row['Details']);
	}
	
	// if we have new data return it
	if(!empty($rows)) {
		echo json_encode($rows);
		break;
	}

	sleep(25000);
	
}






?>
