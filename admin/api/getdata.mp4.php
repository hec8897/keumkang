<?php
// 폴더명 지정
$dir = "../mp4";
// 핸들 획득
$handle  = opendir($dir);
$files = array();
// 디렉터리에 포함된 파일을 저장한다.
while (false !== ($filename = readdir($handle))) {
    if($filename == "." || $filename == ".."){
        continue;
    }
    // 파일인 경우만 목록에 추가한다.
    if(is_file($dir . "/" . $filename)){
        $files[] = $filename;
    }
}
// 핸들 해제 
closedir($handle);
// 정렬, 역순으로 정렬하려면 rsort 사용
sort($files);
$result = array();
// 파일명을 출력한다.
$json =  json_encode(
    array(
        "result"=>$files[0]
  )); 

  echo urldecode($json);
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');
?>