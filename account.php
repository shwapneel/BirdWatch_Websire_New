<?php 
  session_start();
?>
<DOCTYPE! HTML>
<html>
    <head>
	    <title>LOG IN and SIGN UP</title>
        <!-- Calls the CSS files we need for our program-->
        <link rel="stylesheet" href="BirdDesign.css">

    </head>
	<body id="pageColour">
	
	          <!--     To Fill up top gap with colour before title      -->
              <p id = "titlePropertiesHead"><b>BirdWatch</b></p>


              <!--Horizontal Line-->
              <p>        </p>
              <hr>    

	
	   <?php	
	   
	   
	        //set up the database
            $Uname = "root";	   
            $Pword = "";
            $Sname = "localhost";

            $UserConn = new mysqli ($Sname, $Uname, $Pword);
			
			if ( $UserConn -> connect_error ) {
				die( "ERROR ACCESSING DATABASE" . $UserConn->connect_error );
			}
			
			$accountBase = "CREATE DATABASE IF NOT EXISTS accountBase";
			
			if ( $UserConn -> query($accountBase) == TRUE  ) {
				
				//echo "USER DATABASE CREATED" ;
				
			} else {
				
				echo "<div id=\"textsAndWords2\">ERROR IN ACCOUNT CREATION" . $UserConn->error . "</div>";
				
			}

	        //set up the table
            $Uname = "root";	   
            $Pword = "";
            $Sname = "localhost";
			$DBname = "accountBase";

            $UserConn = new mysqli ($Sname, $Uname, $Pword, $DBname);
			
			if ( $UserConn -> connect_error ) {
				die( "ERROR ACCESSING DATABASE" . $UserConn->connect_error );
			}
			
			$accountTable = "CREATE TABLE IF NOT EXISTS accountTable(
			   id INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			   UserN VARCHAR(30) NOT NULL,
			   PassW VARCHAR(100) NOT NULL
			)";
			
			if ( $UserConn -> query($accountTable) == TRUE  ) {
				
				//echo "USER DATABASE CREATED" ;
				
			} else {
				
				echo "<div id=\"textsAndWords2\">ERROR IN ACCOUNT CREATION" . $UserConn->error ."</div>";
				
			}
			
	        //form variables
	        $Username = "";
			$Password = "";
			$Confirm = "";
			
			if ($_SERVER["REQUEST_METHOD"] == "POST") {
				
                if ( $_POST["UserName"] == "" && $_POST["newUserName"] == "" ) {
					
					echo "<div id=\"textsAndWords2\">ERROR IN ACCOUNT CREATION: NO DATA RECIEVED</div>";
					
				} else if ($_POST["UserName"] == "") { //new user
					
	                $Username = $_POST["newUserName"];
		          	$Password = $_POST["newPassWord"];
			        $Confirm = $_POST["confirmWord"];

					if ( $Password == "" ) {
						
						echo "<div id=\"textsAndWords2\">PASSWORD MUST NOT BE EMPTY</div>";
						
					}
					
                    if ( $Password != $Confirm ) {
						
						echo "<div id=\"textsAndWords2\">PASSWORD DOES NOT MATCH CONFIRM WORD</div>";
						
					}
					
					//entries to the form should be safe
					
					//finds any users with same user name
					$retrieve = "SELECT UserN, PassW FROM accountTable";
					$retrieveQuery = $UserConn->query($retrieve);
					
					$found = false;
					if ( $retrieveQuery->num_rows > 0 ) {
						
						while ( $row = $retrieveQuery->fetch_assoc() ){
							if ( $Username == $row["UserN"]){
								$found = true;
								echo "<div id=\"textsAndWords2\">Username is already taken, please try again</div>";
							}
						}
						if ($found == false) {
							echo "<div id=\"textsAndWords2\"> CREATING USER ... </div>";
		
    					    $UserData = $UserConn -> prepare ( "INSERT INTO accountTable(UserN, PassW) VALUES ( ?, ? )" );
    	    				$UserData -> bind_param("ss", $DBuser, $DBpass);
	    	    			$DBuser = $Username;
		    	    		$DBpass = $Password;
			    	    	$UserData -> execute();
				    	    $UserData -> close();			

				            $_SESSION["username"] = $Username;
				            $_SESSION["password"] = $Password;
                          
						    echo "<div id=\"textsAndWords2\"> User created </div>";
      					}
						
					} else {
						
						echo "<div id=\"textsAndWords2\"> CREATING USER ... </div>";
						
   					    $UserData = $UserConn -> prepare ( "INSERT INTO accountTable(UserN, PassW) VALUES ( ?, ? )" );
        				$UserData -> bind_param("ss", $DBuser, $DBpass);
	   	    			$DBuser = $Username;
		   	    		$DBpass = $Password;
		     	    	$UserData -> execute();
		         	    $UserData -> close();			

				        $_SESSION["username"] = $Username;
				        $_SESSION["password"] = $Password;
                          
						echo "<div id=\"textsAndWords2\"> User created </div>";
						
					}
					
					
				} else if ($_POST["newUserName"] == "") { //existing user
					
	                $Username = $_POST["UserName"];
		          	$Password = $_POST["PassWord"];
					
					if ( $Password == "" ) {
						
						echo "<div id=\"textsAndWords2\"> PASSWORD MUST NOT BE EMPTY </div>";
						
					}
					
					
					//entries to the form should be safe
					
					//finds the user
					$retrieve = "SELECT UserN, PassW FROM accountTable";
					$retrieveQuery = $UserConn->query($retrieve);
					
					$found = false;
					if ( $retrieveQuery->num_rows > 0 ) {
						
						while ( $row = $retrieveQuery->fetch_assoc() ){
							if ( $Username == $row["UserN"]){
								$found = true;
								echo "<div id=\"textsAndWords2\"> User found ... LOGGIN IN </div>";
								
					            $_SESSION["username"] = $Username;
					            $_SESSION["password"] = $Password;
							
					
							}
						}
						if ($found == false) {
							echo "<div id=\"textsAndWords2\"> no user found </div>";
						}
						
					} else {
						
						echo "<div id=\"textsAndWords2\"> no records found </div>";
						
					}
					
					
				} else {
					
					
					echo "<div id=\"textsAndWords2\"> ERROR IN ACCOUNT CREATION: SEND ONLY ONE FORM PLEASE </div>";
										
				}
				
			}
			
			$UserConn -> close();
			
	   ?>
	

	    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			  
             <table   id="textsAndWords1" align="center" >
			     <tr> <td colspan="3"><b> New User? Sign up here: </b></td> </tr>
				 <tr> <td>Username:<br/><input type="text" name="newUserName" ></td>  <td>Password:<br/><input type="password" name="newPassWord" ></td>  <td>Confirm Password:<br/><input type="password" name="confirmWord" ></td> </tr>
		         <tr> <td colspan="3"> <input type="submit" value="submit"> </td> </tr>
			 </table>
			 <br />
             <table   id="textsAndWords1" align="center" >
			     <tr> <td colspan="2"><b> Already a memeber? Login here: </b></td> </tr>
				 <tr> <td>Username:<br/><input type="text" name="UserName" ></td>  <td>Password:<br/><input type="password" name="PassWord" ></td> </tr>
		         <tr> <td colspan="2"> <input type="submit" value="submit"> </td> </tr>
			 </table>			 
		</form>
	    
		<?php
		if (isset($_SESSION["username"]) && $_SESSION["username"] != "") {
		        echo "<form method=\"post\" action=\"logout.php\">";
                echo "<table   id=\"textsAndWords1\" align=\"center\" >";
			    echo "<tr> <td> <b> LOG OUT HERE: </b></td> </tr>";
				echo "<tr> <td> <input type=\"submit\" name=\"logout\" value=\"logout\"> </td> </tr>"; 
			    echo "</table>";
		        echo "</form>";
		}
		?>
		
		<!--
		<form id="textsAndWords2" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
	        <b> New User? Sign up here: </b>
			<br />
			<br />

     		Username: <input type="text" name="newUserName" >
			
			Password: <input type="password" name="newPassWord" >
			
			Confirm Password: <input type="password" name="confirmWord" >
			
			<input type="submit" value="submit">
		
			<br />
		    <br />
		
		    <b> Already a memeber? Login here:</b>
			<br />
			<br />
		
		    Username: <input type="text" name="UserName" >
			
			Password: <input type="password" name="PassWord" >
			
			<input type="submit" value="submit">
		</form>
		-->
		
		<hr />
		
		<a href="index.php" style="text-decoration:none; color:powderblue; font-size:15px;" >RETURN TO BirdWatch</a>

        
		
	</body>
</html>