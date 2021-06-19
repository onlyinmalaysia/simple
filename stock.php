<?php

if (isset($_POST['idc'])) {
    $id = $_POST['idc'];
    echo $_POST['idc'];
    $jsonString = file_get_contents('stock.json');
$data = json_decode($jsonString, true);


foreach ($data as $key => $dt) {
    if ($dt['id'] == $id && $data[$key]['count']!=0) {
        $data[$key]['count'] = $data[$key]['count']-1;
    }
}

$newJsonString = json_encode($data);
file_put_contents('stock.json', $newJsonString);

}
?>