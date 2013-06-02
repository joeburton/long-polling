<?php
	/*
	$dbhost="213.171.219.98";
	$dbusername="joeburton1979";
	$dbpassword="joeburton1979";
	$dbname="joeburton";
	*/
	
	$dbhost="localhost";
	$dbusername="root";
	$dbpassword="";
	$dbname="dev";
		
	
	// Connect to Mysql
	$connect = mysql_connect($dbhost, $dbusername, $dbpassword);

	//Select the correct database.
	mysql_select_db($dbname,$connect) or die ("Could not select database");
	
?>