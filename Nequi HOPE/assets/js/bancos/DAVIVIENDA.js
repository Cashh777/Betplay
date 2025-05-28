function dateNow(){
    var currentDate = new Date();

    // Días de la semana
    var daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Meses del año
    var monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var monthOfYear = monthsOfYear[currentDate.getMonth()];

    // Obtener día, mes y año
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();

    // Obtener hora y minutos
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Formatear la hora en formato 12 horas con AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Las 12:00 PM se mostrarán como 12:00
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Construir la cadena con el formato deseado
    var formattedDateTime = dayOfWeek + ' ' + day + ' de ' + monthOfYear + ' de ' + year + ', ' + hours + ':' + minutes + ' ' + ampm;

    document.getElementById('dateNowDavivienda').innerHTML = formattedDateTime;
}

dateNow();
