<?php
include("inc/conn.php");
include("inc/variable_define.php");
$data = json_decode(file_get_contents("php://input"),true);

$idx = $data['idx'];
if(isset($idx)){
    $sql = "SELECT * FROM `tb_user` WHERE `idx` = '$idx'";
}
else{
    $sql = "SELECT * FROM `tb_user`";
}
$query = mysqli_query($conn,$sql);


$result = array();

while($row = mysqli_fetch_array($query)){
    array_push($result,array(
        "idx"=>$row['idx'],
        "userId"=>$row['user_id'],
        "userName"=>$row['user_name'],
        "userPhone"=>$row['user_phone'],
        "Class"=>$row['class'],
        "comcode"=>$row['comcode'],
        "DataCount"=>0,
        "Activation"=>$row['activation'],
    ));
}


$phpResult = isset($query)?"ok":"no";

$json =  json_encode(
    array(
        "result"=>$result,
        "phpResult"=>$phpResult
  )); 
  
  echo urldecode($json);
  
  
  @Header('Content-Type: application/json');
  @Header('Content-Type: text/html; charset=utf-8');


?>