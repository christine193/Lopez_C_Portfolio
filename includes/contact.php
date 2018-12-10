<?php

if(isset($_POST['sumbit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message= $_POST['message'];

    $mailTo = "contact.christinelopez.ca";
    $headers = "From: ".$email; //email which they inputted 
    $txt = "Messaged received from " .$name. ".\n\n".$message;

mail($mailTo, $txt, $headers);

header("Location: contact.php?mailsend");

}

