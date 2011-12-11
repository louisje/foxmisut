<?php
	
	header("Content-Type: text/plain");
	
	$sLogFile = "logs/" . date("Y-m-d") . ".log";
	$sLogMessage = date("[Y-m-d H:i:s] ") .$_SERVER['REMOTE_ADDR'] . ", " . $_POST['url'] ."\n";
	error_log($sLogMessage, 3, $sLogFile);
	
	system('/home/louis/outland/bin/foxmisut ' . escapeshellarg($_POST['url']));
	
