<?php

if (isset($_POST['newuser'])) {
    $user = $_POST['newuser'];
    $jsonObject = json_encode($user);
    if (is_writable('users.json')) {
        $content = file_get_contents('users.json');
        $tempArray = json_decode($content);
array_push($tempArray, $user);
$jsonData = json_encode($tempArray);
file_put_contents('users.json', $jsonData);
        echo "success";
    } else {
        echo "file is not writable, check permissions";
    }
} else {
    echo "invalid params";
}

?>