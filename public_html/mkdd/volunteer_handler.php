<?php
header('Location:http://stwing.upenn.edu/~kevinxu/mkdd/index.html');
error_reporting(E_ALL);

$format = "
name: $name
e-mail: $email

Equipment willing to lend -
$equip
";

/* mail signup information */
mail("kevinxu@stwing.upenn.edu", "$name is willing to lend equipment for the Mario Kart Tournament", "$format");
die();