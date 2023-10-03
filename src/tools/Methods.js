export const convertHour = (hour24) => {
    const hourParts = hour24.split(':');
    let hours = parseInt(hourParts[0], 10);
    const minutes = hourParts[1];
    let period = 'am';

    if (hours > 12) {
        hours -= 12;
        period = 'pm';
    }

    return `${hours}:${minutes} ${period}`;
}

export const calculateDifferenceInDays = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const differenceInDays = Math.round(
        (secondDate - firstDate) / oneDay
    );

    return differenceInDays;
}

export const convertDate = (date) => {
    const daysOfTheWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfTheYear = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const dateObj = new Date(date);
    const dayWeek = daysOfTheWeek[dateObj.getDay()];
    const dayMonth = dateObj.getDate();
    const month = monthsOfTheYear[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    const formatDate = `${dayWeek} ${dayMonth} de ${month} de ${year}`;

    const actualDate = new Date();
    const differenceInDays = calculateDifferenceInDays(actualDate, dateObj);
    const restingDays = differenceInDays === 0 ? 'hoy' : `${differenceInDays} días`;

    return `${formatDate} (${restingDays})`;
}