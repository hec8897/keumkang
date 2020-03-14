<?php
  include("inc/conn.php");
  mysqli_set_charset($conn,"utf-8"); 
  header('Access-Control-Allow-Origin: *');  
  $data = json_decode(file_get_contents("php://input"),true);

    $file = $_FILES['file'];

    $uploadfullPath = "../news/"; 
    $imageBaseUrl = "news/"; 

    if (isset($file)) { 
        $time = date('YmdHis');
        $name = $file['name']; 
        $ext_str = "jpg,gif,png,JPG,GIF,PNG";
        $allowed_extensions = explode(',', $ext_str);
        // $max_file_size = 5000000;
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

            $json =  json_encode(
        array(
            "file"=>$newName
    )); 

    echo urldecode($json);


@Header('Content-Type: application/json');
@Header('Content-Type: text/html; charset=utf-8');

        
//   $mode = $_POST['mode'];
//   $ImgFile = $_FILES['file'];

//     function FileUploader($files){
//         $file = $files;
//         $upload_directory = '../news/';
//         $time = date('YmdHis');
//         $ext_str = "jpg,gif,png,JPG,GIF,PNG";
//         $allowed_extensions = explode(',', $ext_str);
//         $max_file_size = 50000000;
//         $ext = substr($file['name'], strrpos($file['name'], '.') + 1);
//         $path = $file['name'];
//         if($files == null){
//             $Results = 'fileNo';
//         }
//         else if(!in_array($ext, $allowed_extensions)) {
//             $Results = 'noExt';
//         }
//         else if($file['size'] >= $max_file_size){
//             $Results = 'huge';
//         }
//         else{
//             move_uploaded_file($path,$upload_directory.$time.".".$ext);
//             $Results = $time.".".$ext;
//             $temp = $file['tmp_name'];
//             $src = imagecreatefromjpeg($temp);
//             $exif = exif_read_data($temp);

//         }
//         return $Result = $Results;
//     }
    
//     if($mode = 'upload_img'){
//         $UploadResult = FileUploader($ImgFile);
//         $temp = $ImgFile['tmp_name'];
//         $src = imagecreatefromjpeg($ImgFile['tmp_name']);
//         $exif = exif_read_data($temp);
//     }

//     $json =  json_encode(
//         array(
//             'test'=>$src,
//             "file"=>$UploadResult
//     )); 

//     echo urldecode($json);


// @Header('Content-Type: application/json');
// @Header('Content-Type: text/html; charset=utf-8');


?>