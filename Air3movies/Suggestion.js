const scriptURL = 'https://script.google.com/macros/s/AKfycbx5_Nnv5f44-V8luxTZHWSa_7-a9OtGaUx61Y7ztE7fQfwupqyKyHzbpOlzXl0EpgN7Eg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(Response => alert("Thank you! your suggestion has been submitted successfully"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})