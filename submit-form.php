<?php

// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Recipient email address
$to = "Shr.sudarshan@gmail.com";

// Subject of the email
$subject = "New message from $name";

// Message body
$body = "You have received a new message from your website contact form.\n\n" .
        "Name: $name\n" .
        "Email: $email\n\n" .
        "Message:\n$message";

// Additional headers
$headers = "From: $email";

// Send the email
mail($to, $subject, $body, $headers);

// Redirect to the thank you page
header('Location: thank-you.html');

?>
