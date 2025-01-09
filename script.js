
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality not yet implemented!');
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
        } else {
            alert('Sign-up functionality not yet implemented!');
        }
    });
}

 // Function to toggle password visibility
 function passwordVisibility() {
    var passwordField = document.getElementById('password');
    var passwordCheckbox = document.getElementById('show-password');
    if (passwordField && passwordCheckbox) {
        passwordField.type = passwordCheckbox.checked ? 'text' : 'password';
    }
}
