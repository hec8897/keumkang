<?php
$columArray = array(
    "`idx`", 
    "`reqphone`", 
    "`reqname`", 
    "`standard`", 
    "`reqclass`", 
    "`cflag`", 
    "`reqmemo`", 
    "`insertdate`"
);


function ValueReturn($Value){
    $retrunData = isset($Value) || $Value != null || $Value != ""?$Value:"no";
    return $retrunData;
}

function UpdateQuery($Value, $Query,$Colums){
    $columArray = array(
        "`idx`", 
        "`reqphone`", 
        "`reqname`", 
        "`standard`", 
        "`reqclass`", 
        "`cflag`", 
        "`reqmemo`", 
        "`insertdate`"
    );
    
    $UpdateColum = $columArray[$Value];
    $UpdateQuery = "$UpdateColum = '$Query'";
    return $UpdateQuery;
}    

function InsertColumGet($option,$colums){
    if($option == "BasicInsert"){
        $Colum="";
        for($Count = 0; $Count<count($colums); $Count++){
            $Colum.= ",".$colums[$Count];
        }
    }
    return substr($Colum,1);
}


?>