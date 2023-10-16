export const calculateTimeRemaining = (date, hour) => {
  const actualDate = new Date()
  const dateObj = new Date(date)
  let daysRemaining = calculateDifferenceInDays(actualDate, dateObj)
  let dateFinal = ``
  if (daysRemaining > 0) {
    dateFinal = `${daysRemaining} días con`
  }
  const hoursRemaining = updateRemainingTime(hour)
  return `${dateFinal} ${hoursRemaining}`
}

const updateRemainingTime = (targetTime) => {
  const now = new Date()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentSecond = now.getSeconds()

  const targetTimeParts = targetTime.split(':')
  const targetHour = parseInt(targetTimeParts[0])
  const targetMinute = parseInt(targetTimeParts[1])
  const targetSecond = parseInt(targetTimeParts[2])

  let hoursRemaining = targetHour - currentHour
  let minutesRemaining = targetMinute - currentMinute
  let secondsRemaining = targetSecond - currentSecond

  if (secondsRemaining < 0) {
    minutesRemaining--
    secondsRemaining += 60
  }

  if (minutesRemaining < 0) {
    hoursRemaining--
    minutesRemaining += 60
  }

  if (hoursRemaining < 0) {
    // The target time has already passed
    return 'The target time has passed'
  } else {
    // Format the remaining time
    return `${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`
  }
}

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