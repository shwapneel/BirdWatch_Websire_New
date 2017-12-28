<?php 
  session_start();
?>

<DOCTYPE! HTML>
<html>
    <head>
	    <title>LOG IN and SIGN UP</title>
    </head>
	<body>
	
	   <?php
            //user account session variables	   
		    $_SESSION["username"] = "";
			$_SESSION["password"] = "";
	   
	   
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
				
				echo "USER DATABASE CREATED" ;
				
			} else {
				
				echo "ERROR IN ACCOUNT CREATION" . $UserConn->error;
				
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
				
				echo "USER DATABASE CREATED" ;
				
			} else {
				
				echo "ERROR IN ACCOUNT CREATION" . $UserConn->error;
				
			}
			
	        //form variables
	        $Username = "";
			$Password = "";
			$Confirm = "";
			
			if ($_SERVER["REQUEST_METHOD"] == "POST") {
				
                if ( $_POST["UserName"] == "" && $_POST["newUserName"] == "" ) {
					
					echo "ERROR IN ACCOUNT CREATION: NO DATA RECIEVED";
					
				} else if ($_POST["UserName"] == "") { //new user
					
	                $Username = $_POST["newUserName"];
		          	$Password = $_POST["newPassWord"];
			        $Confirm = $_POST["confirmWord"];

					if ( $Password == "" ) {
						
						echo "PASSWORD MUST NOT BE EMPTY";
						
					}
					
                    if ( $Password != $Confirm ) {
						
						echo "PASSWORD DOES NOT MATCH CONFIRM WORD";
						
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
								echo "Username is already taken, please try again";
							}
						}
						if ($found == false) {
							echo " CREATING USER ...";
		
    					    $UserData = $UserConn -> prepare ( "INSERT INTO accountTable(UserN, PassW) VALUES ( ?, ? )" );
    	    				$UserData -> bind_param("ss", $DBuser, $DBpass);
	    	    			$DBuser = $Username;
		    	    		$DBpass = $Password;
			    	    	$UserData -> execute();
				    	    $UserData -> close();			

				            $_SESSION["username"] = $Username;
				            $_SESSION["password"] = $Password;
                          
						    echo "User created, CLOSE BROWSER TO LOG OUT";
      					}
						
					} else {
						
						echo " CREATING USER ...";
						
   					    $UserData = $UserConn -> prepare ( "INSERT INTO accountTable(UserN, PassW) VALUES ( ?, ? )" );
        				$UserData -> bind_param("ss", $DBuser, $DBpass);
	   	    			$DBuser = $Username;
		   	    		$DBpass = $Password;
		     	    	$UserData -> execute();
		         	    $UserData -> close();			

				        $_SESSION["username"] = $Username;
				        $_SESSION["password"] = $Password;
                          
						echo "User created, CLOSE BROWSER TO LOG OUT";
						
					}
					
					
				} else if ($_POST["newUserName"] == "") { //existing user
					
	                $Username = $_POST["UserName"];
		          	$Password = $_POST["PassWord"];
					
					if ( $Password == "" ) {
						
						echo "PASSWORD MUST NOT BE EMPTY";
						
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
								echo "User found ... LOGGIN IN, CLOSE BROWSER TO LOG OUT";
								
					            $_SESSION["username"] = $Username;
					            $_SESSION["password"] = $Password;
							
					
							}
						}
						if ($found == false) {
							echo "no user found";
						}
						
					} else {
						
						echo "no records found";
						
					}
					
					
				} else {
					
					
					echo "ERROR IN ACCOUNT CREATION: SEND ONLY ONE FORM PLEASE";
										
				}
				
			}
			
			$UserConn -> close();
			
	   ?>
	
	
	    <b> New User? Sign up here: </b>
		
		<form  method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		    Username: <input type="text" name="newUserName" >
			
			Password: <input type="password" name="newPassWord" >
			
			Confirm Password: <input type="password" name="confirmWord" >
			
			<input type="submit" value="submit">
		
			<br />
		    <br />
		
		    <b> Already a memeber? Login here:</b>
			<br />
		
		    Username: <input type="text" name="UserName" >
			
			Password: <input type="password" name="PassWord" >
			
			<input type="submit" value="submit">
		</form>
		
		<a href="index.php">RETURN TO BirdWatch</a>
	</body>
</html>