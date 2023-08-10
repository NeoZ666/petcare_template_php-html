<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $connection = mysqli_connect("localhost", "root", "", "profile_db");

    if (!$connection) {
        die("Database connection failed: " . mysqli_connect_error());
    }

    $fname = mysqli_real_escape_string($connection, $_POST["fname"]);
    $email = mysqli_real_escape_string($connection, $_POST["email"]);
    $phone = mysqli_real_escape_string($connection, $_POST["phone"]);
    $password = mysqli_real_escape_string($connection, $_POST["password"]);
    $petParentServiceExpert = mysqli_real_escape_string($connection, $_POST["pet_parent_service_expert"]);

    // Insert profile picture (This assumes you have a proper file handling mechanism)
    $profilePicturePath = "upload";
    // Move the uploaded file to a suitable location and store its path in $profilePicturePath

    // Process other fields as needed

    if ($petParentServiceExpert === "service_expert") {
        $serviceType = mysqli_real_escape_string($connection, $_POST["service_type"]);
        $experience = mysqli_real_escape_string($connection, $_POST["exp"]);
        $petGender = '';
        $petType = '';
        $petName = '';
        $petBreed = '';
        $petAgeYears = 0;
        $petAgeMonths = 0;
        $petWeight = '';
        $vaccinationProof = '';
        $petHealthData1 = '';
        $petHealthData2 = '';
        $petHealthData3 = '';
        $petHealthData4 = '';
    } else {
        $serviceType = ''; // Set to an appropriate default value if not a service expert
        $experience = 0; // Set to an appropriate default value if not a service expert
        $petGender = mysqli_real_escape_string($connection, $_POST["gender"]);
        $petType = mysqli_real_escape_string($connection, $_POST["petType"]);
        $petName = mysqli_real_escape_string($connection, $_POST["petname"]);
        $petBreed = mysqli_real_escape_string($connection, $_POST["petbreed"]);
        $petAgeYears = intval($_POST["petyear"]);
        $petAgeMonths = intval($_POST["petage"]);
        $petWeight = mysqli_real_escape_string($connection, $_POST["weight"]);
        $vaccinationProof = "path_to_vaccination_proof"; // Set the path after file upload
        $petHealthData1 = mysqli_real_escape_string($connection, $_POST["ques1"]);
        $petHealthData2 = mysqli_real_escape_string($connection, $_POST["ques2"]);
        $petHealthData3 = mysqli_real_escape_string($connection, $_POST["ques3"]);
        $petHealthData4 = mysqli_real_escape_string($connection, $_POST["ques4"]);
    }

    $query = "INSERT INTO registrations (fname, email, phone, password, pet_parent_service_expert, profile_picture, service_type, experience, pet_gender, pet_type, pet_name, pet_breed, pet_age_years, pet_age_months, pet_weight, vaccination_proof, pet_health_data1, pet_health_data2, pet_health_data3, pet_health_data4) VALUES ('$fname', '$email', '$phone', '$password', '$petParentServiceExpert', '$profilePicturePath', '$serviceType', '$experience', '$petGender', '$petType', '$petName', '$petBreed', '$petAgeYears', '$petAgeMonths', '$petWeight', '$vaccinationProof', '$petHealthData1', '$petHealthData2', '$petHealthData3', '$petHealthData4')";
    
    if (mysqli_query($connection, $query)) {
        mysqli_close($connection);
        // Redirect to login page
        header("Location: login.php");
        exit();
    } else {
        // Error inserting data
        echo "Error: " . $query . "<br>" . mysqli_error($connection);
    }
    
    
}
?>
<!DOCTYPE html>
<html>
<!-- Your HTML form code goes here -->
</html>
    
