document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('consulta-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const nombreApellido = form.nombreApellido.value.trim();
        const cedula = form.cedula.value.trim();

        // Validar que los campos no estén vacíos
        if (!nombreApellido || !cedula) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Mostrar mensaje de carga
        const loadingMessage = document.getElementById('loading-message');
        loadingMessage.style.display = 'block';

        // Enviar datos a Google Sheets
        fetch('https://api.sheetbest.com/sheets/42ffec58-0379-4659-8693-17905b35bc85', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "NombreApellido": nombreApellido,
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
            console.log('Datos enviados correctamente:', data);
            alert('Sus datos han sido enviados correctamente.');
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            alert('Ocurrió un error al enviar los datos. Por favor, intente nuevamente.');
        })
        .finally(() => {
            // Ocultar mensaje de carga después de completar el proceso
            loadingMessage.style.display = 'none';
            form.reset(); // Opcional: limpiar el formulario
        });
    });
});
