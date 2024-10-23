export function formValidation() {
    (() => {
        'use strict';
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(form => {
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            }
        });
    })();
}
