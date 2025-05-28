function dateNow(){
    var currentDate = new Date();

    // Obtener día, mes y año
    var day = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var monthsOfYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var month = monthsOfYear[currentDate.getMonth()];

    // Obtener hora y minutos
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Formatear la hora en formato 12 horas con AM/PM
    var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
    hours = hours % 12;
    hours = hours ? hours : 12; // Las 12:00 PM se mostrarán como 12:00

    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    day = day < 10 ? '0' + day : day;

    // Construir la cadena con el formato deseado
    var formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ' ' + ampm;

    document.getElementById('dateNowIris').innerHTML = formattedDateTime;
}

dateNow();
