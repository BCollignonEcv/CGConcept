<?php
    $toEmail = "contact@cgconcept-pumptrack.fr";
    $mailHeaders = "From: " . $_POST["firstName"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["object"], $_POST["message"], $mailHeaders)) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>