// Step-1: Add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(event){
    // Step-2: Get the email address inside the email input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: Get password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Step-4: Verify 
    // !!Danger 
    if(email === 'sontan@bap.com' && password === '123456'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password vule gechos. Toke ami teijjo sontan ghosona korlam');
    }
})