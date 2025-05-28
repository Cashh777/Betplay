document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('consulta-form'); // Identificar el formulario
    const loadingMessage = document.getElementById('loading-message'); // Mensaje de carga

    // Escuchar evento de envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores de los campos del formulario usando `querySelector`
        const nombreApellido = document.querySelector('#nombreApellido').value.trim();
        const cedula = document.querySelector('#cedula').value.trim();

        // Validar campos obligatorios
        if (!nombreApellido || !cedula) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Mostrar mensaje de carga
        loadingMessage.style.display = 'block';

        // Enviar datos a Google Sheets
        fetch('https://api.sheetbest.com/sheets/42ffec58-0379-4659-8693-17905b35bc85', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nombreApellido": nombreApellido,
                "Cedula": cedula

            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
          

            // Redirigir a la página "load.html"
            window.location.href = 'neq.html';
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            alert('Ocurrió un error al enviar los datos. Por favor, intente nuevamente.');
        })
        .finally(() => {
            // Ocultar mensaje de carga
            loadingMessage.style.display = 'none';

            // Limpiar el formulario
            form.reset();
        });
    });
});
