<?php
    include("inc/conn.php");
    $data = json_decode(file_get_contents("php://input"),true);
    $Data = $data['Data'];
    $result = array();

    $sql = "SELECT * FROM `tb_spot` ORDER BY `idx` DESC";
    $query = mysqli_query($conn,$sql);

    while($row = mysqli_fetch_array($query)){
        array_push($result,array(
            "idx"=>$row['idx'],
            "title"=>$row['reqtit'],
            "cate"=>$row['standard'],
            "img"=>'../spot/'.$row['imgroute'],
            "Date"=>$row['reqdate']
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