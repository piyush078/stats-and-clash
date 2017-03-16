<?php
    $tag = trim($_GET['tag']);
    $error = array('error' => 1);
    if($tag === null || $tag === 0) {
        echo json_encode($error);
    } else {
        if($tag[0] === '#') $tag = urlencode($tag);
        $ch = curl_init();
        $headerArray = array (
            'Accept: application/json',
            'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFmNjRiMmRmLWMyMjctNDlhNy1iNDExLTZkOWM1MGFiMThmNyIsImlhdCI6MTQ4OTUyMDUwNSwic3ViIjoiZGV2ZWxvcGVyLzU1NDA0MzYyLTEyZWYtNmRkZi02ZTkxLWZmMWY5YzcwY2U3YyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjE4OC4xNjAuMTc1IiwiOTMuMTg4LjE2MC4xOTEiXSwidHlwZSI6ImNsaWVudCJ9XX0.h3axkPX5zWyf2hbzww8DIRN-1vhN6kQ9mYZcsgPbsiD1V07oao3alUBjctBa-3GooMgLWXbG3_ZPXnL-MADGaw'
        );
        curl_setopt($ch, CURLOPT_URL, "https://api.clashofclans.com/v1/players/".$tag);
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