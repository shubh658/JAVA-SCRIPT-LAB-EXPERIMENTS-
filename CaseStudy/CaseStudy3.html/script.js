document.getElementById("loginForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let prn = document.getElementById("prn").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    // Validation
    if(name === "" || prn === "" || email === "" || password === ""){
        alert("Please fill in all the fields.");
        return;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid Email ID.");
        return;
    }

    // Password Validation
    if(password.length < 6){
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Store data in localStorage
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentPRN", prn);
    localStorage.setItem("studentEmail", email);

    alert("Login Successful!");

    // Redirect to Marks Entry Page
    window.location.href = "index.html";

});
