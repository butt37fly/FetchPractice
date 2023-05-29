<?php

$user = $_POST['usuario'];
$password = $_POST['password'];

if ( empty($user) || empty($password) ){
  echo json_encode( 'error' );
} else {
  echo json_encode( "El usuario <strong>$user</strong> se encuentra registrado correctamente." );
}