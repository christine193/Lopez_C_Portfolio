<?php 

include 'connect.php';

$stmt = $conn->query('SELECT glitch_thumb FROM tbl_glitch');
// array to contain fetch() results
$rows = array();
// while loop for fetch arrow function (part of PDO)
while ($row = $stmt->fetch())
{
	// put the results of that 
    $rows[] = $row;
}

header('Content-Type: application/json; charset=UTF-8');
echo json_encode($rows);




?>