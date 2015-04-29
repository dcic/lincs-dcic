<?php

// "First name\tLast name\tInstitution\tDepartment\tEmail\tTelephone\tProject Title\tStart Date\tEnd Date\tTimestamp\n"
$directory = "../static/edsr/";
$timestamp = date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']);

function writeToSummaryTSV() {
    global $directory, $timestamp;
    $summary = $directory . "summary.tsv";
    $f = fopen($summary, "a+");
    fputs($f, $_POST["firstName"] . "\t" . $_POST["lastName"] . "\t" . $_POST["institution"] . "\t" . $_POST["department"] . "\t" . $_POST["email"] . "\t" . $_POST["telephone"] . "\t" . $_POST["projectTitle"] . "\t" . $_POST["startDate"] . "\t" . $_POST["endDate"] . "\t" . $timestamp . "\n");
    fclose($f);
}

function writeToIndividualTSV($filename) {
    global $timestamp;
    $f = fopen($filename, "a+");
    fputs($f, "First name\t" . $_POST["firstName"] . "\n");
    fputs($f, "Last name\t" . $_POST["lastName"] . "\n");
    fputs($f, "Institution\t" . $_POST["institution"] . "\n");
    fputs($f, "Department\t" . $_POST["department"] . "\n");
    fputs($f, "Email\t" . $_POST["email"] . "\n");
    fputs($f, "Telephone\t" . $_POST["telephone"] . "\n");
    fputs($f, "Project Title\t" . $_POST["projectTitle"] . "\n");
    fputs($f, "Start Date\t" . $_POST["startDate"] . "\n");
    fputs($f, "End Date\t" . $_POST["endDate"] . "\n");
    fputs($f, "Timestamp\t" . $timestamp . "\n");
    fclose($f);
}

function doPost() {
    global $directory;
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $userDirectory = $directory . $lastName . "_" . $firstName . "_" . uniqid('');
    mkdir($userDirectory, 0777);
    $newFile = $userDirectory . "/" . $lastName . "_" . $firstName . ".tsv";
    writeToIndividualTSV($newFile);
    writeToSummaryTSV();
    savePDF($userDirectory);
    echo "Success";
}

function savePDF($userDirectory) {
    $target_file = $userDirectory . "/" . $_FILES["pdf"]["name"];
    move_uploaded_file($_FILES["pdf"]["tmp_name"], $target_file);
    echo $file;
}

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // doGet();
} else if ($_SERVER["REQUEST_METHOD"] === "POST") {
    doPost();
}

?>
