<?php
  include("inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);
  
  $mode = $_POST['mode'];
  $ImgFile = $_FILES['file'];

    function FileUploader($files){
        $file = $files;
        $upload_directory = '../news/';
        $time = date('YmdHis');
        $ext_str = "jpg,gif,png,JPG,GIF,PNG";
        $allowed_extensions = explode(',', $ext_str);
        $max_file_size = 50000000;
        $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
        $path = $file['name'];
        if($files == null){
            $Results = 'fileNo';
        }
        else if(!in_array($ext, $allowed_extensions)) {
            $Results = 'noExt';
        }
        else if($file['size'] >= $max_file_size){
            $Results = 'huge';
        }
        else if(move_uploaded_file($file['tmp_name'], $upload_directory.$time.".".$ext)) {
                $Results = $time.".".$ext;
               
        }
        return $Result = $Results;
    }
    
    if($mode = 'upload_img'){
        $UploadResult = FileUploader($ImgFile);
    }

    $json =  json_encode(
        array(
            "file"=>$UploadResult
    )); 

    echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');


?>