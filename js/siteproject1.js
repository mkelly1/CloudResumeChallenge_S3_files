//How to get contents of form field 

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('formname').onsubmit = () => {
        const field = document.querySelector('#fieldname').value
        // use console.log() to see value of field during testing
        console.log(field);
        // to stop form from submitting during testing return false
        return false;
    }
});