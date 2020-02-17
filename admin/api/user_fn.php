<?php
    include('inc/conn.php');
    mysqli_set_charset($conn,"utf8");
    $data = json_decode(file_get_contents("php://input"),true);
    $Data = $data['Data'];
    $idx = $Data['idx'];
    $mode =$Data['mode'];

    if($mode == "baActive"){
        $sql = "UPDATE `tb_user` SET `Activation` = '0' WHERE `idx` = '$idx'";
        $query = mysqli_query($conn,$sql);
    }
    else if($mode == 'Active'){
        $sql = "UPDATE `tb_user` SET `Activation` = '1' WHERE `idx` = '$idx'";
        $query = mysqli_query($conn,$sql);
    }
    else if($mode == 'chpw'){
        $chpw = $Data['ChPw'];
        $hash = password_hash($chpw,PASSWORD_DEFAULT);
        $sql = "UPDATE `tb_user` SET `user_pw` = '$hash' WHERE `idx` = '$idx'";
        $query = mysqli_query($conn,$sql);

    }
    else if($mode == 'cflag'){
        $SelectData = $Data['SelectIdx'];
        $cflag = $Data['cflag'];
        $Class = $Data['Class'];

        for($loop = 0; $loop < count($SelectData); $loop++){
            if($cflag == 'none'){
                $sql = "UPDATE `tb_consult` SET `cflag` = '',`reqclass`='' WHERE `idx` = '$SelectData[$loop]'";
            }else{
                $sql = "UPDATE `tb_consult` SET `cflag` = '$cflag',`reqclass`='$Class' WHERE `idx` = '$SelectData[$loop]'";
            }
            $query = mysqli_query($conn,$sql);
        }
    }

    $phpResult = isset($query)?"ok":"no";

    $Login_info = json_encode(
        array('phpResult'=> $phpResult,"data"=>$data,"sql"=>$sql)
    );
    echo urldecode($Login_info);
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8');
?>
