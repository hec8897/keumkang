<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);

    $userId = $data['userId'];
    $userPw = $data['userPw'];
    $userClass = "금강";
    $userName = $data['userName'];
    $userPhone = $data['userPhone'];
    $hash = password_hash($userPw,PASSWORD_DEFAULT);

    $userIdCheck = "SELECT * FROM `tb_user` WHERE `user_id` ='$userId'";
    $CheckId = mysqli_query($conn,$userIdCheck);
    $IdGet = mysqli_fetch_array($CheckId);
    
    if(count($IdGet) > 0){
        $result="idno";
    }
    else{
        $result="idok";
        $sql = "INSERT INTO `tb_user` (user_id,user_pw,user_name,user_phone,class,comcode,activation)
        VALUES('$userId','$hash','$userName','$userPhone','$userClass',100,0)"; 
        $query =  mysqli_query($conn,$sql);    
    }

    $phpResult = isset($query)?"ok":"no";
 
    $Login_info = json_encode(
        array("phpResult"=>$phpResult,'result'=>$result)
    );
    echo urldecode($Login_info);
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8');
?>
