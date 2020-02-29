<?php
header('Access-Control-Allow-Origin: *');  
$data = json_decode(file_get_contents("php://input"),true);


$mode == $_POST['mode'];

  $File = $_FILES['mp4'];
  function FileUploader($files){
    $file = $files;
    $upload_directory = '../mp4/';
    $time = date('YmdHis');

    $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
    $path = $file['name'];

    if($files == null){
        $Results = 'fileNo';
    }
    else if(move_uploaded_file($file['tmp_name'], $upload_directory."dron.".$ext)) {
            $Results = 'ok';
    }
    return $result = $Results;
    }

    $result = FileUploader($File);

  
  $json =  json_encode(
    array(
      "result"=>$mode,
      "phpResult"=>$result
    )); 
    
    echo urldecode($json);
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');
?>