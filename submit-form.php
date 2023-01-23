<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "shadowgloomy0@gmail.com";
    $subject = "New Form Submission";
    $body = "Name: $name \nEmail: $email \nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "There was an error submitting the form. Please try again.";
    }
}
?>
