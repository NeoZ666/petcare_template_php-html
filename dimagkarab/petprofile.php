<?php
$connection = mysqli_connect("localhost", "root", "", "profile_db");
if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

if (isset($_GET["email"])) {
    $email = mysqli_real_escape_string($connection, $_GET["email"]);

    $query = "SELECT * FROM registrations WHERE email = '$email'";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("Query failed: " . mysqli_error($connection));
    }

    $row = mysqli_fetch_assoc($result);
} else {
    die("Email not provided.");
}

mysqli_close($connection);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Pet Profile</title>
    <!-- Your CSS or styling links here -->
</head>
<body>
    <h1>Pet Profile</h1>

    <h2>Pet Information</h2>
    <p><strong>Pet Gender:</strong> <?php echo $row["pet_gender"]; ?></p>
    <p><strong>Pet Type:</strong> <?php echo $row["pet_type"]; ?></p>
    <p><strong>Pet Name:</strong> <?php echo $row["pet_name"]; ?></p>
    <p><strong>Pet Breed:</strong> <?php echo $row["pet_breed"]; ?></p>
    <p><strong>Pet Age:</strong> <?php echo $row["pet_age_years"]; ?> years <?php echo $row["pet_age_months"]; ?> months</p>
    <!-- Display other pet information fields here -->

    <h2>Health Information</h2>
    <p><strong>Question 1:</strong> <?php echo $row["pet_health_data1"]; ?></p>
    <p><strong>Question 2:</strong> <?php echo $row["pet_health_data2"]; ?></p>
    <p><strong>Question 3:</strong> <?php echo $row["pet_health_data3"]; ?></p>
    <p><strong>Question 4:</strong> <?php echo $row["pet_health_data4"]; ?></p>
    <!-- Display other health information fields here -->

    <!-- Add more sections for displaying vaccination proof, weight, and other information -->

</body>
</html>
