<?php
session_start();
require("hsu_conn.php");

// Start XML file, create parent node
$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);
header("Content-type: text/xml");
$usr = $_SESSION['username'];
$pass = $_SESSION['password'];
$conn = hsu_conn($usr, $pass);
$string = 'select * from markers';
$stmt = oci_parse($conn, $string);
oci_execute($stmt, OCI_DEFAULT);

while(oci_fetch($stmt))
{
 
    $name = oci_result($stmt, "NAME");
    $desc = oci_result($stmt, "DESCRIPTION");
    $lat = oci_result($stmt, "LAT");
    $lng = oci_result($stmt, "LNG");
    $node = $dom->createElement("marker");
    $newnode = $parnode->appendChild($node);
    $newnode->setAttribute("name",$name);
    $newnode->setAttribute("description", $desc);
    $newnode->setAttribute("lat", $lat);
    $newnode->setAttribute("lng", $lng);
}

echo$dom->saveXML();
?>
