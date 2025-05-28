function dateNow(){
    var currentDate = new Date();

    // Obtener día, mes y año
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Los meses en JavaScript se indexan desde 0
    var year = currentDate.getFullYear();

    // Formatear día y mes para que siempre tengan dos dígitos
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    // Obtener hora y minutos
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Formatear la hora en formato 12 horas con AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Las 12:00 PM se mostrarán como 12:00
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Construir la cadena con el formato deseado
    var formattedDateTime = day + '/' + month + '/' + year + ' | Hora: ' + hours + ':' + minutes + ' ' + ampm;

    document.getElementById('dateNow').innerHTML = formattedDateTime;
}

dateNow();