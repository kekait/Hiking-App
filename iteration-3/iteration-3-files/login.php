<!DOCTYPE html>
<html  xmlns="http://www.w3.org/1999/xhtml">

<!--
    demo connecting from PHP on nrs-projects
    to the Oracle student database on cedar

    adapted from an example by Peter Johnson
   adapted by: Sharon Tuttle
   last modified: 2016-03-06
-->
<!-- Kekai Tanaka
     3/13/2016
   http://nrs-projects.humboldt.edu/~ktt107/hw6/oracle-test.php
   -->
<head>
    <title> Connecting to Oracle! </title>
    <meta charset="utf-8" />

    <link href="http://users.humboldt.edu/smtuttle/styles/normalize.css" 
          type="text/css" rel="stylesheet" />
    <link href="oracle-test.css" type="text/css" rel="stylesheet" />
</head> 

<body>

<h1> Connecting PHP to Oracle </h1>
<h2> Kekai Tanaka </h2>
<?php
   // do you need to ask for username and password?

   if ( ! array_key_exists("username", $_POST) )
     {
       // no username in $_POST? they need a login
       //     form!
        ?>
  
        <form method="post" 
              action="http://nrs-projects.humboldt.edu/~ktt107/Team_ISAK/iteration-2/iteration2_files/switchback.php">
        <fieldset>
            <legend> Please enter Oracle username/password: </legend>

	<label for="username"> Username: </label>
            <input type="text" name="username" id="username" /> 

	<label for="password"> Password: </label>
            <input type="password" name="password" 
                   id="password" />
            <div class="submit">
                <input type="submit" value="Log in" />
            </div>
        </fieldset>
        </form>
    <?php
     }  
?>
</body>
</html>
