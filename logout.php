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

	if ( $_SERVER["REQUEST_METHOD"] == "POST" ) {
		if ($_POST["logout"] == true) {
			$_SESSION["username"] = "";
			$_SESSION["password"] = "";
		}
	}
	
	echo "<div id=\"textsAndWords2\">YOU HAVE BEEN LOGGED OUT, HAVE A NICE DAY!</div>";
	
	echo "<br />";
	echo "<hr/>";
	echo "<a href=\"BirdDisplay.php\" style=\"text-decoration:none; color:powderblue; font-size:15px;\">RETURN TO BirdWatch</a>";
	
?>
</body>
</html>