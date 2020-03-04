<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);
    $result = array();

    $idx = $data['idx'];
    $cate = $data['cate'];

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
        if(isset($cate)){
            if($cate == 'all'){
                $sql = "SELECT * FROM `tb_news` ORDER BY `idx` DESC";
            }
            else{
                $sql = "SELECT * FROM `tb_news` WHERE `standard` = '$cate' ORDER BY `idx` DESC";
            }
        }
        else{
            $sql = "SELECT * FROM `tb_news` ORDER BY `idx` DESC";
        }
        $query = mysqli_query($conn,$sql);
        while($row = mysqli_fetch_array($query)){
            array_push($result,array(
                "idx"=>$row['idx'],
                "cate"=>$row['standard'],
                "title"=>$row['title'],
                "subTitle"=>$row['sub_title'],
                "img"=>$row['main_img'],
                "desc"=>$row['note_desc'],
                "insertdate"=>$row['insertdate'],
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