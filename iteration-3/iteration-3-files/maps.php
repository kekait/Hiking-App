
<?php
session_start();
require("hsu_conn.php");
$usr = $_SESSION['username'];
$pass = $_SESSION['password'];
$conn = hsu_conn($usr, $pass);

$name = $_GET['name'];
$description = $_GET['description'];

$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];

$call = 'begin insertMarker(:name_one, :desc, :lat, :lng); end;';
$string = oci_parse($conn, $call);
$num = 5;
//oci_bind_by_name($string, ":id_num", $num);
oci_bind_by_name($string, ":name_one", $name);
oci_bind_by_name($string, ":desc", $description);
oci_bind_by_name($string, ":lat", $lat);
oci_bind_by_name($string, ":lng", $lng);
oci_execute($string, OCI_DEFAULT);
oci_commit($conn);
oci_free_statement($string);
oci_close($conn);

?>
