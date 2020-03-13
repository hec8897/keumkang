<?php 
$uploadfullPath = "../testupload/"; 
$imageBaseUrl = "testupload/"; 
$CKEditor = $_GET['CKEditor'] ; 
$funcNum = $_GET['CKEditorFuncNum'] ; 
$langCode = $_GET['langCode'] ; 
$url = '' ;
 $message = ''; 
 $file = $_FILES['upload'];
 if (isset($file)) { 
    $time = date('YmdHis');
    $name = $file['name']; 
    $ext_str = "jpg,gif,png,JPG,GIF,PNG";
    $allowed_extensions = explode(',', $ext_str);
    $max_file_size = 3000000;
    $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
    move_uploaded_file($name,$uploadfullPath.$name); 
    
    $temp = $file['tmp_name'];
    $src = imagecreatefromjpeg($file['tmp_name']);
    $exif = exif_read_data($temp);

     switch($exif['Orientation']){
        case 8 : $src = imagerotate($src,90,0); break;
        case 3 : $src = imagerotate($src,180,0); break;
        case 6 : $src = imagerotate($src,-90,0); break;
    }

    function GenerateString($length)  
    {  
        $characters  = "0123456789";  
        $characters .= "abcdefghijklmnopqrstuvwxyz";  
        $characters .= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
        $characters .= "_";  
          
        $string_generated = "";  
          
        $nmr_loops = $length;  
        while ($nmr_loops--)  
        {  
            $string_generated .= $characters[mt_rand(0, strlen($characters) - 1)];  
        }  
          
        return $string_generated;  
    }  
    
    $FileName = GenerateString(5);
    

    $newName = $time.$FileName.".".$ext;
    $url = $imageBaseUrl.$newName;

    header('Content-Type: image/jpeg');
    imagejpeg($src, $uploadfullPath.$newName);
    } 
    else { 
        $message = '업로드된 파일이 없습니다.'; 
    } 
 $Login_info = json_encode(
    array('filename'=>$newName,"uploaded" => 1 ,"url"=> $url)
);

echo urldecode($Login_info);
header('Content-Type: application/json');
header('Content-Type: text/html; charset=utf-8');
 ?>