<?php
    include("inc/conn.php");
    mysqli_set_charset($conn,"utf-8"); 
    header('Access-Control-Allow-Origin: *');  
    $data = json_decode(file_get_contents("php://input"),true);
    $Data = $data['Data'];
    $mode = empty($data)?$_POST['mode']:$Data['mode'];

    function FileUploader($files){
        $file = $files;
        $upload_directory = '../news/main/';
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

        $MainImg = $_FILES['mainImg'];
        $Wirte = $_POST['wirter'];
        $Title = $_POST['title'];
        $subTilte = $_POST['sub_title'];
        $Standard = $_POST['standard'];
        $link = $_POST['link'];
        $MainImgName = isset($_FILES['mainImg'])?FileUploader($MainImg):'none.jpg';
        $noteDesc = $_POST['noteDesc'];
        $noteDescImg = $_POST['noteDescImg'];
        $InsertTime = date('Y-m-d');

    if($mode == 'new'){
        $sql = "INSERT INTO `tb_news` (`writer`, `title`,`sub_title`, `standard`, `link`, `main_img`, `note_desc`, `note_img`, `join_count`, `insertdate`)
        VALUES ('$Wirte', '$Title','$subTilte', '$Standard', '$link', '$MainImgName', '$noteDesc', '$noteDescImg', 0 , '$InsertTime')";
        $query = mysqli_query($conn,$sql);
        $phpResult = isset($query)?"ok":"no";
        }
    else if($mode == 'update'){
        $idx = $_POST['idx'];
        $sql = "UPDATE `tb_news` SET  `writer` = '$Wirte',`title`='$Title',`sub_title`='$subTilte',`standard`='$Standard',`link`= '$link', `main_img` = '$MainImgName', `note_desc`='$noteDesc',`note_img` ='$noteDescImg' WHERE `idx` = '$idx'";
        $query = mysqli_query($conn,$sql);
        $phpResult = isset($query)?"ok":"no";
    }
    else if($mode == 'NewsImg_del'){
        $file = $Data['file'];
        $idx = $Data['idx'];
        $unlinkResult = unlink('../news/main/'.$file);
        $sql = "UPDATE `tb_news` SET `main_img` = '' WHERE `idx` = '$idx'";
        $query = mysqli_query($conn,$sql);

        $phpResult = isset($unlinkResult)?"ok":"no";
    }
    else if($mode == "new_news_del"){
    $files = $Data['file'];
    for($count=0; $count<count($files); $count++){
        $unlinkResult = unlink('../news/'.$files[$count]);
    }
    if(count($files)>0){
      $phpResult = isset($unlinkResult)?"ok":"no";
    }
    else{
        $phpResult ='ok';
    }

  }
  else if($mode == 'delte_news'){
      $fileData = $Data['Data'];
      $idx = $fileData['idx'];
      $mainImg = $fileData['mainImg'];
      $descImg = $fileData['descImg'];
      $mainUnlink = unlink('../news/main/'.$mainImg);

      for($count=0; $count<count($descImg); $count++){
          $descUnlink = unlink('../news/'.$descImg[$count]);
      }
      $sql = "DELETE FROM `tb_news` WHERE `tb_news`.`idx` = $idx";
      $query = mysqli_query($conn,$sql);
      $phpResult = isset($query)?"ok":"no";
  }


    $json =  json_encode(
        array(
            "phpResult"=>$phpResult,
            'mode'=>$mode,
            'test'=>$file,
            "test2"=>$idx
    )); 

    echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');


?>