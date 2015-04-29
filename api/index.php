<?php

function writeToIndividualTSV($userDirectory, $appData) {
    $filename = $userDirectory . "/" . $appData["lastName"] . "_" . $appData["firstName"] . ".tsv";
    $f = fopen($filename, "a+");    
    foreach($appData as $key => $val) {
        // Convert the camelCase key to Capitalized Words.
        $newKey = ucfirst(preg_replace('/([a-zA-Z])(?=[A-Z])/', '$1 ', $key));
        fputs($f, $newKey . "\t" . $val . "\n");
    }
    fclose($f);
}

function savePDF($userDirectory) {
    $filename = $userDirectory . "/" . $_FILES["pdf"]["name"];
    move_uploaded_file($_FILES["pdf"]["tmp_name"], $filename);
}

function writeToSummaryTSV($baseDirectory, $appData) {
    $filename = $baseDirectory . "summary.tsv";
    $f = fopen($filename, "a+");
    fputs($f, join("\t", $appData) . "\n");
    fclose($f);
}

function doPost() {
    $appData = array();
    $appData["firstName"]    = $_POST["firstName"];
    $appData["lastName"]     = $_POST["lastName"];
    $appData["institution"]  = $_POST["institution"];
    $appData["department"]   = $_POST["department"];
    $appData["email"]        = $_POST["email"];
    $appData["telephone"]    = $_POST["telephone"];
    $appData["zipCode"]      = $_POST["zipCode"];
    $appData["projectTitle"] = $_POST["projectTitle"];
    $appData["startDate"]    = $_POST["startDate"];
    $appData["endDate"]      = $_POST["endDate"];
    $appData["timestamp"]    = date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']);
    
    $baseDirectory = "../static/edsr/";
    $userDirectory = $baseDirectory . $appData["lastName"] . "_" . $appData["firstName"] . "_" . uniqid("");
    mkdir($userDirectory, 0777);
    writeToIndividualTSV($userDirectory, $appData);
    savePDF($userDirectory);
    writeToSummaryTSV($baseDirectory, $appData);
    echo "Success";
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    doPost();
}

?>
