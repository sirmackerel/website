<?php
header('Location:http://stwing.org/smash');
error_reporting(E_ALL);

$format = "
name: $name
e-mail: $email
phone: $phone

Singles tourney: $singles_tourney
Doubles tourney: $doubles_tourney
Doubles partner name: $doubles_name
";

/* mail signup information */
mail("bacchus@stwing.upenn.edu", "$name signed up for the KCECH Smash Brothers Tourney", "$format");
die();