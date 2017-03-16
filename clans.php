<?php
    $clan = trim($_GET['name']);
    $tag = trim($_GET['tag']);
    $error = array('error' => 1);
    if(($clan === null || $clan === 0) && ($tag === null || $tag === 0)) {
        echo json_encode($error);
    } else {
        if($tag[0] === '#') $tag = urlencode($tag);
        $ch = curl_init();
        $headerArray = array (
            'Accept: application/json',
            'authorization: Bearer <account_key>'
        );
        if($clan) $url = "https://api.clashofclans.com/v1/clans?name=".$clan."&limit=20";
        else if($tag) $url = "https://api.clashofclans.com/v1/clans/".$tag;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headerArray);
        $result = curl_exec($ch);
        if(!curl_errno($ch) && !empty($result)) {
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            if($httpCode !== 200) echo json_encode($error);
            else echo $result;
        } else echo json_encode($error);
        curl_close($ch);
    }
?>
