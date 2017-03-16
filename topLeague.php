<?php
    $limit = intval(trim($_GET['limit']));
    $error = array('error' => 1);
    if($limit === null || $limit === 0) {
        echo json_encode($error);
    } else {
        $ch = curl_init();
        $headerArray = array (
            'Accept: application/json',
            'authorization: Bearer <account_key>'
        );
        curl_setopt($ch, CURLOPT_URL, "https://api.clashofclans.com/v1/leagues/29000022/seasons/2017-02?limit=20");
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
