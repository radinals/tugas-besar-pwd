<?php

class Koneksi {

    private $connection;

    public function __construct() {
        $host = "localhost";
        $user = "root";
        $password = "";
        $dbname = "db_ecommerce";

        $this->connection = new mysqli($host, $user, $password, $dbname);

        if ($this->connection->connect_error) {
            die("Gagal menghubungkan ke database.");
        } 
    }

    public function getConnection() {
        return $this->connection;
    }

};

?>
