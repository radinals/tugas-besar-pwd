<?php

include_once "./model/Auth.php";

$password = $_POST["password"];
$email = $_POST["email"];

$auth = new Auth();

if ($auth->login($email, $password) ) {
    header("Location:dashboard.html");
} else {
    header("Location:login.html");
}

?>

