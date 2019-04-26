<?php
$connection = mysqli_connect('localhost','root','root','social_auth');
  if ($connection) {
    if (isset($_GET['id'])) {

        $id = (int)$_GET['id'];
        $sql = "SELECT * FROM replays WHERE discussion_id=".$id;
        $result = mysqli_query($connection,$sql);
        $result_set = array();
        while ($row = mysqli_fetch_assoc($result)) {
          $result_set[] = $row;
        }
         echo json_encode($result_set,JSON_FORCE_OBJECT);
         mysqli_close($connection);
         return;

    }
  } else {
    return ;
  }


 ?>
