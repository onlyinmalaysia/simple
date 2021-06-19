<?php

if (isset($_POST['user'])) {
    $user = $_POST['user'];
    $jsonObject = json_encode($user);
    if (is_writable('users.json')) {
        $content = file_get_contents('users.json');
        $tempArray = json_decode($content,true);
        foreach ($tempArray as $key => $value) {

       if(strcmp($value["password"],$user["password"])==0 && strcmp($value["email"],$user["email"])==0){
    echo $value["username"];
    exit();
       }
  }
    echo "nouser";
    exit();
    } else {
      echo "file is not writable, check permissions";
    }
} else {
   echo "invalid params";
}

?>