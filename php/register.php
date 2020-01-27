<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$response = new \stdClass();

if (!empty($_POST['email']) && !empty($_POST['password'])){
    $response->http = 200;
    $response->msg = "Success";
}
elseif (empty($_POST['password']) && !empty($_POST['email']) ){
    $response->http = 400;
    $response->msg = 'Please enter a password';
}
elseif (empty($_POST['email']) && !empty($_POST['password'])){
    $response->http = 400;
    $response->msg = 'Please enter an email';
}
else{
    $response->http = 400;
    $response->msg = 'Please enter an email address and a password';
}

echo json_encode($response);