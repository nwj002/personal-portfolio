<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body>  
<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'youremail@example.com';
    $subject = 'New Form Submission';
    $message = "Name: " . $name . "\n" . "Email: " . $email . "\n" . "Message: " . $message;
    $headers = "From: " . $email;

    if(mail($to, $subject, $message, $headers)) {
        echo "<h1>Sent Successfully! Thank you" . $name . ", We will contact you shortly!</h1>";
    } else {
        echo "Something went wrong!";
    }
}

?>
</body>
</html>