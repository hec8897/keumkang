<?php
include("../admin/api/inc/conn.php");
$data = json_decode(file_get_contents("php://input"),true);
$time = date('Y-m-d H:i:s');
$Data = $data['Data'];

$reqName = $Data['reqName'];
$reqStandard = $Data['reqStandard'];
$reqPhone = $Data['reqPhone'];
$reqMemo = $Data['reqMemo'];

$sql = "INSERT INTO `tb_consult` (`reqname`, `reqphone`, `standard`,`reqmemo`, `insertdate`,`reqclass`,`cflag`) 
VALUES ('$reqName', '$reqPhone', '$reqStandard','$reqMemo', '$time','','')";

$query = mysqli_query($conn,$sql);

$phpResult = isset($query)?"ok":"no";

$json =  json_encode(
    array(
        "result"=>$data,
        "sql"=>$sql,
        "phpResult"=>$phpResult,
  )); 
  
  echo urldecode($json);
  
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');

?>