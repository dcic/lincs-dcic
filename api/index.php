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

function sendConfirmationEmail($appData) {
    $subject = "Your application for the BD2K-LINCS DCIC External Data Science Research Project was received.";
    $message = "Dear BD2K-LINCS DCIC external Data Science research project applicant,\n\nMany thanks for your submission.\n\nYour application was received and will undergo a review process.\n\nIf you have questions, please contact Sherry Jenkins at sherry.jenkins@mssm.edu.\n\nBest regards,\nThe BD2K-LINCS DCIC team";
    mail($appData["email"], $subject, $message);

    $subjectForAdmins = "EDSR application received.";
    $messageForAdmins = $appData["firstName"] . " " . $appData["lastName"] . " submitted an application.";
    mail("ggundersen@gmail.com", $subjectForAdmins, $messageForAdmins);
    mail("avi.maayan@mssm.edu", $subjectForAdmins, $messageForAdmins);
    mail("sherry.jenkins@mssm.edu", $subjectForAdmins, $messageForAdmins);
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
    $appData["timestamp"]    = date('m/d/Y H:i:s', time());

    $baseDirectory = "../static/edsr/";
    $userDirectory = $baseDirectory . $appData["lastName"] . "_" . $appData["firstName"] . "_" . uniqid("");
    mkdir($userDirectory, 0777);
    writeToIndividualTSV($userDirectory, $appData);
    savePDF($userDirectory);
    writeToSummaryTSV($baseDirectory, $appData);
    sendConfirmationEmail($appData);

    echo "success";
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    doPost();
}

?>
