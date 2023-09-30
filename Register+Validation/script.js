
document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.querySelector("form");
  
    
    form.addEventListener("submit", function (event) {
      
      event.preventDefault();
  
      
      clearErrors();
  
      
      const fullNameInput = document.getElementById("fullname");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirm-password");
  
      
      if (isEmpty(fullNameInput)) {
        displayError(fullNameInput, "Please enter your full name.");
        highlightError(fullNameInput);
      }
  
      
      if (!isValidEmail(emailInput)) {
        displayError(emailInput, "Please enter a valid email address.");
        highlightError(emailInput);
      }
  
      
      if (!isPasswordValid(passwordInput)) {
        displayError(passwordInput, "Password must be at least 6 characters long.");
        highlightError(passwordInput);
      }
  
      
      if (!arePasswordsMatching(passwordInput, confirmPasswordInput)) {
        displayError(confirmPasswordInput, "Passwords do not match.");
        highlightError(confirmPasswordInput);
      }
  
      
      if (hasErrors()) {
        return;
      }
  
      
      alert("Form submitted successfully!");
    });
  
    
    function isEmpty(input) {
      return input.value.trim() === "";
    }
  
    
    function isValidEmail(input) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(input.value);
    }
  
    
    function isPasswordValid(input) {
      return input.value.length >= 6;
    }
  
    
    function arePasswordsMatching(password, confirmPassword) {
      return password.value === confirmPassword.value;
    }
  
    
    function displayError(input, message) {
      const errorElement = input.nextElementSibling; 
      errorElement.textContent = message;
      errorElement.style.color = "red";
    }
  
    
    function highlightError(input) {
      input.classList.add("error-input");
    }
  
    
    function clearErrors() {
      const errorElements = document.querySelectorAll(".error-message");
      errorElements.forEach(function (element) {
        element.textContent = "";
      });
  
      const errorInputs = document.querySelectorAll(".error-input");
      errorInputs.forEach(function (input) {
        input.classList.remove("error-input");
      });
    }
  
    
    function hasErrors() {
      const errorElements = document.querySelectorAll(".error-message");
      return Array.from(errorElements).some(function (element) {
        return element.textContent !== "";
      });
    }
  });
  