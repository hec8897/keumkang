<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);

    $sql = "SELECT * FROM `dron_active` WHERE `idx` = 1";
    $query = mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($query);
    $active = $row['activation'];

    $phpResult = isset($query)?"ok":"no";

    $Login_info = json_encode(
        array('phpResult'=> $phpResult,"data"=>$active)
    );
    
    echo urldecode($Login_info);
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8');
?>
