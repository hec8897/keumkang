<?php
$uploadfullPath = "../testupload/KakaoTalk_20200312_110825160.jpg"; 
$savePath="../testupload";
$source = imagecreatefromjpeg($uploadfullPath);
$exif = @exif_read_data($uploadfullPath);
switch($exif['Orientation']){
    case 8 : $source = imagerotate($source,90,0); break;
    case 3 : $source = imagerotate($source,180,0); break;
    case 6 : $source = imagerotate($source,-90,0); break;
}
$test = 1;

header('Content-Type: image/jpeg');
imagejpeg($source);
// imagedestroy($source);

move_uploaded_file($source, $uploadfullPath . '123'); 

?>
