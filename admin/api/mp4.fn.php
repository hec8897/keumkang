<?php
$data = json_decode(file_get_contents("php://input"),true);
$json =  json_encode(
    array(
        "result"=>1
  )); 

  echo urldecode($json);
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');
?>