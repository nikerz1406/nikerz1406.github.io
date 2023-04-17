<?php
    // += -=
    $symbol = $argv[1];

    // height wight
    $type = $argv[2];

    $str1 = $symbol == '+' ? '+=' : '-=';
    $str2 = $type == 'h' ? 'this.height' : 'this.width';

    $msg = '`'.$str1.'${'.$str2.'}v'.$type.'`';
    print_r($msg);
?>