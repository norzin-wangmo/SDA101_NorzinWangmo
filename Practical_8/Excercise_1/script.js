const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');

// An object to track the validation status of each field
const validationStatus = {
    username: false,
    email: false,
    password: false,
    confirmPassword: false
};

// --- Validation Functions ---

function validateUsername() {
    const value = usernameInput.value;
    const errorElement = document.getElementById('usernameError');
    let isValid = false;

    if (value.length < 5) {
        errorElement.textContent = 'Username must be at least 5 characters long.';
    } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        errorElement.textContent = 'Username can only contain letters and numbers.';
    } else {
        errorElement.textContent = '';
        isValid = true;
    }
    
    updateFieldState(usernameInput, isValid);
    validationStatus.username = isValid;
    checkFormValidity();
}

function validateEmail() {
    const value = emailInput.value;
    const errorElement = document.getElementById('emailError');
    let isValid = false;
    
    // Simple regex for email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorElement.textContent = 'Please enter a valid email address.';
    } else {
        errorElement.textContent = '';
        isValid = true;
    }
    
    updateFieldState(emailInput, isValid);
    validationStatus.email = isValid;
    checkFormValidity();
}

function validatePassword() {
    const value = passwordInput.value;
    const errorElement = document.getElementById('passwordError');
    let isValid = false;
    
    // Check for minimum length (8), uppercase, lowercase, and special characters
    const minLength = value.length >= 8;
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    let errorMsg = [];
    if (!minLength) errorMsg.push('8 characters');
    if (!hasUpper) errorMsg.push('uppercase');
    if (!hasLower) errorMsg.push('lowercase');
    if (!hasSpecial) errorMsg.push('special character');
    
    if (errorMsg.length > 0) {
        errorElement.textContent = `Password must include: ${errorMsg.join(', ')}.`;
    } else {
        errorElement.textContent = '';
        isValid = true;
    }
    
    updateFieldState(passwordInput, isValid);
    validationStatus.password = isValid;
    checkFormValidity();
    
    // Also re-validate the confirmation field if the password changes
    validateConfirmPassword(); 
}

function validateConfirmPassword() {
    const pwdValue = passwordInput.value;
    const confirmValue = confirmPasswordInput.value;
    const errorElement = document.getElementById('confirmPasswordError');
    let isValid = false;

    if (pwdValue !== confirmValue) {
        errorElement.textContent = 'Passwords do not match.';
    } else if (pwdValue === "" || !validationStatus.password) {
        // If password is not yet valid or is empty, confirmation can't be valid
        errorElement.textContent = validationStatus.password ? '' : 'Please enter a valid password first.';
    } else {
        errorElement.textContent = '';
        isValid = true;
    }
    
    updateFieldState(confirmPasswordInput, isValid);
    validationStatus.confirmPassword = isValid;
    checkFormValidity();
}

// --- DOM Manipulation Helpers ---

function updateFieldState(inputElement, isValid) {
    inputElement.classList.remove('success', 'invalid');
    if (isValid && inputElement.value !== '') {
        inputElement.classList.add('success');
    } else if (!isValid && inputElement.value !== '') {
        inputElement.classList.add('invalid');
    }
}

function checkFormValidity() {
    // Check if ALL fields are valid
    const formIsValid = Object.values(validationStatus).every(status => status === true);
    submitBtn.disabled = !formIsValid;
}

// --- Event Listeners for Real-Time Validation ---

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);