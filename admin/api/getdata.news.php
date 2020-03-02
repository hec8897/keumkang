<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);
    $result = array();

    $idx = $data['idx'];

    if(isset($idx)){
        $sql = "SELECT * FROM `tb_news` WHERE `idx` = '$idx'";
        $query = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($query);
            array_push($result,array(
                "idx"=>$row['idx'],
                "img"=>$row['main_img'],
                "title"=>$row['title'],
                "cate"=>$row['standard'],
                "desc"=>$row['join_count'],
                "link"=>$row['link'],
                "writer"=>$row['writer'],
                "desc"=>$row['note_desc'],
                "descImg"=>$row['note_img']

            ));
    }
    else{
        $sql = "SELECT * FROM `tb_news` ORDER BY `idx` DESC";
        $query = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_array($query)){
            array_push($result,array(
                "idx"=>$row['idx'],
                "insertdate"=>$row['insertdate'],
                "title"=>$row['title'],
                "cate"=>$row['standard'],
                "join"=>$row['join_count']
            ));
        }
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