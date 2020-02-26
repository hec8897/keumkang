<?php
include("../admin/api/inc/conn.php");
$data = json_decode(file_get_contents("php://input"),true);
$time = date('Y-m-d H:i:s');
$Data = $data['Data'];

$reqName = $Data['reqName'];
$reqStandard = $Data['reqStandard'];
$reqPhone = $Data['reqPhone'];
$reqMemo = $Data['reqMemo'];
$Cflag = $Data['Cflag'];

$GetConsultData = "SELECT * FROM `tb_user` WHERE `user_id`='$Cflag'";
$querys = mysqli_query($conn,$GetConsultData);
$row = mysqli_fetch_array($querys);
$Class = $row['class'];
$userName = $row['user_name'];

$sql = "INSERT INTO `tb_consult` (`reqname`, `reqphone`, `standard`,`reqmemo`, `insertdate`,`reqclass`,`cflag`) 
VALUES ('$reqName', '$reqPhone', '$reqStandard','$reqMemo', '$time','$Class','$userName')";

$query = mysqli_query($conn,$sql);

$phpResult = isset($query)?"ok":"no";

$json =  json_encode(
    array(
        "result"=>$data,
        "sql"=>$Class,
        "phpResult"=>$phpResult,
  )); 
  
  echo urldecode($json);
  
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');

?>