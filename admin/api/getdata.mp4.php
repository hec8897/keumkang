<?php
header('Access-Control-Allow-Origin: *');  
$data = json_decode(file_get_contents("php://input"),true);
// $dir = "../mp4/";
// $handle  = opendir($dir);
// $files = array();
// while (false !== ($filename = readdir($handle))) {
//     if($filename == "." || $filename == ".."){
//         continue;
//     }
//     if(is_file($dir . "/" . $filename)){
//         $files[] = $filename;
//     }
// }
// closedir($handle);
// sort($files);
// $result = array();
$json =  json_encode(
    array(
        // "result"=>$files[0],
        'test'=>12
  )); 

  echo urldecode($json);
  
  Header('Content-Type: application/json;charset=UTF-8');
  Header('Content-Type: text/html; charset=utf-8');
//   Header('accept : application/json');
//   Header('content-type : application/json;charset=UTF-8');

//415에러;;
?>