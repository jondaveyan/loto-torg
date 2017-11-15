<?php 
require 'vendor/autoload.php';
use \Stripe\Stripe;
\Stripe\Stripe::setApiKey("sk_test_8mZDec0191R8FdPu2ZuotKsO");
// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
$token = $_POST['stripeToken'];

// Charge the user's card:
$charge = \Stripe\Charge::create(array(
  "amount" => $_POST['amount'],
  "currency" => "usd",
  "description" => $_POST['name'],
  "source" => $token,
));
echo json_encode(array('result' => $charge));


?>