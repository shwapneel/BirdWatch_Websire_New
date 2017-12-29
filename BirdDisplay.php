<?php 
  session_start();
?>
<!DOCTYPE = html>
<html>
    <head>
         <title> BirdWatch </title>
 
         <!-- Calls the script files we need for our program-->
         <script src="birdData.js"></script>
         <script src="merge.js"></script>
         <script src="quick.js"></script>   
         <script src="display.js"></script>
         <!-- Calls the CSS files we need for our program-->
         <link rel="stylesheet" href="BirdDesign.css">

    </head>
    <body onload="displayBirdData(); pageNum();">  

	
	<!--php code-->
	
	
	
	
	
	<?php

		    //getting form values
	    	$birdName = "";
			$day = "";
			$month = "";
			$year = "";
			$city = "";
		    $country = "";
			
		    $ErrorName ="";
			$ErrorDay ="";
			$ErrorMonth ="";
			$ErrorYear ="";
			$ErrorCity ="";
			$ErrorCountry ="";
			
			$AllInput = true;

			if ($_SERVER["REQUEST_METHOD"] == "POST") {
		    //if ($_SERVER["REQUEST_METHOD"] == "POST"){
				
				$birdName = $_POST["name"];
				$day = $_POST["day"];
				$month = $_POST["month"];
				$year = $_POST["year"];
				$city = $_POST["city"];
				$country = $_POST["country"];
				
			
			if ($birdName == "") {
				$ErrorName =" THIS FIELD CANNOT BE EMPTY!!!";
			} 
			
			if ( $day == "" ) {
				$ErrorDay = " THIS FIELD CANNOT BE EMPTY!!!";
 			} 
			
			if ( !($day < 31 || $day > 1) ) {
				$ErrorDay = " INVALID VALUE";				
			}
			
			if ( $month == "" ) {
				$ErrorMonth = " THIS FIELD CANNOT BE EMPTY!!!";
 			} 

			if ( !($month < 12 || $month > 1) ) {
				$ErrorMONTH = " INVALID VALUE";				
			}
			
			if ( $year == "" ){
				$ErrorYear = " THIS FIELD CANNOT BE EMPTY!!!";
 			} 
			
			if ( $city == "" ) {
				$ErrorCity = " THIS FIELD CANNOT BE EMPTY!!!";
 			}

			if ( $country == "" ) {
				$ErrorCountry = " THIS FIELD CANNOT BE EMPTY!!!";
 			}

			}

			//block incomplete submissions
			if ( $birdName == "" ||  $day == "" ||  $month == "" || $year == "" || $country == "" || ( !($day < 31 || $day > 1) ) || (!($month < 12 || $month > 1)) ) {
				$AllInput = false;
			}
			
			
			//only executes is all inputs are available:
			if ( $AllInput == true ) {

			
			
     		// setting up mySQL database
			$UserName = "root";
            $PassWord =	"";	 
			$ServerName = "localhost";

            $birdServerConnection = new mysqli($ServerName, $UserName, $PassWord);
			
			if($birdServerConnection -> connect_error){
				die ("ERROR ACCESSING DATABASE" . $birdServerConnection -> connect_error);
			}
			
			
            $birdData = "CREATE DATABASE IF NOT EXISTS birdBaseOfficial";
			
			//execute the query
			if ( $birdServerConnection -> query($birdData) === TRUE){
				
				echo "DATABASE CREATED SUCCESSFULLY";
				
			} else {
				
				echo "ERROR IN CREATING DATABASE: " . $birdServerConnection->error ;
				
			}
			
			
			//create the initial table
			$UserName = "root";
            $PassWord =	"";	 
			$ServerName = "localhost"; 
			$DataBaseName = "birdBaseOfficial";

            $birdServerConnection = new mysqli($ServerName, $UserName, $PassWord, $DataBaseName);
			
			if($birdServerConnection -> connect_error){
				die ("ERROR ACCESSING DATABASE" . $birdServerConnection -> connect_error);
			}
			
			$BirdTable = "CREATE TABLE IF NOT EXISTS BirdTableOfficial (
		        id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
				name VARCHAR(20) NOT NULL,
				day INT(2) UNSIGNED NOT NULL,
				month INT(2) UNSIGNED NOT NULL,
				year INT(4) UNSIGNED NOT NULL,
				city VARCHAR(20) NOT NULL,
				country VARCHAR(20) NOT NULL,
				user VARCHAR(30) 
			)";
					
		    //execute the query
			if ( $birdServerConnection -> query($BirdTable) === TRUE){
				
				echo "TABLE CREATED SUCCESSFULLY";
				
			} else {
				
				echo "ERROR IN CREATING TABLE: " . $birdServerConnection->error ;
				
			}
			
		
		
			
			//entering data into database			
			$sendData = $birdServerConnection -> prepare( "INSERT INTO BirdTableOfficial(name,day,month,year,city,country,user) VALUES(?,?,?,?,?,?,?)");
			$sendData -> bind_param("siiisss", $DBname, $DBday, $DBmonth, $DByear, $DBcity, $DBcountry, $DBuser);
			
            $DBname = $birdName;
			$DBday = $day;
			$DBmonth = $month;
			$DByear = $year;
			$DBcity = $city;
			$DBcountry = $country;
			$DBuser = $_SESSION["username"];
			$sendData -> execute();
			
            $sendData -> close();			
			
						
		    //function to extraxt all entries from db to js objects
            $birdWrite = "SELECT name, day, month, year, city, country FROM BirdTableOfficial";
			$OutputData = $birdServerConnection -> query ($birdWrite);
			
			//open BirdData.js and write JS object prototype
			$BirdFile = fopen("birdData.js","w") or die("ERROR, NO FILE FOUND");
			
			fwrite( $BirdFile, "function Bird ( Birdname , daySpot, monthSpot, yearSpot, citySpot, countrySpot ) { \n" );
			fwrite( $BirdFile, " this.Bname= Birdname; \n" );
			fwrite( $BirdFile, " this.day= daySpot; \n" );
			fwrite( $BirdFile, " this.month= monthSpot; \n" );
			fwrite( $BirdFile, " this.year= yearSpot; \n" );
			fwrite( $BirdFile, " this.city= citySpot; \n" );
			fwrite( $BirdFile, " this.country= countrySpot; \n" );
			fwrite( $BirdFile, "}\n" );
			fwrite( $BirdFile, "\n" );
			fwrite( $BirdFile, "function getBirdData() { \n" );
			fwrite( $BirdFile, " var BirdArray = [ ]; \n" );
			
			
			
			if ( $OutputData->num_rows > 0 ) {
				
				$index = 0;
				//fetch_assoc retruns an array where each index is a column
				while ( $row = $OutputData -> fetch_assoc() ) {
					
					//write to BirdData.js
					fwrite( $BirdFile, "     BirdArray[ " ); 
					fwrite( $BirdFile, $index );
					fwrite( $BirdFile, " ] = new Bird( \"" );
					fwrite( $BirdFile, $row["name"] );
					fwrite( $BirdFile, "\" ," );
					fwrite( $BirdFile, $row["day"] );
					fwrite( $BirdFile, "," );
					fwrite( $BirdFile, $row["month"] );
					fwrite( $BirdFile, "," );
					fwrite( $BirdFile, $row["year"] );
					fwrite( $BirdFile, ",\"" );
					fwrite( $BirdFile, $row["city"] );
					fwrite( $BirdFile, "\",\"" );
					fwrite( $BirdFile, $row["country"] );
					fwrite( $BirdFile, "\");\n" );
					//increment the object data in the js folder
					$index++;
				}
				
			} else {
				
				echo "NO RECORDS FOUND";
				
			}

			fwrite( $BirdFile, " return BirdArray; \n" );
			fwrite( $BirdFile, "};\n" );
			fclose($BirdFile);
			
			//closes database
			$birdServerConnection -> close();
			
			}
		?>
	
	
	
	
	
	
	<!-- php code -->
	
         <section id = "pageColour" >
       
              <!--     To Fill up top gap with colour before title      -->
              <p id = "titlePropertiesHead"><b>BirdWatch</b></p>


              <!--Horizontal Line-->
              <p>        </p>
              <hr>    

              <!--Talks about the project a little bit to the user-->
              <p id="description"> Project takes submission via the first form below. The submission is proccessed using PHP and stored using MySQL </p>
              <p id="description"> A JavaScript Object is then created to use functions, quick sort and merge sort in JavaScript</p>
              <p id="description"> to provide the sorting options below. The resulting list of objects is turned into an HTML Table where it has CSS</p>
              <p id="description"> effects applied to it and outputed as you can see below on the 2nd table </p>
              <p id="description"> In the bottom right link, you can sign up for an account in which you can keep track of your submissions</p>
              <p id="description"> in a 3rd table that will appear once you are logged on, and will also have the ability to delete previous submissions</p>
			  
              <!--Horizontal Line-->
              <p>        </p>
              <hr>    

			  <br />
			  <br />
			  
	     	  <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			  
			      <table   id="textsAndWords1" align="center" >
					   <tr><td colspan="2" id=\"textsAndWords2\" style="font-weight:bold;"> ENTER YOUR BIRD SPOTING HERE </td></tr>
				       <tr><td> Bird Name:  </td>  <td><input type="test" name="name" ><br/><?php echo $ErrorName;?></td> </tr>
					   <tr><td> Day: <br /> a number between 1 and 31 </td>   <td><input type="text" name="day" ><br/><?php echo $ErrorDay;?></td>  </tr>
					   <tr><td> Month: <br /> a number between 1 and 12 </td>   <td><input type="text" name="month" ><br/><?php echo $ErrorMonth;?></td> </tr>
					   <tr><td> Year: <br /> a 4 digit number </td>    <td><input type="text" name="year" ><br/><?php echo $ErrorYear;?></td>  </tr>
					   <tr><td> City:  </td>   <td><input type="text" name="city" ><br/><?php echo $ErrorCity;?></td>  </tr>
					   <tr><td> Country:  </td>    <td><input type="text" name="country" ><br/><?php echo $ErrorCountry;?></td>  </tr>
					   <tr><td colspan="2" > <input type="submit" value="SUBMIT" name="submit"></td></tr>
			      </table>
			      
		      </form>
			  		  

              <!--The HTML table that will get its code form the JavaScript program-->
              <section id = "tableColour">

                   <div id="birdDisplay"></div>

              </section>
 
              

              <!--The navigation buttons and element numbers-->
              <div id="button">
                 <button id="prevButton" display="block" float="center" type="button" onclick="prevList(); displayBirdData(); pageNum();">PREV</button>
  
                   <span id="pageNumber"> </span>

                 <button id="nextButton" display="block" float="center" type="button" onclick="nextList(); displayBirdData(); pageNum();">NEXT</button>
              </div>

			  
			   <div>
                   <a href= "index.html" style="text-decoration:none; float:right; color:powderblue; font-size:15px;">Back to HomePage</a>
				   <br/>
	               <a href="account.php" style="text-decoration:none; float:right; color:powderblue; font-size:15px;">LOGIN/SIGN UP</a>
			       <br/>
				   <a href="account.php" style="text-decoration:none; float:right; color:powderblue; font-size:15px;">LOG OUT</a>
				   <br/>
			  </div>
	
			 
	
              <!--Horizontal Line-->
              <p>        </p>
              <hr> 

	
	  		<?php
			
			
		    // setting up mySQL connection
			$UserName = "root";
            $PassWord =	"";	 
			$ServerName = "localhost"; 
			$DataBaseName = "birdBaseOfficial";

            $birdServerConnection = new mysqli($ServerName, $UserName, $PassWord, $DataBaseName);
			
			if($birdServerConnection -> connect_error){
				die ("ERROR ACCESSING DATABASE" . "<div id=\"textsAndWords2\">" . $birdServerConnection -> connect_error . "</div>");
			}
				
		
		    //$_SESSION["username"] is defined in accounts.php, okay for a php notice to pop up here initally
     		if ( isset($_SESSION["username"]) && $_SESSION["username"] != "") {

				echo "<div id=\"textsAndWords2\">you are " . $_SESSION["username"] . "</div>";

     			//function to extraxt all entries from db to js objects
                $birdWrite = "SELECT id, name, day, month, year, city, country, user FROM BirdTableOfficial";
		    	$OutputData = $birdServerConnection -> query ($birdWrite);
			
    			if ( $OutputData->num_rows > 0 ) {
			    echo "<div id=\"textsAndWords2\">Your previous entries are:</div>";
				echo "<section id =\"tableColour\">";	
				echo "<table id=\"tablefont\" align=\"center\"}>";
					while ( $row = $OutputData->fetch_assoc() ) {
						if ($_SESSION["username"] == $row["user"]) {
						    echo "<tr>";
							echo "<td>";
							echo "id# [" . $row["id"] . "]";
							echo "</td>";
							
							echo "<td>";
							echo $row["name"];
							echo "</td>";
						
							echo "<td>";
							echo $row["day"];
							echo "</td>";
							
							echo "<td>";
							echo $row["month"];
							echo "</td>";
						
							echo "<td>";
							echo $row["year"];
							echo "</td>";
						
							echo "<td>";
							echo $row["city"];
							echo "</td>";
						
							echo "<td>";
							echo $row["country"];
							echo "</td>";
							echo "<tr>";
						}
					}
					echo "</table>";
		            echo "</section>";
		
	                echo "<div id=\"textsAndWords2\" align=\"center\"> TO DELETE AN ENTRY, TYPE THE ID INTO THE FIELD BELOW </div>";
                    echo "<form method=\"post\" action=\"delete.php\"\ style=\"text-align:center;\">";
		            echo "     <input type=\"text\" name=\"deleted\">";
					echo "     <input type=\"submit\" value=\"SUBMIT\" name=\"submit\">";
		            echo "</form>";
		


         		} else {
					
					echo "<div id=\"textsAndWords2\">You have no records at the moment</div>";
				}			
		    }

			$birdServerConnection->close();
			
		?>
			  

         </section>

    </body>
</html>
