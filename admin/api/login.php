<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);

    $userId = $data['userId'];
    $userPw = $data['userPw'];
   
    $userIdCheck = "SELECT * FROM `tb_user` WHERE `user_id` ='$userId'";
    $CheckId = mysqli_query($conn,$userIdCheck);
    $IdGet = mysqli_fetch_array($CheckId);
    $password = $IdGet['user_pw'];    
    if(count($IdGet) > 0){
        if (password_verify($userPw, $password)) {
            if($IdGet['activation'] == 0){
                $result = $IdGet;
            }
            else{
                $result = $IdGet;
            }
        }
        else{
            $result = 'pwno';
        }
    }
    else{
        $result = 'idno';
    }

    $phpResult = isset($query)?"ok":"no";
 
    $Login_info = json_encode(
        array('result'=>$result)
    );
    echo urldecode($Login_info);
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8');
?>
