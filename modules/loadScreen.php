<?php
 $mode ="";
$mode = isset($_REQUEST['mode']) ? $_REQUEST['mode'] : null;
$height = isset($_REQUEST['height']) ? $_REQUEST['height'] : null;
$width = isset($_REQUEST['width']) ? $_REQUEST['width'] : null;

$tittle ="";$content="";
switch($mode){
    case "github":$tittle = "GitHub :&nbsp; ";$content=" <a target='_blank' href='https://github.com/nikerz1406'>https://github.com/nikerz1406</a>";
    break;
    case "gmail":$tittle = "Gmail :&nbsp; ";$content=" <a target='_blank' href='mailto:61amakhe@gmail.com'>61amakhe@gmail.com</a>";
    break;
    case "skype":$tittle = "Skype :&nbsp; ";$content=" <a target='_blank' href='https://join.skype.com/invite/wDEfoVhYyyed'>https://join.skype.com/invite/wDEfoVhYyyed</a>";
    break;
    break;
    case "facebook":$tittle = "Facebook :&nbsp; ";$content=" <a target='_blank' href='https://www.facebook.com/le.hue.3139'>https://www.facebook.com/le.hue.3139</a>";
    break;
    case "website":$tittle = "Website :&nbsp; ";$content=" <a target='_blank' href='http://mrlehue.com/'>http://mrlehue.com/</a>";
    break;
    case "phone":$tittle = "Phone :&nbsp; ";$content=" <a target='_blank' href=''>+084 097870****</a>";
    break;
    break;
    default:$tittle = "Click on&nbsp; ";$content="my social icon.";
    break;
}

$template = "<div style='padding:".$height."px ".$width."px'><span style='float:left'>".$tittle."</span><p style='float:left'>".$content."</p></<div>";
echo $template;
?>
