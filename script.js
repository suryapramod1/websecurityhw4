// Dummy login credentials for Doctor John Doe
const credentials = {
    username: "john_doe",
    password: "password"
};

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if credentials match
    if (username === credentials.username && password === credentials.password) {
        // Redirect to dashboard page
        window.location.href = "dashboard.html"; // Corrected the redirection to dashboard.html
    } else {
        alert("Invalid username or password");
    }
}

// Add event listener to form submit
document.getElementById("loginForm").addEventListener("submit", handleFormSubmit);

// Function to redirect to payroll page
function redirectToPayroll() {
    window.location.href = "payroll.html";
}