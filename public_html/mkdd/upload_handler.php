<?php
header('Location:http://stwing.upenn.edu/~kevinxu/mkdd/index.html');
error_reporting(E_ALL);

$format = "
name: $name
e-mail: $email
";

/* mail signup information */
mail("kevinxu@stwing.upenn.edu", "$name signed up for the Mario Kart Tourney", "$format");
die();