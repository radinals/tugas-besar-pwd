<?php

include_once "Koneksi.php";

class Auth extends Koneksi {
    
    private $conn;

    public function __construct() {
        parent::__construct();
        $this->conn = $this->getConnection();
    }

    public function login($email, $password) : bool {
        $stmt = $this->conn->prepare("SELECT password FROM auth WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows < 1) {
            return false; // Email not found
        }

        $user = $result->fetch_assoc();

        // Verify the input password against the hashed one
        if (password_verify($password, $user['password'])) {
            return true; // Login successful
        } else {
            return false; // Password mismatch
        }
    }

};

?>
