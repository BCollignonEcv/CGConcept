<?php
    $toEmail = "contact@cgconcept-pumptrack.fr";
    $mailHeaders = "From: " . $_POST["firstName"] . "<". $_POST["email"] .">\r\n";
    $mailHeaders  .= "Content-type: text/html; charset= utf8\n";
    $message = 'Nom et prénom : ' . $_POST["firstName"] . ' ' . $_POST["lastName"] . '<br>' . 
    'Email : ' . $_POST["email"] . '<br>' . 
    'Message : ' . $_POST["message"];
    if(mail($toEmail, $_POST["object"], $message , $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>