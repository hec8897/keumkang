<?php
include("inc/conn.php");
include("inc/variable_define.php");
$data = json_decode(file_get_contents("php://input"),true);
$Data = $data['Data'];

$idx = $Data['idx'];
$Class = $Data['Class'];
$Cflag = $Data['Cflag'];


if(isset($Class)){
    $sql = "SELECT * FROM `tb_consult` WHERE `reqclass` = '$Class' AND `cflag`= '$Cflag'";
}
else{
    $sql = "SELECT * FROM `tb_consult`";
}

$query = mysqli_query($conn,$sql);


$result = array();

while($row = mysqli_fetch_array($query)){
    array_push($result,array(
        "idx"=>$row['idx'],
        "reqPhone"=>$row['reqphone'],
        "reqName"=>$row['reqname'],
        "cate"=>$row['standard'],
        "Class"=>$row['reqclass'],
        "Cflag"=>$row['cflag'],
        "reqMemo"=>$row['reqmemo'],
        "InsertDate"=>$row['insertdate']
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