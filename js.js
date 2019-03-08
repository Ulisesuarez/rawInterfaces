window.onload = function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

function updateTextInput(val) {
    document.getElementById('textInput').value = val + '€';
}

function hideModal(){
    var elmnt = document.getElementById("ofertas");
    elmnt.scrollIntoView();
}

function irAlCarrito(){
    window.location="carrito.html"
};