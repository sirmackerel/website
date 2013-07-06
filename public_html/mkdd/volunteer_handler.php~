<?php
header('Location:http://stwing.org/smash/redirect.html');
error_reporting(E_ALL);

$format = "
name: $name
e-mail: $email
phone: $phone

Equipment willing to lend -
$equip
";

/* mail signup information */
mail("bacchus@stwing.upenn.edu", "$name is willing to lend equipment for the KCECH Smash Tourney", "$format");
die();