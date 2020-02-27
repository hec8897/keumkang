<?php
  include("inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);

  $Data = $data['Data'];
  $mode = $Data['mode'];

  $reqTit = $_POST['reqtit'];
  $reqStandard = $_POST['reqStandard'];
  $reqDate = $_POST['reqDate'];
  $Files = $_FILES['reqFile'];


  function FileUploader($files){
    $file = $files;
    $upload_directory = '../../spot/';
    $time = date('YmdHis');

    $ext_str = "jpg,gif,png,JPG,GIF,PNG";
    $allowed_extensions = explode(',', $ext_str);
    $max_file_size = 3000000;
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
    else if(move_uploaded_file($file['tmp_name'], $upload_directory.$time."main_img.".$ext)) {
            $Results = $time."main_img.".$ext;
    }
    return $Result = $Results;
    }

    if($mode == 'spotImgDel'){
        $idxs = $Data['idx'];
        for($count = 0; $count <count($idxs); $count++){
            $idx = $idxs[$count];
            $getFile = "SELECT `imgroute` FROM `tb_spot` WHERE `idx` = '$idx'";
            $queryFile = mysqli_query($conn,$getFile);
            $row = mysqli_fetch_array($queryFile);

            unlink("../../spot/".$row['imgroute']);

            $sql = "DELETE FROM `tb_spot` WHERE `idx` = '$idx'";
            $query = mysqli_query($conn,$sql);
        }
        $phpResult = isset($query)?"ok":"no";

    }else{
        $spotImg = FileUploader($Files);
        $sql = "INSERT INTO `tb_spot` (`standard`, `reqtit`, `reqdate`, `imgroute`) VALUES ('$reqStandard', '$reqTit', '$reqDate', '$spotImg')";
        $query = mysqli_query($conn,$sql);
        $phpResult = isset($query)?"ok":"no";

    }
    
  
    
        $json =  json_encode(
          array(
              "phpResult"=> $phpResult
          ));

        echo urldecode($json);
        @Header('Content-Type: application/json');
        @Header('Content-Type: text/html; charset=utf-8');
?>