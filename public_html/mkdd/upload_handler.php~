<?php
header('Location:http://stwing.org/smash/redirect.html');
error_reporting(E_ALL);

$format = "
name: $name
e-mail: $email
phone: $phone

Singles tourney: $singles_tourney
Doubles tourney: $doubles_tourney
Doubles partner name: $doubles_name
Doubles team name (optional): $team_name
";

/* mail signup information */
mail("bacchus@stwing.upenn.edu", "$name signed up for the KCECH Smash Brothers Tourney", "$format");
die();