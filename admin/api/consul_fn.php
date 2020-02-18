<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);
    $Data = $data['Data'];
    $mode = $Data['mode'];
    $idx = $Data['idx'];

    if($mode =='ConsulDel'){
        $sql = "DELETE FROM `tb_consult` WHERE `idx` = '$idx'";
    }
    
    $query = mysqli_query($conn,$sql);

    $phpResult = isset($query)?"ok":"no";

    $Login_info = json_encode(
        array('phpResult'=> $phpResult,"data"=>$sql)
    );
    
    echo urldecode($Login_info);
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8');
?>
