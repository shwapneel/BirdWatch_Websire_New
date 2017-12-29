<?PHP
    session_start();
?>
<!DOCTYPE html>
<html>
<head>

    <!-- Calls the CSS files we need for our program-->
    <link rel="stylesheet" href="BirdDesign.css">
	 
</head>
<body id="pageColour">

              <!--     To Fill up top gap with colour before title      -->
              <p id = "titlePropertiesHead"><b>BirdWatch</b></p>


              <!--Horizontal Line-->
              <p>        </p>
              <hr>    


<?PHP	
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
			echo "<div id=\"textsAndWords2\" align=\"center\">YOUR RECORD WAS DELETED SUCCESSFULLY</div>";
		} else {
			echo "<div id=\"textsAndWords2\" align=\"center\">YOUR RECORD WAS NOT DELETED" . $birdServerConnection->error . "</div>";
		}
	} else {
		echo "INVALID ID";
	}
	
	echo "<br />";
	echo "<hr/>";
	echo "<a href=\"BirdDisplay.php\" style=\"text-decoration:none; color:powderblue; font-size:15px;\">RETURN TO BirdWatch</a>";
	
?>
</body>
</html>