<?PHP
    session_start();
	
	// setting up mySQL connection
	$UserName = "root";
    $PassWord =	"";	 
	$ServerName = "localhost"; 
	$DataBaseName = "birdBaseOfficial";

    $birdServerConnection = new mysqli($ServerName, $UserName, $PassWord, $DataBaseName);
			
	if($birdServerConnection -> connect_error){
		die ("ERROR ACCESSING DATABASE" . $birdServerConnection -> connect_error);
	}
		
	$deleteing = "";
	$user = $_SESSION["username"];
	
	if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
		$deleteing = $_POST["deleted"];
	}
	
	if ( $deleteing != "" ) {
		$delQ = "DELETE FROM BirdTableOfficial WHERE id=" . $deleteing . " AND user='" . $user ."'";
				
		if ($birdServerConnection -> query($delQ) == TRUE ) {
			echo "RECORD WAS DELETED SUCCESSFULLY";
		} else {
			echo "RECORD WAS NOT DELETED" . $birdServerConnection->error;
		}
	} else {
		echo "INVALID ID";
	}
	
	echo "<br />";
	echo "<a href=\"index.php\">RETURN TO BirdWatch</a>";
	
?>