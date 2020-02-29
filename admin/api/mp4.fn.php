<?php
  $data = json_decode(file_get_contents("php://input"),true);

  $Data = $data['Data'];
  $file = $Data['file'];
  
  $dir = '../mp4/';
  $unlinkFile = unlink($dir.$file);
  
  if($unlinkFile){
    $result = 'ok';
    $sql = "UPDATE `dron_active` SET `activation` = '0' WHERE `idx` = 1";
    $query = mysqli_query($conn,$sql);
  }
  else{
    $result = 'no';
  }
  
  $json =  json_encode(
    array(
      "result"=>$mode,
      "phpResult"=>$result
    )); 
    
    echo urldecode($json);
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');
?>