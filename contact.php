<?php

  /**
    CMU Treblemakers Website
    Copyright Derek Brown 2016
    All Rights Reserved
  **/


  // Fetching Values from URL.
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.

  // After sanitization Validation is performed
    if (filter_var($email, FILTER_VALIDATE_EMAIL)):
    $subject = "Website Contact Form";

  // To send HTML mail, the Content-type header must be set.
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From:' . $email. "\r\n"; // Sender's Email
    $headers .= 'Reply-to:' . $email. "\r\n"; // Sender's Email
    $template = '<div style="padding:50px;"><br/>'
    . 'Name:' . $name . '<br/>'
    . 'Email:' . $email . '<br/>'
    . 'IP:' . $_SERVER['REMOTE_ADDR'] . '<br/>'
    . 'Message:' . $message . '<br/><br/>'
    . '<br/>'
    . '</div>';
    $sendmessage = "<div>" . $template . "</div>";

  // Message lines should not exceed 70 characters (PHP rule), so wrap it.
    $sendmessage = wordwrap($sendmessage, 70);

  // Send mail by PHP Mail Function.
    mail("contact@cmutreblemakers.com", $subject, $sendmessage, $headers,'-fcontact@cmutreblemakers.com');
    echo "<MSG>SUCCESS</MSG>";

    else:
      echo "<MSG>ERROR</MSG>";

    endif;
?>
